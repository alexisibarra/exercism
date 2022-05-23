// Based on https://gist.github.com/axelpale/3118596
type TGetNCombinationsFromArray = <T>(array: T[], n: number) => T[][];

export const getNCombinationsFromArray: TGetNCombinationsFromArray = <T>(
  array: T[],
  n: number
) => {
  if (n > array.length || n <= 0) {
    return [];
  }

  if (array.length === n) {
    return [array];
  }

  if (n === 1) {
    return array.map((item) => [item]);
  }

  const combs: T[][] = [];

  [...Array(array.length - n + 1)].forEach((_, i) => {
    const head = [array[i]];

    const tailcombs = getNCombinationsFromArray(array.slice(i + 1), n - 1);

    [...Array(tailcombs.length)].forEach((_, j) => {
      combs.push(head.concat(tailcombs[j]));
    });
  });

  return combs;
};

type TGetCombinations = <T>(array: T[]) => T[][];

const getCombinations: TGetCombinations = <T>(set: T[]) => {
  const combs: T[][] = [];

  [...Array(set.length)].forEach((_, i) => {
    const k_combs = getNCombinationsFromArray(set, i);

    [...Array(k_combs.length)].forEach((_, j) => {
      combs.push(k_combs[j]);
    });
  });

  return combs;
};

type Item = {
  weight: number;
  value: number;
};

interface IMaximumValueArgs {
  maximumWeight: number;
  items: Item[];
}

type TMaximumValue = (args: IMaximumValueArgs) => number;

export const maximumValue: TMaximumValue = (args) => {
  const { maximumWeight, items } = args;

  if (items.length === 0 || maximumWeight === 0) {
    return 0;
  }

  const combinations = getCombinations(items);

  const weights = combinations.map((combination) =>
    combination.reduce(
      (acc: Item, item) => ({
        weight: acc.weight + item.weight,
        value: acc.value + item.value,
      }),
      { weight: 0, value: 0 }
    )
  );

  return weights.reduce(
    (maxValue: number, curr) =>
      curr.weight <= maximumWeight && curr.value > maxValue
        ? curr.value
        : maxValue,
    0
  );
};
