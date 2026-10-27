export function Footprints({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 40"
      width="56"
      height="32"
      aria-hidden="true"
      fill="currentColor"
    >
      <ellipse cx="18" cy="14" rx="8" ry="11" opacity="0.55" />
      <circle cx="11" cy="5" r="2.4" opacity="0.55" />
      <circle cx="16" cy="3" r="2.4" opacity="0.55" />
      <circle cx="21" cy="3.5" r="2.2" opacity="0.55" />
      <circle cx="25" cy="6.5" r="2" opacity="0.55" />
      <ellipse cx="50" cy="24" rx="8" ry="11" opacity="0.4" />
      <circle cx="43" cy="15" r="2.4" opacity="0.4" />
      <circle cx="48" cy="13" r="2.4" opacity="0.4" />
      <circle cx="53" cy="13.5" r="2.2" opacity="0.4" />
      <circle cx="57" cy="16.5" r="2" opacity="0.4" />
    </svg>
  )
}
