import {
  Accordion as ArkAccordion,
  AccordionTrigger as ArkAccordionTrigger,
  AccordionItem as ArkAccordionItem,
  AccordionContent as ArkAccordionContent,
} from "@ark-ui/vue";

import type {
  AccordionProps as ArkAccordionProps,
  AccordionTriggerProps as ArkAccordionTriggerProps,
  AccordionItemProps as ArkAccordionItemProps,
  AccordionContentProps as ArkAccordionContentProps,
} from "@ark-ui/vue";

import { useUniqueChild } from "~/lib/utils";

export interface AccordionProps extends ArkAccordionProps {}
export interface AccordionTriggerProps extends ArkAccordionTriggerProps {}
export interface AccordionItemProps extends ArkAccordionItemProps {}
export interface AccordionContentProps extends ArkAccordionContentProps {}

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

const Accordion = defineComponent({
  name: "Accordion",
  emits: ["update:modelValue", "change"],
  props: VueAccordionProps,
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

const AccordionItem = defineComponent({
  name: "AccordionItem",
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

const AccordionTrigger = defineComponent({
  name: "AccordionTrigger",
  setup(_, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordionTrigger class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" {...attrs}>
          {useUniqueChild(slots, "AccordionTrigger")}
        </ArkAccordionTrigger>
      );
    };
  },
});

const AccordionContent = defineComponent({
  name: "AccordionContent",
  setup(_, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordionContent class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...attrs}>
          {slots.default?.()}
        </ArkAccordionContent>
      );
    };
  },
});

export { Accordion, AccordionTrigger, AccordionItem, AccordionContent };
