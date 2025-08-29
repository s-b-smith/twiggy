interface StaticCanvasWrapperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const StaticCanvasWrapper = ({ children, style }: StaticCanvasWrapperProps) => {
  return (
    <div
      style={{
        height: style?.height ?? '200px',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default StaticCanvasWrapper;
