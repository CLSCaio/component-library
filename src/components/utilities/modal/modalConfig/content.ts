export const calcSize = (size: string) => {
  const formatedSize = Number(size.replace('px', ''));
  const calc = formatedSize / 2;
  return calc;
};
