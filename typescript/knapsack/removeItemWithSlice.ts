type TRemoveItemWithSlice = <T>(array: T[], n: number) => T[];

export const removeItemWithSlice: TRemoveItemWithSlice = (items, index) => {
  return [...items.slice(0, index), ...items.slice(index + 1)];
};
