import { action } from 'typesafe-actions';

import { CoreActionsEnum } from '../enums/CoreActionsEnum';
import { LangEnum } from '../enums/LangEnum';
import { ModalsEnum } from '../enums/ModalsEnum';
import { TagsEnum } from '../enums/TagsEnum';
import { ThemeEnum } from '../enums/ThemeEnum';

export const coreSetVisibleModal = (value: ModalsEnum) => action(CoreActionsEnum.CORE_SET_VISIBLE_MODAL, { value });
export const coreRemoveVisibleModal = (value: ModalsEnum) =>
  action(CoreActionsEnum.CORE_REMOVE_VISIBLE_MODAL, { value });

export const coreGetLang = () => action(CoreActionsEnum.CORE_GET_LANG);
export const coreSetLang = (lang: LangEnum) => action(CoreActionsEnum.CORE_SET_LANG, { lang });

export const coreSetITNews = (value: boolean) => action(TagsEnum.IT, { value });
export const coreSetGovernmentNews = (value: boolean) => action(TagsEnum.GOVERNMENT, { value });
export const coreSetBusinessNews = (value: boolean) => action(TagsEnum.BUSINESS, { value });
export const coreSetEducationNews = (value: boolean) => action(TagsEnum.EDUCATION, { value });
export const coreSetSearchDraft = (value: string) => action(TagsEnum.SEARCH, { value });

export const coreSetTheme = (value: boolean) => action(ThemeEnum.CORE_THEME_IS_DARK, { value });
