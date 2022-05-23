/* eslint-disable @typescript-eslint/semi */

import { maximumValue, getNCombinationsFromArray } from "./knapsack";

// xdescribe("removeItemWithSlice", () => {
//   it("should return the same array if the index is out of bounds", () => {
//     expect(removeItemWithSlice([1, 2, 3], 4)).toEqual([1, 2, 3]);
//   });

//   it("should remove at the beginning of the array", () => {
//     expect(removeItemWithSlice([1, 2, 3], 0)).toEqual([2, 3]);
//   });
//   it("should remove at the beginning of the array", () => {
//     expect(removeItemWithSlice([1, 2, 3], 2)).toEqual([1, 2]);
//   });
//   it("should remove in the middle of the array", () => {
//     expect(removeItemWithSlice([1, 2, 3, 4, 5], 1)).toEqual([1, 3, 4, 5]);
//     expect(removeItemWithSlice([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
//     expect(removeItemWithSlice([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3, 5]);
//   });
// });

// xdescribe("takeNElementsFromArray", () => {
//   xit("Get combinations of N Items from an empty array", () => {
//     expect(getCombinationsOfNFromArray([], 2)).toEqual([[]]);
//   });

//   xit("Get No Item from an array", () => {
//     expect(getCombinationsOfNFromArray([2, 2], 0)).toEqual([[]]);
//   });

//   xit("Get combinations of 1 from an array", () => {
//     expect(getCombinationsOfNFromArray([2, 2], 1)).toEqual([[2], [2]]);
//   });
//   it("Get combinations of 2 from an array", () => {
//     expect(getCombinationsOfNFromArray([1, 2, 3], 2)).toStrictEqual([
//       [1, 2],
//       [2, 3],
//       [1, 3],
//     ]);
//   });
//   it("Get combinations of 2 from an array", () => {
//     expect(getCombinationsOfNFromArray([1, 2, 3, 4], 2)).toStrictEqual([
//       [1, 2, 4],
//       [1, 2, 4],
//       [1, 3, 4],
//       [2, 3, 4],
//       [2, 3, 4],
//       [2, 3, 4],
//       [3, 3, 4],
//       [3, 3, 4],
//       [3, 3, 4],
//       [4, 3, 4],
//       [4, 3, 4],
//       [4, 3, 4],
//     ]);
//   });
// });

// describe("takeNElementsFromArray", () => {
//   it("Get combinations of N Items from an empty array", () => {
//     expect(k_combinations("")).toEqual(undefined);
//   });

//   it("Get No Item from an array", () => {
//     expect(k_combinations("abcd")).toEqual([
//       "abcd",
//       "abc",
//       "abd",
//       "ab",
//       "acd",
//       "ac",
//       "ad",
//       "a",
//       "bcd",
//       "bc",
//       "bd",
//       "b",
//       "cd",
//       "c",
//       "d",
//     ]);
//   });

//   // xit("Get combinations of 1 from an array", () => {
//   //   expect(getCombinationsOfNFromArray([2, 2])).toEqual([[2], [2]]);
//   // });
//   // it("Get combinations of 2 from an array", () => {
//   //   expect(getCombinationsOfNFromArray([1, 2, 3])).toStrictEqual([
//   //     [1, 2],
//   //     [2, 3],
//   //     [1, 3],
//   //   ]);
//   // });
//   // it("Get combinations of 2 from an array", () => {
//   //   expect(getCombinationsOfNFromArray([1, 2, 3, 4])).toStrictEqual([
//   //     [1, 2, 4],
//   //     [1, 2, 4],
//   //     [1, 3, 4],
//   //     [2, 3, 4],
//   //     [2, 3, 4],
//   //     [2, 3, 4],
//   //     [3, 3, 4],
//   //     [3, 3, 4],
//   //     [3, 3, 4],
//   //     [4, 3, 4],
//   //     [4, 3, 4],
//   //     [4, 3, 4],
//   //   ]);
//   // });
// });

describe("Check if max carriable value is returned", () => {
  it("No items", () => {
    const input = {
      maximumWeight: 100,
      items: [],
    };
    const expected = 0;
    expect(maximumValue(input)).toEqual(expected);
  });

  it("One item, but too heavy", () => {
    const input = {
      maximumWeight: 10,
      items: [{ weight: 100, value: 1 }],
    };
    const expected = 0;
    expect(maximumValue(input)).toEqual(expected);
  });

  it("Five items. Can't be greedy by weight", () => {
    const input = {
      maximumWeight: 10,
      items: [
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 10, value: 21 },
      ],
    };
    const expected = 21;
    expect(maximumValue(input)).toEqual(expected);
  });

  it("Five items. Can't be greedy by weight", () => {
    const input = {
      maximumWeight: 10,
      items: [
        { weight: 2, value: 5 },
        { weight: 10, value: 21 },
      ],
    };
    const expected = 21;
    expect(maximumValue(input)).toEqual(expected);
  });

  it("Five items. Can't be greedy by value", () => {
    const input = {
      maximumWeight: 10,
      items: [
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 10, value: 50 },
      ],
    };
    const expected = 80;
    expect(maximumValue(input)).toEqual(expected);
  });

  it("Example knapsack", () => {
    const input = {
      maximumWeight: 10,
      items: [
        { weight: 5, value: 10 },
        { weight: 4, value: 40 },
        { weight: 6, value: 30 },
        { weight: 4, value: 50 },
      ],
    };
    const expected = 90;
    expect(maximumValue(input)).toEqual(expected);
  });

  it("8 items", () => {
    const input = {
      maximumWeight: 104,
      items: [
        { weight: 25, value: 350 },
        { weight: 35, value: 400 },
        { weight: 45, value: 450 },
        { weight: 5, value: 20 },
        { weight: 25, value: 70 },
        { weight: 3, value: 8 },
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
      ],
    };
    const expected = 900;
    expect(maximumValue(input)).toEqual(expected);
  });

  it("15 items", () => {
    const input = {
      maximumWeight: 750,
      items: [
        { weight: 70, value: 135 },
        { weight: 73, value: 139 },
        { weight: 77, value: 149 },
        { weight: 80, value: 150 },
        { weight: 82, value: 156 },
        { weight: 87, value: 163 },
        { weight: 90, value: 173 },
        { weight: 94, value: 184 },
        { weight: 98, value: 192 },
        { weight: 106, value: 201 },
        { weight: 110, value: 210 },
        { weight: 113, value: 214 },
        { weight: 115, value: 221 },
        { weight: 118, value: 229 },
        { weight: 120, value: 240 },
      ],
    };
    const expected = 1458;
    expect(maximumValue(input)).toEqual(expected);
  });
});
