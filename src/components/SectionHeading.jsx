export default function SectionHeading({ number, title, description, action }) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        {number && <span className="section-number">{number}</span>}
        <h2>{title}</h2>
        {description && <p className="section-heading-description">{description}</p>}
      </div>
      {action && <div className="section-heading-action">{action}</div>}
    </div>
  );
}
