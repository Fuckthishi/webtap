const bookingDialog = document.querySelector('#booking-dialog');
const bookingEmbed = document.querySelector('#calendly-embed');
const bookingState = document.querySelector('#booking-state');
const bookingStatus = document.querySelector('#booking-status');
const retryBooking = document.querySelector('#retry-booking');
let bookingScriptPromise;
let bookingStarted = false;
let bookingReady = false;
let bookingTimer;

function loadBookingScript() {
  if (window.Calendly?.initInlineWidget) return Promise.resolve();
  if (bookingScriptPromise) return bookingScriptPromise;
  bookingScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    const timer = setTimeout(() => fail(), 15000);
    function fail() {
      clearTimeout(timer);
      script.remove();
      bookingScriptPromise = undefined;
      reject(new Error('Calendly could not be loaded'));
    }
    script.onload = () => {
      clearTimeout(timer);
      if (window.Calendly?.initInlineWidget) resolve();
      else fail();
    };
    script.onerror = fail;
    document.head.append(script);
  });
  return bookingScriptPromise;
}

function showBookingError() {
  bookingState.hidden = false;
  bookingState.classList.add('is-error');
  bookingStatus.textContent = 'The calendar is taking longer to load.';
  retryBooking.hidden = false;
  bookingEmbed.setAttribute('aria-busy', 'false');
}

async function startBooking() {
  if (bookingStarted) return;
  bookingStarted = true;
  bookingReady = false;
  bookingState.hidden = false;
  bookingState.classList.remove('is-error');
  bookingStatus.textContent = 'Loading available times…';
  retryBooking.hidden = true;
  bookingEmbed.setAttribute('aria-busy', 'true');
  clearTimeout(bookingTimer);
  try {
    await loadBookingScript();
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/hassansalehh753/30min?hide_event_type_details=1&background_color=f2f1ed&text_color=101010&primary_color=101010',
      parentElement: bookingEmbed
    });
    const frame = bookingEmbed.querySelector('iframe');
    if (frame) frame.title = 'Book a 30-minute call with WEBTAP';
    bookingTimer = setTimeout(() => { if (!bookingReady) showBookingError(); }, 18000);
  } catch {
    bookingStarted = false;
    showBookingError();
  }
}

document.querySelectorAll('[data-book-call]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    bookingDialog.showModal();
    document.body.classList.add('modal-open');
    startBooking();
  });
});
document.querySelector('#close-booking').addEventListener('click', () => bookingDialog.close());
bookingDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
bookingDialog.addEventListener('click', event => {
  if (event.target !== bookingDialog) return;
  const bounds = bookingDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) bookingDialog.close();
});
retryBooking.addEventListener('click', () => {
  bookingStarted = false;
  bookingEmbed.replaceChildren();
  startBooking();
});
window.addEventListener('message', event => {
  const frame = bookingEmbed.querySelector('iframe');
  if (event.origin !== 'https://calendly.com' || event.source !== frame?.contentWindow) return;
  if (!['calendly.profile_page_viewed', 'calendly.event_type_viewed', 'calendly.date_and_time_selected', 'calendly.event_scheduled'].includes(event.data?.event)) return;
  bookingReady = true;
  clearTimeout(bookingTimer);
  bookingState.hidden = true;
  bookingEmbed.setAttribute('aria-busy', 'false');
});
