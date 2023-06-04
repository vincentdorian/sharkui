import {
  Checkbox as ArkCheckbox,
  CheckboxControl as ArkCheckboxControl,
  CheckboxLabel as ArkCheckboxLabel,
  CheckboxInput as ArkCheckboxInput,
} from "@ark-ui/vue";
import { UseCheckboxProps } from "@ark-ui/vue/dist/checkbox/checkbox";
import { CheckIcon } from "lucide-vue-next";
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
    const proxy = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return () => (
      <ArkCheckbox v-model={proxy.value}>{slots.default?.()}</ArkCheckbox>
    );
  },
});

const SharkCheckboxControl = defineComponent({
  name: "SharkCheckboxControl",
  setup(props, { slots, attrs }) {
    return () => {
      <ArkCheckboxControl
        class={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          attrs.class ?? ""
        )}
      >
        <CheckIcon class="w-4 h-4" />
      </ArkCheckboxControl>;
    };
  },
});

const SharkCheckboxLabel = defineComponent({
  name: "SharkCheckboxLabel",
  setup(props, { slots }) {
    console.log(slots)
    return () => {
      <ArkCheckboxLabel>{slots.default?.()}</ArkCheckboxLabel>;
    };
  },
});

const SharkCheckboxInput = defineComponent({
  name: "SharkCheckboxInput",
  setup(props, { slots, attrs }) {
    return () => <ArkCheckboxInput>{slots.default?.()}</ArkCheckboxInput>;
  },
});

export {
  SharkCheckbox,
  SharkCheckboxControl,
  SharkCheckboxLabel,
  SharkCheckboxInput,
};
