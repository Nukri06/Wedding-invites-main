import dividerImg from "@/assets/gold-divider.png";

export const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center my-8 ${className}`}>
    <img
      src={dividerImg}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="h-10 md:h-12 w-auto opacity-90 select-none pointer-events-none"
    />
  </div>
);