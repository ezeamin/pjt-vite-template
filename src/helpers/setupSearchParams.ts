// @ts-nocheck
export const setupSearchParams = (params: object) => {
  // Replace every '' with null
  Object.keys(params).forEach((key) => {
    if (params[key] === '') {
      params[key] = null;
    }
  });

  // Elimino campos undefined & null
  const options = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v != null)
  );

  return `?${new URLSearchParams(options).toString()}`;
};
