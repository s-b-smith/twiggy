import BackgroundEditor from 'pages/background/BackgroundEditor';
import BodyEditor from 'pages/body/BodyEditor';
import ClothesEditor from 'pages/clothes/ClothesEditor';
import ColorEditor from 'pages/color/ColorEditor';

const EditorContent = () => {
  return (
    <>
      <BodyEditor />
      <ClothesEditor />
      <ColorEditor />
      <BackgroundEditor />
    </>
  );
};

export default EditorContent;
