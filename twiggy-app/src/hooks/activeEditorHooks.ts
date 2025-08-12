import { AppPaths } from 'App';
import { useLocation } from 'react-router';

// TODO: Look into latest lazy export update
export enum Editors {
  Body,
  Clothes,
  Color,
  Background,
  None
}

export const useGetActiveEditor = (): Editors => {
  const { pathname: currentPath } = useLocation();

  switch (currentPath) {
    case AppPaths.Home:
    case '/':
    case AppPaths.Body:
      return Editors.Body;
    case AppPaths.Clothes:
      return Editors.Clothes;
    case AppPaths.Color:
      return Editors.Color;
    case AppPaths.Background:
      return Editors.Background;
    default:
      return Editors.None;
  }
};

export const useIsEditorActive = (editor: Editors): boolean => {
  const activeEditor = useGetActiveEditor();

  return editor === activeEditor;
};
