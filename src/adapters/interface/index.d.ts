export interface Response {
  success: boolean;
  message: string;
  data: object | undefined | null;
}

export interface ResponseAdapterProps {
  data: Response;
  adapter: Function;
  adapterData?: object;
}
