import { Editor } from 'constants/app';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import { useAppSelector } from 'hooks/react-redux-hooks';
import { useEffect } from 'react';

const ColorEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEditorActive = useIsEditorActive(Editor.Color);

  useEffect(() => {
    if (isEditorActive) {
      alert('Not built yet');
    }
  }, [isEditorActive]);

  return <></>;
};

export default ColorEditor;
