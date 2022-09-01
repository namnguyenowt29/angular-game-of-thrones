export interface BookModel {
  url?: string;
  name?: string;
  isbn?: string;
  numberOfPages?: string;
  authors?: string[];
  publisher?: string;
  country?: string;
  mediaType: string;
  release?: Date;
  characters: string[];
  povCharacters: string[];
}
