export default function SectionHeading({ eyebrow, title, description, action, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading-copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className="section-heading-description">{description}</p>}
      </div>
      {action && <div className="section-heading-action">{action}</div>}
    </div>
  );
}
