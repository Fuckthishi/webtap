interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => (
  <img
    src="/webtap-logo.png"
    alt="Webtap"
    className={`inline-block object-contain invert ${className ?? "w-8 h-8"}`}
  />
);

export default Logo;
