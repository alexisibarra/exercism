import { removeItemWithSlice } from "./removeItemWithSlice";

type TTakeCombinationsOfNFromArray = <T>(array: T[], n: number) => T[][];

export const getCombinationsOfNFromArray: TTakeCombinationsOfNFromArray = <T>(
  array: T[],
  n: number
) => {
  if (array.length === 0 || n === 0) {
    return [[]];
  }
  if (array.length === 1) {
    return [array];
  }
  if (n === 1) {
    return array.map((item) => [item]);
  }

  const result = array.map((item, index) => {
    const restOfTheItems: T[][] = getCombinationsOfNFromArray(
      removeItemWithSlice(array, index),
      n - 1
    );

    return restOfTheItems.map((item2) => [...item2, item]);
  });

  console.log(result);

  return result.flat();
};
