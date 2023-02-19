import { Example } from "..";

describe(Example.name, () => {
  test("test", () => {
    const container = new Example(10);

    expect(container).toBeInstanceOf(Example);
    expect(container.value).toBe(10);
  });
});
