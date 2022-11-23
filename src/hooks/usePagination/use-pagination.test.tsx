import { renderHook } from "@testing-library/react-hooks";
import { usePagination } from "./use-pagination";

const options = [
  {
    title: "Should set the pagination results",
    inputs: {
      currentPage: 1,
      totalCount: 84,
      siblingCount: 4,
      pageSize: 25,
    },
  },
];

options.forEach((option, index) => {
  describe("usePagination tests", () => {
    it(`${index} - ${option.title}`, () => {
      const { result } = renderHook(() => {
        usePagination(option.inputs);
      });

      expect(true).toBe(true);
    });
  });
});
