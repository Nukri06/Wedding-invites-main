import peony from "@/assets/peony.png";
import vertical from "@/assets/floral-vertical.png";
import corner from "@/assets/floral-corner.png";
import sprig from "@/assets/sprig.png";

/**
 * Decorative-only images. All hidden from screen readers.
 */

export const SidePeony = ({
  side = "left",
  className = "",
}: { side?: "left" | "right"; className?: string }) => (
  <img
    src={peony}
    alt=""
    aria-hidden
    loading="lazy"
    className={`pointer-events-none select-none absolute ${
      side === "left" ? "left-0 -translate-x-1/4" : "right-0 translate-x-1/4 scale-x-[-1]"
    } w-40 md:w-64 lg:w-72 opacity-90 ${className}`}
  />
);

export const VerticalFloral = ({
  side = "left",
  className = "",
}: { side?: "left" | "right"; className?: string }) => (
  <img
    src={vertical}
    alt=""
    aria-hidden
    loading="lazy"
    className={`pointer-events-none select-none absolute top-0 bottom-0 h-full w-auto opacity-80 hidden lg:block ${
      side === "left" ? "left-0 -translate-x-1/3" : "right-0 translate-x-1/3 scale-x-[-1]"
    } ${className}`}
  />
);

export const CornerFloral = ({
  position,
  className = "",
  size = "md",
}: {
  position: "tl" | "tr" | "bl" | "br";
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const transforms: Record<string, string> = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 scale-x-[-1]",
    bl: "bottom-0 left-0 scale-y-[-1]",
    br: "bottom-0 right-0 scale-x-[-1] scale-y-[-1]",
  };
  const sizes: Record<string, string> = {
    sm: "w-32 md:w-44",
    md: "w-48 md:w-72",
    lg: "w-64 md:w-96",
  };
  return (
    <img
      src={corner}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none select-none absolute ${transforms[position]} ${sizes[size]} opacity-80 ${className}`}
    />
  );
};

export const Sprig = ({ className = "" }: { className?: string }) => (
  <img
    src={sprig}
    alt=""
    aria-hidden
    loading="lazy"
    className={`pointer-events-none select-none ${className}`}
  />
);

export const Ornaments = () => (
  <span aria-hidden className="inline-flex items-center gap-3 text-gold/70">
    <span className="block h-px w-10 md:w-16 bg-gold/60" />
    <span className="font-display text-xl">❦</span>
    <span className="block h-px w-10 md:w-16 bg-gold/60" />
  </span>
);