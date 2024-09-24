import { generationNumber } from "@/util/generationNumber";

describe("generationNumber", () => {
  test("생성된 숫자가 0과 100 사이여야 함", () => {
    const number = generationNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
  });
});
