export interface Response {
  success: boolean;
  message: string;
  data: object | undefined | null;
}

export interface ResponseAdapterProps {
  data: Response;
  adapter: (unknown) => object;
  adapterData?: object;
}
