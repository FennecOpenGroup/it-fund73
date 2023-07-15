export interface IImage {
  [x: string]: any;
  alternativeText?: string;
  caption?: string;
  createdAt: Date;
  updatedAt: Date;
  ext: string;
  hash: string;
  height: number;
  width: number;
  mime: string;
  name: string;
  path?: string;
  size: number;
  url: string;
  provider: string;
  previewUrl: string;
  provider_metadata?: string;
  formats: {
    large: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path?: string;
      size: number;
      url: string;
      width: number;
    };
    medium: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path?: string;
      size: number;
      url: string;
      width: number;
    };
    small: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path?: string;
      size: number;
      url: string;
      width: number;
    };
  };
}
