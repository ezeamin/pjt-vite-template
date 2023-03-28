export interface FABProps {
  color?: 'primary' | 'secondary';
  icon: JSX.Element;
  handleClick: () => void;
  [key: string]: any;
}
