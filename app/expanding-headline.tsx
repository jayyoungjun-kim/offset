const lines = [
  "OFFSET is a design learning platform",
  "that explores how designers learn, grow, and evolve.",
];

export default function ExpandingHeadline() {
  return <div className="home-headline" aria-label={lines.join(" ")}>
    {lines.map((line) => <span
      key={line}
      className="home-headline-line"
      aria-hidden="true"
    >{line}</span>)}
  </div>;
}
