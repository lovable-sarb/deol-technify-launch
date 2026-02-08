interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {label && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
