import { ShieldCheck } from "lucide-react";
import { trustBadges } from "@/data/site";

interface Props {
  className?: string;
}

const TrustBadges = ({ className = "" }: Props) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {trustBadges.map((b) => (
        <span
          key={b}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-foreground/85 ring-elegant"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-primary-glow" />
          {b}
        </span>
      ))}
    </div>
  );
};

export default TrustBadges;
