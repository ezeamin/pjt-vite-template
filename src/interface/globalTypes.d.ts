export interface AnyProp {
  [key: string]: any;
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
