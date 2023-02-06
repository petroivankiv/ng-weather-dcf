export const unfold = (
  obj: any,
  parentKey?: string
): Record<string, string | number> => {
  return Object.keys(obj as object).reduce((res: any, key: string) => {
    const value = obj[key];

    if (typeof value === 'object') {
      return {
        ...res,
        ...unfold(value, key),
      };
    }

    const parent = parentKey ? `${parentKey}-` : '';

    return {
      ...res,
      [`${parent}${key}`]: value,
    };
  }, {});
};
