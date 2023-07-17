import { IImage } from './IImage';

export interface ITeam {
  attributes: {
    name: string;
    post: string;
    team: string;
    photo: IImage;
  };
}
