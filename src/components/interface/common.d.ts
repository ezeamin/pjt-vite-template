import { AnyProp, PaginationInfo } from '../../../interface/globalTypes';

// Pagination

export interface SelectEntriesProps extends AnyProp {
  show?: boolean;
}

export interface PaginationButtonsProps {
  apiInfo: PaginationInfo;
}