const SIZE_STYLES = {
  hero: {
    circle: "h-14 w-14 sm:h-16 sm:w-16",
    icon: "[&>svg]:h-7 [&>svg]:w-7 sm:[&>svg]:h-8 sm:[&>svg]:w-8",
    title:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient px-2 sm:px-0",
  },
  sectionPink: {
    circle: "h-11 w-11 sm:h-12 sm:w-12",
    icon: "[&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6",
    title: "text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-pink",
  },
  sectionGradient: {
    circle: "h-11 w-11 sm:h-12 sm:w-12",
    icon: "[&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6",
    title: "text-2xl sm:text-3xl md:text-4xl font-bold text-gradient px-2 sm:px-0",
  },
  compact: {
    circle: "h-10 w-10 sm:h-11 sm:w-11",
    icon: "[&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-5 sm:[&>svg]:w-5",
    title: "text-xl sm:text-2xl font-semibold text-gradient-pink",
  },
  brand: {
    circle: "h-12 w-12 sm:h-14 sm:w-14",
    icon: "[&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-7 sm:[&>svg]:w-7",
    title:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient text-center sm:text-left",
  },
};

/**
 * Main / subsection titles with icon in a full rounded (circle) solid background.
 */
export default function SectionHeading({
  as: Comp = "h2",
  icon,
  iconBg = "bg-cyber-cyan",
  size = "hero",
  className = "",
  titleClassName,
  align = "center",
  layout = "stack",
  children,
}) {
  const cfg = SIZE_STYLES[size] ?? SIZE_STYLES.hero;

  const iconWrap = (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-black/20 ${iconBg} ${cfg.circle} ${cfg.icon}`}
      aria-hidden="true"
    >
      {icon}
    </div>
  );

  if (layout === "row") {
    return (
      <div className={`flex min-w-0 flex-row items-center gap-3 sm:gap-4 text-left ${className}`}>
        {iconWrap}
        <Comp className={`min-w-0 ${titleClassName ?? cfg.title}`}>{children}</Comp>
      </div>
    );
  }

  /* Centered stack on small / sm screens; horizontal row from md */
  if (layout === "stack-row-md") {
    return (
      <div
        className={`flex min-w-0 flex-col items-center gap-3 text-center md:flex-row md:items-center md:gap-4 md:text-left ${className}`}
      >
        {iconWrap}
        <Comp className={`min-w-0 text-center md:text-left ${titleClassName ?? cfg.title}`}>
          {children}
        </Comp>
      </div>
    );
  }

  const alignClass =
    align === "footer"
      ? "flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:text-left"
      : align === "responsive"
        ? "items-center text-center sm:items-start sm:text-left"
        : "items-center text-center";

  return (
    <div className={`flex flex-col gap-3 sm:gap-4 ${alignClass} ${className}`}>
      {iconWrap}
      <Comp className={titleClassName ?? cfg.title}>{children}</Comp>
    </div>
  );
}
