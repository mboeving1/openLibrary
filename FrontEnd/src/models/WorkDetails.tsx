export default interface WorkAPI {
  description: string;
  title: string;
  covers?: number[] | null;
  subject_places?: string[] | null;
  subjects?: string[] | null;
  subject_people?: string[] | null;
  key: string;
  authors?: AuthorsEntity[] | null;
  subject_times?: string[] | null;
  type: AuthorOrType;
  latest_revision: number;
  revision: number;
  created: CreatedOrLastModified;
  last_modified: CreatedOrLastModified;
}
export interface AuthorsEntity {
  author: AuthorOrType;
  type: AuthorOrType;
}
export interface AuthorOrType {
  key: string;
}
export interface CreatedOrLastModified {
  type: string;
  value: string;
}
