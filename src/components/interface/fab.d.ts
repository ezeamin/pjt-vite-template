import { AnyProp } from '../../interface/globalTypes';

export interface FABProps extends AnyProp {
  color?: 'primary' | 'secondary';
  title: string;
  icon: JSX.Element;
  handleClick: () => void;
}
