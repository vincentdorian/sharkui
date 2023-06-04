import {
  Accordion as ArkAccordion,
  AccordionContent as ArkAccordionContent,
  AccordionItem as ArkAccordionItem,
  type AccordionProps,
  AccordionTrigger as ArkAccordionTrigger,
} from "@ark-ui/vue";
import { ChevronDown } from "lucide-vue-next";

const VueAccordionProps = {
  modelValue: {
    type: [String, Object] as PropType<AccordionProps["modelValue"]>,
  },
  collapsible: {
    type: Boolean as PropType<AccordionProps["collapsible"]>,
    default: false,
  },
  multiple: {
    type: Boolean as PropType<AccordionProps["multiple"]>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<AccordionProps["disabled"]>,
    default: false,
  },
  ids: {
    type: Object as PropType<AccordionProps["ids"]>,
  },
  getRootNode: {
    type: Function as PropType<AccordionProps["getRootNode"]>,
  },
  orientation: {
    type: String as PropType<AccordionProps["orientation"]>,
  },
};

const VueAccordionItemProps = {
  value: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

const SharkAccordion = defineComponent({
  name: "SharkAccordion",
  props: VueAccordionProps,
  emits: ["update:modelValue", "change"],
  setup(props, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordion {...props} {...attrs}>
          {slots.default?.()}
        </ArkAccordion>
      );
    };
  },
});

const SharkAccordionItem = defineComponent({
  name: "SharkAccordionItem",
  props: VueAccordionItemProps,
  setup(props, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordionItem class={"border-b"} {...props} {...attrs}>
          {slots.default?.()}
        </ArkAccordionItem>
      );
    };
  },
});

const SharkAccordionTrigger = defineComponent({
  name: "SharkAccordionTrigger",
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordionTrigger
          {...props}
          class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-expanded]>svg]:rotate-180"
          {...attrs}
        >
          <button class="flex w-full flex-1 items-center">
            {slots.default?.()}
            <ChevronDown class="w-4 h-4 ml-2" />
          </button>
        </ArkAccordionTrigger>
      );
    };
  },
});

const SharkAccordionContent = defineComponent({
  name: "SharkAccordionContent",
  setup(_, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordionContent
          class="overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down data-[state=closed]:animate-accordion-up"
          id="current"
          {...attrs}
        >
          <div class="pb-4 pt-0">{slots.default?.()}</div>
        </ArkAccordionContent>
      );
    };
  },
});

export {
  SharkAccordion,
  SharkAccordionTrigger,
  SharkAccordionItem,
  SharkAccordionContent,
};
