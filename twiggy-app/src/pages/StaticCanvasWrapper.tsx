const StaticCanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ height: '200px' }}>{children}</div>;
};

export default StaticCanvasWrapper;
