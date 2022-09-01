export const API_URL = 'https://anapioficeandfire.com/api';
export const BOOK_LAST_PAGE = 2;
export const CHARACTER_LAST_PAGE = 214;
export const HOUSE_LAST_PAGE = 45;

export const currentFilter = {
  page: 1,
  pageSize: 10,
};

export const houseTextFilters = [
  {
    title: 'region',
    value: false,
  },
  {
    title: 'words',
    value: false,
  },
];
export const houseCheckboxFilters = [
  {
    title: 'hasWords',
    value: false,
  },
  {
    title: 'hasTitles',
    value: false,
  },
  {
    title: 'hasSeats',
    value: false,
  },
  {
    title: 'hasDiedOut',
    value: false,
  },
  {
    title: 'hasAncestralWeapons',
    value: false,
  },
];

export const characterFilters = [
  {
    title: 'culture',
    value: false,
  },
  {
    title: 'gender',
    value: false,
  },
  {
    title: 'born',
    value: false,
  },
  {
    title: 'died',
    value: false,
  },
];
