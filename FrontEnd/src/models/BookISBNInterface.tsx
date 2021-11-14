export interface BookISBNInterface {
  bib_key: string;
  description: string;
  covers?: number[] | null;
  authors?: AuthorsEntity[] | null;
  title: string;
  ISBN: ISBN[];
  details: Details;
}
export interface ISBN {
  bib_key: string;
  info_url: string;
  preview: string;
  preview_url: string;
  thumbnail_url: string;
  details: Details;
  description: string;
  authors?: AuthorsEntity[] | null;
  covers?: number[] | null;
  title: string;
}
export interface Details {
  ISBN: ISBN[];
  other_titles?: string[] | null;
  publishers?: string[] | null;
  number_of_pages: number;
  description: string;
  weight: string;
  series?: string[] | null;
  covers?: number[] | null;
  physical_format: string;
  key: string;
  authors?: AuthorsEntity[] | null;
  publish_places?: string[] | null;
  pagination: string;
  contributors?: ContributorsEntity[] | null;
  source_records?: string[] | null;
  title: string;
  notes: string;
  identifiers: Identifiers;
  languages?: LanguagesEntityOrWorksEntityOrType[] | null;
  subjects?: string[] | null;
  publish_date: string;
  copyright_date: string;
  by_statement: string;
  works?: LanguagesEntityOrWorksEntityOrType[] | null;
  type: LanguagesEntityOrWorksEntityOrType;
  physical_dimensions: string;
  classifications: Classifications;
  edition_name: string;
  ocaid: string;
  isbn_10?: string[] | null;
  isbn_13?: string[] | null;
  oclc_numbers?: string[] | null;
  lc_classifications?: string[] | null;
  latest_revision: number;
  revision: number;
  created: CreatedOrLastModified;
  last_modified: CreatedOrLastModified;
}
export interface AuthorsEntity {
  key: string;
  name: string;
}
export interface ContributorsEntity {
  name: string;
  role: string;
}
export interface Identifiers {
  amazon?: string[] | null;
  google?: string[] | null;
  _oxford_university?: string[] | null;
  goodreads?: string[] | null;
  librarything?: string[] | null;
}
export interface LanguagesEntityOrWorksEntityOrType {
  key: string;
}
export interface Classifications {}
export interface CreatedOrLastModified {
  type: string;
  value: string;
}
