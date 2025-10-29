import BackgroundEditor from 'pages/background/BackgroundEditor';
import BodyEditor from 'pages/body/BodyEditor';
import ClothesEditor from 'pages/clothes/ClothesEditor';
import ColorEditor from 'pages/color/ColorEditor';
import { useState } from 'react';
import 'styles/overlay.css';

// TODO: Lazy load each editor besides the body editor

interface BodyIndices {
  head: number;
  body: number;
  legs: number;
}
const bodyIndices: BodyIndices = {
  head: 0,
  body: 0,
  legs: 0
};

const EditorContent = () => {
  const [bodyIndices, setBodyIndices] = useState<BodyIndices>({
    head: 0,
    body: 0,
    legs: 0
  });
  // bodyIndices={bodyIndices} setBodyIndices={setBodyIndices}

  return (
    <div className="overlay-container">
      <BodyEditor bodyIndices={bodyIndices} setBodyIndices={setBodyIndices} />
      <ClothesEditor />
      <ColorEditor />
      <BackgroundEditor />
    </div>
  );
};

export default EditorContent;
