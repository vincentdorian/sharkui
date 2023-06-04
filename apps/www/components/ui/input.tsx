import { cn } from "~/lib/utils";

const SharkInput = defineComponent({
  name: "SharkInput",
  props: {
    type: {
      type: String as PropType<HTMLInputElement["type"]>,
      default: "text",
      required: false,
    },
    modelValue: {
      type: String as PropType<HTMLInputElement["value"]>,
      default: "",
      required: false,
    },
    placeholder: {
      type: String as PropType<HTMLInputElement["placeholder"]>,
      default: "",
      required: false,
    },
    disabled: {
      type: Boolean as PropType<HTMLInputElement["disabled"]>,
      default: false,
      required: false,
    },
  },
  emits: ["update:modelValue", "input", "change"],
  setup(props, { attrs, emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return () => (
      <input
        type={props.type}
        v-model={inputValue.value}
        class={cn(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          attrs.class ?? ""
        )}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onInput={(e: any) => emit("input", e?.target.value)}
        onChange={(e: any) => emit("change", e?.target.value)}
      />
    );
  },
});

export { SharkInput };
