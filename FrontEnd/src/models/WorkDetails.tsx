export default interface WorkDetails {
  created: CreatedOrDescriptionOrLastModified;
  subjects?: string[] | null;
  latest_revision: number;
  description: CreatedOrDescriptionOrLastModified;
  key: string;
  title: string;
  authors?: AuthorsEntity[] | null;
  type: TypeOrAuthor;
  last_modified: CreatedOrDescriptionOrLastModified;
  revision: number;
}
export interface CreatedOrDescriptionOrLastModified {
  type: string;
  value: string;
}
export interface AuthorsEntity {
  type: TypeOrAuthor;
  author: TypeOrAuthor;
}
export interface TypeOrAuthor {
  key: string;
}
