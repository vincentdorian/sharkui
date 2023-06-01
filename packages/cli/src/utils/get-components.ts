import fetch from "node-fetch";
import * as z from "zod";

const baseUrl = "http://localhost:3002";

const componentListSchema = z.object({
  count: z.number(),
  components: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
    })
  ),
});

const componentSchema = z.object({
  id: z.string(),
  name: z.string(),
  files: z.array(
    z.object({
      name: z.string(),
      content: z.string(),
    })
  ),
});

const componentArraySchema = z.array(componentSchema);

export type Component = z.infer<typeof componentSchema>;

const componentsSchema = z.array(componentSchema);

export async function getAvailableComponents() {
  try {
    const response = await fetch(`${baseUrl}/api/components`);

    const data = await response.json();

    const list = componentListSchema.parse(data);

    return list.components;
  } catch (error) {
    throw new Error(
      `Failed to fetch components from ${baseUrl}/api/components`
    );
  }
}

export async function getComponents(ids: string[]) {
  try {
    const response = await fetch(
      `${baseUrl}/api/components?components=${ids.join(",")}`
    );

    const data = await response.json();

    const components = componentArraySchema.parse(data);

    return components;
  } catch (error) {
    throw new Error(
      `Failed to fetch components from ${baseUrl}/api/components`
    );
  }
}
