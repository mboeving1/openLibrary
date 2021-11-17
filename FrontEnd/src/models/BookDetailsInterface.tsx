export interface BookInterface {
  q: string;
}

export interface BookEntity {
  title: string;
  author_name?: string[] | null;
  isbn?: string[] | null;
  cover_i?: number | null;
  key: string;
  id_amazon: string[];
}

export interface BookDetailInterface {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: DocsEntity[];
  num_found: number;
  q: string;
  offset?: null;
}
export interface DocsEntity {
  key: string;
  text?: string[] | null;
  type: string;
  seed?: string[] | null;
  title: string;
  title_suggest: string;
  has_fulltext: boolean;
  edition_count: number;
  edition_key?: string[] | null;
  publish_date?: string[] | null;
  publish_year?: number[] | null;
  first_publish_year: number;
  lccn?: string[] | null;
  publish_place?: string[] | null;
  oclc?: string[] | null;
  contributor?: string[] | null;
  lcc?: string[] | null;
  ddc?: string[] | null;
  isbn?: string[] | null;
  last_modified_i: number;
  ebook_count_i: number;
  ia?: string[] | null;
  public_scan_b?: boolean | null;
  ia_collection_s?: string | null;
  lending_edition_s?: string | null;
  lending_identifier_s?: string | null;
  printdisabled_s?: string | null;
  cover_edition_key?: string | null;
  cover_i?: number | null;
  first_sentence?: string[] | null;
  publisher?: string[] | null;
  language?: string[] | null;
  author_key?: string[] | null;
  author_name?: string[] | null;
  author_alternative_name?: string[] | null;
  person?: string[] | null;
  place?: string[] | null;
  subject?: string[] | null;
  time?: string[] | null;
  id_alibris_id?: string[] | null;
  id_amazon: string;
  id_bcid?: string[] | null;
  id_depósito_legal?: string[] | null;
  id_dnb?: string[] | null;
  id_goodreads?: string[] | null;
  id_google?: string[] | null;
  id_librarything?: string[] | null;
  id_libris?: string[] | null;
  id_overdrive?: string[] | null;
  id_wikidata?: string[] | null;
  ia_loaded_id?: string[] | null;
  ia_box_id?: string[] | null;
  publisher_facet?: string[] | null;
  person_key?: string[] | null;
  time_facet?: string[] | null;
  place_key?: string[] | null;
  person_facet?: string[] | null;
  subject_facet?: string[] | null;
  _version_: number;
  place_facet?: string[] | null;
  lcc_sort?: string | null;
  author_facet?: string[] | null;
  subject_key?: string[] | null;
  time_key?: string[] | null;
  ddc_sort?: string | null;
  id_amazon_ca_asin?: string[] | null;
  id_amazon_co_uk_asin?: string[] | null;
  id_amazon_de_asin?: string[] | null;
  id_amazon_it_asin?: string[] | null;
  id_british_national_bibliography?: string[] | null;
  id_nla?: string[] | null;
  id_paperback_swap?: string[] | null;
  id_dep_sito_legal?: string[] | null;
  id_bibliothèque_nationale_de_france_bnf?: string[] | null;
  id_british_library?: string[] | null;
  id_hathi_trust?: string[] | null;
  id_scribd?: string[] | null;
  id_canadian_national_library_archive?: string[] | null;
  subtitle?: string | null;
}
