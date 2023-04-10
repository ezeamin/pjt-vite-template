export interface AnyProp {
  [key: string]: any;
}

export interface BasicList {
  id: number;
  description: string;
}

// ----------------------------------------------
// Pagination
// ----------------------------------------------

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  numberOfElementsOnScreen: number;
  totalElements: number;
}
