import DrawingCanvas, { DrawnPoint } from 'components/DrawingCanvas';
// import { NextNavButton, PrevNavButton } from 'components/TwiggyCarousel';
import { Editor } from 'constants/app';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import { useAppSelector } from 'hooks/react-redux-hooks';
import { useState } from 'react';

const ColorEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEditorActive = useIsEditorActive(Editor.Color);
  const [drawnPoints, setDrawnPoints] = useState<DrawnPoint[]>([]);

  const colorCanvas = (
    <DrawingCanvas
      isDrawingActive={isEditorActive}
      drawnPoints={drawnPoints}
      setDrawnPoints={setDrawnPoints}
      style={{
        display: 'block',
        border: '2px dashed black',
        width: '100%',
        height: '100%'
      }}
    />
  );

  return <></>;
  // return (
  //   <div className="overlay-component" style={{ zIndex: 3 }}>
  //     <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  //       <PrevNavButton />
  //       <NextNavButton />
  //     </div>
  //   </div>
  // );]

  // zIndex is 3
  // return (
  //   <div className="overlay-component" style={{ zIndex: 3 }}>
  //     {isEditorActive ? (
  //       <div style={{ height: '40.5em', width: 'calc(100% - 0.1em)', marginTop: '-0.65em' }}>
  //         {colorCanvas}
  //       </div>
  //     ) : (
  //       <StaticCanvasWrapper
  //         style={{
  //           height: '40.5em',
  //           width: 'calc(100% - 0.1em)',
  //           marginTop: '-0.65em'
  //         }}
  //       >
  //         {colorCanvas}
  //       </StaticCanvasWrapper>
  //     )}
  //   </div>
  // );
};

export default ColorEditor;
