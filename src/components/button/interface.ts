export interface IButton {
  className?: string;
  label: string;
  method?: (params: any) => any;
  type?: 'button' | 'reset' | 'submit';
}
