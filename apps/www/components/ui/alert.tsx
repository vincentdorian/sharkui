import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const SharkAlert = defineComponent({
  name: "SharkAlert",
  props: {
    variant: {
      type: String as PropType<VariantProps<typeof alertVariants>["variant"]>,
      default: "default",
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <div
        role="alert"
        class={cn(alertVariants({ variant: props.variant }), attrs.class ?? "")}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const SharkAlertTitle = defineComponent({
  name: "SharkAlertTitle",
  setup(_, { slots, attrs }) {
    return () => (
      <h5
        class={cn(
          "mb-1 font-medium leading-none tracking-tight",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </h5>
    );
  },
});

const SharkAlertDescription = defineComponent({
  name: "SharkAlertDescription",
  setup(_, { slots, attrs }) {
    return () => (
      <p class={cn("text-sm [&_p]:leading-relaxed", attrs.class ?? "")}>
        {slots.default?.()}
      </p>
    );
  },
});

export { SharkAlert, SharkAlertTitle, SharkAlertDescription };
