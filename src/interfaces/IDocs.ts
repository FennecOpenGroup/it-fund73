import { IFile } from './IFile';

export interface IDocs {
  attributes: { createdAt: Date; publishedAt: Date; updatedAt: Date; name: string; file: IFile };
}
