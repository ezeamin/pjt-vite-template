export interface AnyProp {
  [key: string]: unknown;
}

export interface BasicList {
  id: number;
  description: string;
}

// ----------------------------------------------
// Response
// ----------------------------------------------

export interface Response {
  success: boolean;
  message: string;
  data: object;
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
