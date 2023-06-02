import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const SharkLabel = defineComponent({
  name: "SharkLabel",
  props: {
    label: {
      type: String,
      default: "",
      required: false,
    },
    for: {
      type: String,
      default: "",
      required: false,
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <label for={props.for} class={cn(labelVariants(), attrs.class ?? "")}>
        {props?.label ? props.label : slots.default?.()}
      </label>
    );
  },
});

export { SharkLabel };
