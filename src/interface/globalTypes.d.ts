export interface AnyProp {
  [key: string]: any;
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
  data: any;
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
