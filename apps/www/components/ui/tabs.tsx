import {
  TabContent as ArkTabContent,
  type TabContentProps,
  TabIndicator as ArkTabIndicator,
  TabList as ArkTabList,
  TabTrigger as ArkTabTrigger,
  type TabTriggerProps,
  Tabs as ArkTabs,
  type TabsProps,
} from "@ark-ui/vue";
import { cn, useUniqueChild } from "~/lib/utils";

const VueTabsProps = {
  activationMode: {
    type: String as PropType<TabsProps["activationMode"]>,
  },
  defaultValue: {
    type: String as PropType<TabsProps["defaultValue"]>,
  },
  dir: {
    type: String as PropType<TabsProps["dir"]>,
  },
  getRootNode: {
    type: Function as PropType<TabsProps["getRootNode"]>,
  },
  ids: {
    type: Array as PropType<TabsProps["ids"]>,
  },
  loop: {
    type: Boolean as PropType<TabsProps["loop"]>,
  },
  onChange: {
    type: Function as PropType<TabsProps["onChange"]>,
  },
  onDelete: {
    type: Function as PropType<TabsProps["onDelete"]>,
  },
  onFocus: {
    type: Function as PropType<TabsProps["onFocus"]>,
  },
  orientation: {
    type: String as PropType<TabsProps["orientation"]>,
  },
  translations: {
    type: Object as PropType<TabsProps["translations"]>,
  },
};

const VueTabTriggerProps = {
  value: {
    type: String as PropType<TabTriggerProps["value"]>,
    required: true,
    default: "",
  },
  disabled: {
    type: Boolean as PropType<TabTriggerProps["disabled"]>,
    default: false,
  },
};

const VueTabContentProps = {
  value: {
    type: String as PropType<TabContentProps["value"]>,
    required: true,
    default: "",
  },
};

const SharkTabs = defineComponent({
  name: "SharkTabs",
  props: VueTabsProps,
  setup(props, { slots, attrs }) {
    return () => (
      <ArkTabs {...props} {...attrs}>
        {slots.default?.()}
      </ArkTabs>
    );
  },
});

const SharkTabList = defineComponent({
  name: "SharkTabList",
  setup(_, { slots, attrs }) {
    return () => (
      <ArkTabList
        class={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          attrs?.class as string
        )}
        {...attrs}
      >
        {slots.default?.()}
      </ArkTabList>
    );
  },
});

const SharkTabTrigger = defineComponent({
  name: "SharkTabTrigger",
  props: VueTabTriggerProps,
  setup(props, { slots, attrs }) {
    return () => (
      <ArkTabTrigger
        class={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
          attrs?.class as string
        )}
        {...props}
      >
        {useUniqueChild(slots, "TabsTrigger")}
      </ArkTabTrigger>
    );
  },
});

const SharkTabContent = defineComponent({
  name: "SharkTabContent",
  props: VueTabContentProps,
  setup(props, { slots }) {
    return () => (
      <ArkTabContent
        class={cn(
          "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}
        {...props}
      >
        {slots.default?.()}
      </ArkTabContent>
    );
  },
});

const SharkTabIndicator = defineComponent({
  name: "SharkTabIndicator",
  setup(props, { slots, attrs }) {
    return () => (
      <ArkTabIndicator
        class={cn("h-1 rounded-full bg-primary")}
        {...props}
        v-slots={slots}
        {...attrs}
      >
        {slots.default?.()}
      </ArkTabIndicator>
    );
  },
});

export {
  SharkTabs,
  SharkTabList,
  SharkTabTrigger,
  SharkTabContent,
  SharkTabIndicator,
};
