import {
  Accordion as ArkAccordion,
  AccordionContent as ArkAccordionContent,
  AccordionItem as ArkAccordionItem,
  AccordionTrigger as ArkAccordionTrigger,
} from "@ark-ui/vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "~/lib/utils";

const SharkAccordion = defineComponent({
  name: "SharkAccordion",
  setup(_, { slots, attrs }) {
    return () => {
      return <ArkAccordion {...attrs}>{slots.default?.()}</ArkAccordion>;
    };
  },
});

const SharkAccordionItem = defineComponent({
  name: "SharkAccordionItem",
  setup(_, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordionItem class={cn("border-b", attrs.class ?? "")}>
          {slots.default?.()}
        </ArkAccordionItem>
      );
    };
  },
});

const SharkAccordionTrigger = defineComponent({
  name: "SharkAccordionTrigger",
  setup(props, { slots, attrs }) {
    return () => {
      return (
        <ArkAccordionTrigger
          class={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-expanded]>svg]:rotate-180",
            attrs.class ?? ""
          )}
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
          class={cn(
            "overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down data-[state=closed]:animate-accordion-up",
            attrs.class ?? ""
          )}
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
