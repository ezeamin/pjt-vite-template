export const setupSearchParams = (params: Record<string, string | null>) => {
  // Cloning params to avoid mutating the original object
  const paramsCopy = structuredClone(params);

  // Replace every '' with null
  Object.keys(paramsCopy).forEach((key) => {
    if (paramsCopy[key as keyof typeof paramsCopy] === '') {
      paramsCopy[key as keyof typeof paramsCopy] = null;
    }
  });

  // Elimino campos undefined & null
  const options = Object.fromEntries(
    Object.entries(paramsCopy).filter(([, v]) => v != null)
  ) as Record<string, string>;

  return `?${new URLSearchParams(options).toString()}`;
};
