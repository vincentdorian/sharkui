import { describe, expect, it } from "vitest";

const baseUrl =
  process.env.COMPONENTS_BASE_URL ?? "https://sharkui.vincentdorian.me";

describe("Test components API", () => {
  it("should have a base url", () => {
    expect(baseUrl).toBe(
      "http://localhost:3002" ?? "https://sharkui.vincentdorian.me"
    );
  });

  it("should return a data object with key hello and value world", async () => {
    const response = await fetch(`${baseUrl}/api/test`);

    const data = await response.json();

    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveProperty("hello");
    expect(data.hello).toBe("world");
  });

  it("should return an object with the information about the available components with the form {count: number, components: string[]}", async () => {
    type ComponentList = {
      count: number;
      components: string[];
    };

    const response = await fetch(`${baseUrl}/api/components`);

    const data = await response.json();

    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveProperty("count");
    expect(data).toHaveProperty("components");

    const componentList = data as ComponentList;

    expect(componentList.components).toBeInstanceOf(Array);

    expect(componentList.components).toContain("Button");

    expect(componentList.count).toBe(componentList.components.length);
  });
});
