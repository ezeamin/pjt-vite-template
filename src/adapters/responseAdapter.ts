import { ResponseAdapterProps } from './interface';

// adapterData is optional
export const responseAdapter = ({
  data,
  adapter,
  adapterData,
}: ResponseAdapterProps) => ({
  success: data?.success,
  message: data?.message,
  data: adapter(adapterData || data?.data),
});
