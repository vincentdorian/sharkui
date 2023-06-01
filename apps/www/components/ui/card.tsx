import { cn } from "@/lib/utils";

const Card = defineComponent({
  name: "Card",
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          attrs?.class as string,
        )}
        {...attrs}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const CardHeader = defineComponent({
  name: "CardHeader",
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("flex flex-col space-y-1.5 p-6")} {...attrs}>
        {slots.default?.()}
      </div>
    );
  },
});

const CardTitle = defineComponent({
  name: "CardTitle",
  setup(_, { slots, attrs }) {
    return () => (
      <h3
        class={cn(
          "text-lg font-semibold leading-none tracking-tight",
          attrs?.class as string,
        )}
        {...attrs}
      >
        {slots.default?.()}
      </h3>
    );
  },
});

const CardDescription = defineComponent({
  name: "CardDescription",
  setup(_, { slots, attrs }) {
    return () => (
      <p
        class={cn("text-sm text-muted-foreground", attrs?.class as string)}
        {...attrs}
      >
        {slots.default?.()}
      </p>
    );
  },
});

const CardContent = defineComponent({
  name: "CardContent",
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("p-6", attrs?.class as string)} {...attrs}>
        {slots.default?.()}
      </div>
    );
  },
});

const CardFooter = defineComponent({
  name: "CardFooter",
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn("flex flex-row justify-end p-6", attrs?.class as string)}
        {...attrs}
      >
        {slots.default?.()}
      </div>
    );
  },
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
};
