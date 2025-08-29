import BackgroundEditor from 'pages/background/BackgroundEditor';
import BodyEditor from 'pages/body/BodyEditor';
import ClothesEditor from 'pages/clothes/ClothesEditor';
import ColorEditor from 'pages/color/ColorEditor';
import 'styles/overlay.css';

// TODO: Lazy load each editor besides the body editor
const EditorContent = () => {
  return (
    <div className="overlay-container">
      <BodyEditor />
      <ClothesEditor />
      <ColorEditor />
      <BackgroundEditor />
    </div>
  );
};

export default EditorContent;
