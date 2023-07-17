import { action } from 'typesafe-actions';

import { CoreActionsEnum } from '../enums/CoreActionsEnum';
import { LangEnum } from '../enums/LangEnum';
import { ModalsEnum } from '../enums/ModalsEnum';
import { TagsEnum } from '../enums/TagsEnum';
import { ThemeEnum } from '../enums/ThemeEnum';
import { IDocs } from '../interfaces/IDocs';
import { IEmotions } from '../interfaces/IEmotions';
import { IEvents } from '../interfaces/IEvents';
import { INews } from '../interfaces/INews';
import { ITeam } from '../interfaces/ITeam';

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
export const coreGetTheme = () => action(ThemeEnum.CORE_GET_THEME_IS_DARK);

export const coreGetNews = () => action(CoreActionsEnum.CORE_GET_NEWS);
export const coreSetNews = (value: INews[]) => action(CoreActionsEnum.CORE_SET_NEWS, { value });

export const coreGetDocs = () => action(CoreActionsEnum.CORE_GET_DOCS);
export const coreSetDocs = (value: IDocs[]) => action(CoreActionsEnum.CORE_SET_DOCS, { value });

export const coreSetEmotions = (value: IEmotions[]) => action(CoreActionsEnum.CORE_SET_EMOTIONS, { value });

export const coreGetEvents = () => action(CoreActionsEnum.CORE_GET_EVENTS);
export const coreSetEvents = (value: IEvents[]) => action(CoreActionsEnum.CORE_SET_EVENTS, { value });

export const coreGetTeam = () => action(CoreActionsEnum.CORE_GET_TEAM);
export const coreSetTeam = (value: ITeam[]) => action(CoreActionsEnum.CORE_SET_TEAM, { value });
