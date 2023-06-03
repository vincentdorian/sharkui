import {
  Checkbox as ArkCheckbox,
  CheckboxControl as ArkCheckboxControl,
  CheckboxLabel as ArkCeckboxLabel,
  CheckboxInput as ArkCeckboxInput,
} from "@ark-ui/vue";
import { UseCheckboxProps } from "@ark-ui/vue/dist/checkbox/checkbox";
import { cn } from "~/lib/utils";

const SharkCheckbox = defineComponent({
  name: "SharkCheckbox",
  props: {
    modelValue: {
      type: Boolean as PropType<UseCheckboxProps["checked"]>,
      default: false,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { slots, attrs, emit }) {
    const valueProxy = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return () => (
      <ArkCheckbox v-model={valueProxy}>{slots.default?.()}</ArkCheckbox>
    );
  },
});

const SharkCheckboxControl = defineComponent({
  name: "SharkCheckboxControl",
  setup(props, { slots }) {
    return () => {
      <ArkCheckboxControl>{slots.default?.()}</ArkCheckboxControl>;
    };
  },
});

const SharkCheckboxLabel = defineComponent({
  name: "SharkCheckboxLabel",
  setup(props, { slots }) {
    return () => {
      <ArkCeckboxLabel>{slots.default?.()}</ArkCeckboxLabel>;
    };
  },
});

const SharkCheckboxInput = defineComponent({
  name: "SharkCheckboxInput",
  setup(props, { slots, attrs }) {
    return () => (
      <ArkCeckboxInput
        class={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </ArkCeckboxInput>
    );
  },
});

export {
  SharkCheckbox,
  SharkCheckboxControl,
  SharkCheckboxLabel,
  SharkCheckboxInput,
};
