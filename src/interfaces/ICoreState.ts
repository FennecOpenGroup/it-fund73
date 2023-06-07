import { LangEnum } from '../enums/LangEnum';
import { ModalsEnum } from '../enums/ModalsEnum';

export type ModalsEnumState = {
  [key in ModalsEnum]?: boolean;
};

export interface ICoreState extends ModalsEnumState {
  lang: LangEnum;
  it: boolean;
  education: boolean;
  business: boolean;
  government: boolean;
  search?: string;
}
