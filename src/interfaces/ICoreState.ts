import { LangEnum } from '../enums/LangEnum';
import { ModalsEnum } from '../enums/ModalsEnum';
import { IDocs } from './IDocs';
import { IEmotions } from './IEmotions';
import { INews } from './INews';

export type ModalsEnumState = {
  [key in ModalsEnum]?: boolean;
};

export interface ICoreState extends ModalsEnumState {
  lang: LangEnum;

  it: boolean;
  education: boolean;
  business: boolean;
  government: boolean;
  themeIsDark: boolean;
  search?: string;

  news?: INews[];
  docs?: IDocs[];
  emotions?: IEmotions[];
}
