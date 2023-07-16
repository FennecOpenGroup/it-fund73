/* eslint-disable @typescript-eslint/default-param-last */
import { ActionType } from 'typesafe-actions';

import * as actions from '../actions/coreActions';
import { CoreActionsEnum } from '../enums/CoreActionsEnum';
import { LangEnum } from '../enums/LangEnum';
import { TagsEnum } from '../enums/TagsEnum';
import { ThemeEnum } from '../enums/ThemeEnum';
import { ICoreState } from '../interfaces/ICoreState';

export type CoreAction = ActionType<typeof actions>;

const initialCoreState: ICoreState = {
  lang: LangEnum.RU,
  it: true,
  education: true,
  business: true,
  government: true,
  themeIsDark: false,
};

export function coreReducer(state: ICoreState = initialCoreState, action: CoreAction) {
  switch (action.type) {
    case CoreActionsEnum.CORE_SET_VISIBLE_MODAL: {
      return {
        ...state,
        [action.payload.value]: true,
      };
    }
    case CoreActionsEnum.CORE_REMOVE_VISIBLE_MODAL: {
      return {
        ...state,
        [action.payload.value]: false,
      };
    }
    case CoreActionsEnum.CORE_SET_LANG: {
      return {
        ...state,
        lang: action.payload.lang,
      };
    }
    case CoreActionsEnum.CORE_SET_NEWS: {
      return {
        ...state,
        news: action.payload.value,
      };
    }
    case CoreActionsEnum.CORE_SET_EVENTS: {
      return {
        ...state,
        events: action.payload.value,
      };
    }
    case CoreActionsEnum.CORE_SET_DOCS: {
      return {
        ...state,
        docs: action.payload.value,
      };
    }
    case CoreActionsEnum.CORE_SET_EMOTIONS: {
      return {
        ...state,
        emotions: action.payload.value,
      };
    }
    case ThemeEnum.CORE_THEME_IS_DARK: {
      return {
        ...state,
        themeIsDark: action.payload.value,
      };
    }
    case TagsEnum.IT: {
      return {
        ...state,
        it: action.payload.value,
      };
    }
    case TagsEnum.EDUCATION: {
      return {
        ...state,
        education: action.payload.value,
      };
    }
    case TagsEnum.BUSINESS: {
      return {
        ...state,
        business: action.payload.value,
      };
    }
    case TagsEnum.GOVERNMENT: {
      return {
        ...state,
        government: action.payload.value,
      };
    }
    case TagsEnum.SEARCH: {
      return {
        ...state,
        search: action.payload.value,
      };
    }
    default:
      return state;
  }
}
