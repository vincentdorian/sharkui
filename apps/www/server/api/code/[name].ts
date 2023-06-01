import components from "./data.json";

export default defineEventHandler(async (event) => {
  const demoComponent = components.find(
    (component) => component.name === event.context.params?.name
  );

  if (!demoComponent) return "Component not found";

  try {
    const code = demoComponent.code;
    
    return {
      code: code,
    };
  } catch (error) {
    return "Failed to read file";
  }
});
