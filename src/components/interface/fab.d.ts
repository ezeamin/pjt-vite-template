export interface FABProps {
    color?: 'primary' | 'secondary';
    title: string;
    icon: JSX.Element;
    handleClick: () => void;
    [key: string]: any;
  }
  