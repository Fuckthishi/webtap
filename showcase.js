(() => {
  const videos = [
    {id:'Y_vwdNh1yjY',title:'Documentary Animation',category:'DOCUMENTARY / 01'},
    {id:'Y2BBqjNPLoM',title:'Motion Graphics & Effects',category:'MOTION / 02'},
    {id:'zH7UUyPbBcE',title:'Engaging Short-Form Edits',category:'SHORT-FORM / 03'},
    {id:'YlObsDQ-HJM',title:'Fast-Paced Editing',category:'FAST-PACED / 04'},
    {id:'Un_jV5fCxxg',title:'Commentary Editing',category:'COMMENTARY / 05'}
  ];
  const poster = document.querySelector('#showcase-poster');
  const status = document.querySelector('#video-status');
  const thumbnail=poster.querySelector('img');
  thumbnail.addEventListener('error',()=>{thumbnail.hidden=true;});
  thumbnail.addEventListener('load',()=>{thumbnail.hidden=false;});
  if(thumbnail.complete&&!thumbnail.naturalWidth)thumbnail.hidden=true;
  const choices = [...document.querySelectorAll('[data-video]')];
  const rail=document.querySelector('.work-list');
  const previous=document.querySelector('#reel-prev');
  const next=document.querySelector('#reel-next');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  choices.forEach(button=>{
    const image=button.querySelector('img');
    image.addEventListener('error',()=>{image.hidden=true;});
    if(image.complete&&!image.naturalWidth)image.hidden=true;
  });
  let selected = 0, player, apiPromise, loadTimer;
  function updateChoices(index){
    choices.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
    document.querySelector('#reel-count').textContent=String(index+1).padStart(2,'0')+' / 05';
    previous.disabled=index===0;
    next.disabled=index===videos.length-1;
    if(rail.scrollWidth>rail.clientWidth){
      const card=choices[index];
      const left=card.getBoundingClientRect().left-rail.getBoundingClientRect().left+rail.scrollLeft;
      rail.scrollTo({left:left-(rail.clientWidth-card.offsetWidth)/2,behavior:reducedMotion.matches?'auto':'smooth'});
    }
  }
  previous.addEventListener('click',()=>play(Math.max(0,selected-1)));
  next.addEventListener('click',()=>play(Math.min(videos.length-1,selected+1)));
  function loadAPI() {
    if (window.YT?.Player) return Promise.resolve();
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((resolve,reject) => {
      const script = document.createElement('script');
      script.src='https://www.youtube.com/iframe_api';
      script.async=true;
      const timeout=setTimeout(()=>reject(new Error('Video service timed out')),15000);
      window.onYouTubeIframeAPIReady=()=>{clearTimeout(timeout);resolve();};
      script.onerror=()=>{clearTimeout(timeout);reject(new Error('Video service unavailable'));};
      document.head.append(script);
    });
    return apiPromise;
  }
  function fallback() {
    clearTimeout(loadTimer);
    status.textContent='The embedded player is unavailable here. Use “Watch on YouTube” to open this video.';
    status.dataset.state='unavailable';
  }
  async function play(index) {
    selected=index;
    const video=videos[index];
    updateChoices(index);
    document.querySelector('#video-title').textContent=video.title;
    document.querySelector('#video-category').textContent=video.category;
    document.querySelector('#video-external').href='https://www.youtube.com/watch?v='+video.id;
    poster.querySelector('img').src='https://i.ytimg.com/vi/'+video.id+'/hqdefault.jpg';
    poster.setAttribute('aria-label','Play '+video.title);
    poster.querySelector('.poster-label').textContent='PLAY VIDEO';
    status.textContent='Loading '+video.title+'…';
    status.dataset.state='loading';
    clearTimeout(loadTimer);
    loadTimer=setTimeout(fallback,20000);
    try {
      await loadAPI();
      if(selected!==index)return;
      poster.hidden=true;
      if(player?.loadVideoById){player.loadVideoById(video.id);return;}
      if(player)return;
      player=new YT.Player('showcase-mount',{
        host:'https://www.youtube-nocookie.com',videoId:video.id,width:'100%',height:'100%',
        playerVars:{playsinline:1,rel:0,origin:location.origin},
        events:{
          onReady:event=>{
            clearTimeout(loadTimer);
            const frame=event.target.getIframe();
            frame.title='WEBTAP video showcase';
            frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
            frame.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            status.textContent='Ready. Use the player controls to play, adjust sound, or go fullscreen.';
            status.dataset.state='ready';
            if(selected!==index)event.target.loadVideoById(videos[selected].id);else event.target.playVideo();
          },
          onStateChange:event=>{
            if(event.data===1){clearTimeout(loadTimer);status.textContent='Now playing: '+videos[selected].title;status.dataset.state='playing';}
            if(event.data===3){status.textContent='Buffering video…';status.dataset.state='buffering';clearTimeout(loadTimer);loadTimer=setTimeout(fallback,20000);}
            if(event.data===2){clearTimeout(loadTimer);status.textContent='Paused — '+videos[selected].title;status.dataset.state='paused';}
            if(event.data===0){status.textContent='Finished. Choose another example or replay this one.';status.dataset.state='ended';}
          },
          onError:fallback,
          onAutoplayBlocked:()=>{clearTimeout(loadTimer);status.textContent='Press play inside the video to start.';status.dataset.state='ready';}
        }
      });
    }catch{apiPromise=undefined;poster.hidden=false;fallback();}
  }
  poster.addEventListener('click',()=>play(selected));
  choices.forEach(button=>button.addEventListener('click',()=>play(Number(button.dataset.video))));
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&player?.pauseVideo)player.pauseVideo();});
  new IntersectionObserver(entries=>{if(!entries[0].isIntersecting&&player?.pauseVideo)player.pauseVideo();},{threshold:0}).observe(document.querySelector('.video-shell'));
})();
