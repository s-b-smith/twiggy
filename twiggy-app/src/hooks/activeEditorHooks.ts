import { useLocation } from 'react-router';
import { AppPath, Editor } from 'constants/app';

export const useActiveEditor = (): Editor => {
  const { pathname: currentPath } = useLocation();

  switch (currentPath) {
    case AppPath.Home:
    case '/':
    case AppPath.Body:
      return Editor.Body;
    case AppPath.Clothes:
      return Editor.Clothes;
    case AppPath.Color:
      return Editor.Color;
    case AppPath.Background:
      return Editor.Background;
    default:
      return Editor.None;
  }
};

export const useIsEditorActive = (editor: Editor): boolean => {
  const activeEditor = useActiveEditor();

  return editor === activeEditor;
};
