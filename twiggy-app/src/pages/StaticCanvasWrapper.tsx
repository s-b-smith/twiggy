interface StaticCanvasWrapperProps {
  children: React.ReactNode;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  zIndex?: number;
}
// TODO: Cleanup style properties
const StaticCanvasWrapper = ({
  children,
  height,
  marginTop,
  marginBottom,
  zIndex
}: StaticCanvasWrapperProps) => {
  return (
    <div
      style={{
        height: height ?? '200px',
        marginTop: marginTop ?? '',
        marginBottom: marginBottom ?? '',
        zIndex: zIndex ?? ''
      }}
    >
      {children}
    </div>
  );
};

export default StaticCanvasWrapper;
