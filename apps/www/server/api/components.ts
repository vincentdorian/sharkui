import componentsJson from "./components.json";

type Component = {
  id: string;
  name: string;
  description: string;
  files: Array<{
    name: string;
    content: string;
  }>;
};

const components: Component[] = componentsJson;

export default defineEventHandler((event) => {
  const query = getQuery(event);

  // is query is empty object, return the JSON of the components
  if (JSON.stringify(query) === "{}") {
    return {
      count: components.length,
      components: components.map((component) => {
        return {
          id: component.id,
          name: component.name,
          description: component.description,
        };
      }),
    };
  }

  if (
    query.components &&
    query.components !== "" &&
    typeof query.components === "string"
  ) {
    const componentIds = query.components.split(",");

    const componentList = components.filter((component) =>
      componentIds.includes(component.id)
    );

    return componentList;
  }
});
