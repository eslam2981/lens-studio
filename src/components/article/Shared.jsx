export const ORANGE = "#F5701A";

export const OrangePill = ({ children }) => (
  <span
    className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white"
    style={{ backgroundColor: ORANGE }}>
    {children}
  </span>
);

export const IconBox = ({ icon: Icon, size = 8 }) => (
  <span
    className="inline-flex shrink-0 items-center justify-center rounded-xl"
    style={{ backgroundColor: ORANGE, width: `${size * 4}px`, height: `${size * 4}px` }}>
    <Icon className="h-4 w-4 text-white" strokeWidth={2.5} />
  </span>
);
