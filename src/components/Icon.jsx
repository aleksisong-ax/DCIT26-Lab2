import React from 'react';

// Small hairline icon set. One stroke weight, no fills, square caps.
const paths = {
  arrowRight: <><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  minus: <path d="M5 12h14" />,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></>,
  close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  menu: <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
};

export default function Icon({ name, size = 16, strokeWidth = 1.5, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      focusable="false"
    >
      {paths[name] || paths.arrowRight}
    </svg>
  );
}
