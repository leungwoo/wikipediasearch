export interface Continue {
  sroffset: number;
  continue: string;
}

export interface Searchinfo {
  totalhits: number;
  suggestion: string;
  suggestionsnippet: string;
}

export interface Search {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: Date;
}

export interface Query {
  searchinfo: Searchinfo;
  search: Search[];
}

export interface WikipediaResponse {
  batchcomplete: string;
  continue: Continue;
  query: Query;
}
