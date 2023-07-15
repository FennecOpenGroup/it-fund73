export interface IFile {
  [x: string]: any;
  alternativeText?: string;
  caption?: string;
  createdAt: Date;
  updatedAt: Date;
  ext: string;
  formats?: string;
  hash: string;
  height?: number;
  width?: number;
  mime: string;
  name: string;
  path?: string;
  size: number;
  url: string;
  provider: string;
  previewUrl: string;
  provider_metadata?: string;
}
