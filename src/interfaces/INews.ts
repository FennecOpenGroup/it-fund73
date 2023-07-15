import { IImage } from './IImage';

export interface INews {
  attributes: {
    angry?: number;
    delight?: number;
    dislike?: number;
    like?: number;
    shock?: number;
    smile_face?: number;
    views?: number;

    tags: string;
    heading: string;
    image: IImage;
    text: string;

    date: Date;
    publishedAt: Date;
    updatedAt: Date;
  };
}
