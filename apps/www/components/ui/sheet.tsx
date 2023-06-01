import {
  Dialog as ArkDialog,
  DialogBackdrop as ArkDialogBackdrop,
  DialogCloseTrigger as ArkDialogCloseTrigger,
  DialogContainer as ArkDialogContainer,
  DialogContent as ArkDialogContent,
  DialogDescription as ArkDialogDescription,
  DialogTitle as ArkDialogTitle,
  DialogTrigger as ArkDialogTrigger,
} from "@ark-ui/vue";
import { cva } from "class-variance-authority";
import { X } from "lucide-vue-next";

import { cn } from "~/lib/utils";

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: { position: "right" },
});

const sheetVariants = cva(
  "fixed z-50 scale-100 gap-4 bg-background p-6 opacity-100 shadow-lg border",
  {
    variants: {
      position: {
        top: "animate-in slide-in-from-top w-full duration-300",
        bottom: "animate-in slide-in-from-bottom w-full duration-300",
        left: "animate-in slide-in-from-left h-full duration-300",
        right: "animate-in slide-in-from-right h-full duration-300",
      },
      size: {
        content: "",
        default: "",
        sm: "",
        lg: "",
        xl: "",
        full: "",
      },
    },
    compoundVariants: [
      {
        position: ["top", "bottom"],
        size: "content",
        class: "max-h-screen",
      },
      {
        position: ["top", "bottom"],
        size: "default",
        class: "h-1/3",
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "h-1/4",
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "h-1/2",
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "h-5/6",
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "h-screen",
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "max-w-screen",
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "w-1/3",
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "w-1/4",
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "w-1/2",
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "w-5/6",
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "w-screen",
      },
    ],
    defaultVariants: {
      position: "right",
      size: "default",
    },
  }
);

const SharkSheet = defineComponent({
  name: "SharkSheet",
  setup(_, { slots }) {
    return () => <ArkDialog>{slots.default?.()}</ArkDialog>;
  },
});

const SharkSheetTrigger = defineComponent({
  name: "SharkSheetTrigger",
  setup(_, { slots }) {
    return () => (
      <ArkDialogTrigger>
        <button>{slots.default?.()}</button>
      </ArkDialogTrigger>
    );
  },
});

const SharkSheetClose = defineComponent({
  name: "SharkSheetClose",
  setup(_, { slots }) {
    return () => (
      <ArkDialogCloseTrigger>
        <button>{slots.default?.()}</button>
      </ArkDialogCloseTrigger>
    );
  },
});

const SharkSheetOverlay = defineComponent({
  name: "SharkSheetBackdrop",
  setup(_, { attrs }) {
    return () => (
      <ArkDialogBackdrop
        class={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
          attrs.class ?? ""
        )}
      />
    );
  },
});

const SharkSheetContent = defineComponent({
  name: "SharkSheetContent",
  props: {
    size: {
      type: String as PropType<
        "content" | "default" | "sm" | "lg" | "xl" | "full"
      >,
      required: false,
      default: "default",
    },
    position: {
      type: String as PropType<"top" | "bottom" | "left" | "right">,
      required: false,
      default: "right",
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <ArkDialogContainer class={portalVariants({ position: props.position })}>
        <ArkDialogContent
          class={sheetVariants({ position: props.position, size: props.size })}
        >
          <ArkDialogCloseTrigger
            class={cn(
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
              attrs.class ?? ""
            )}
          >
            <button>
              <X class="h-4 w-4" />
              <span class="sr-only">Close</span>
            </button>
          </ArkDialogCloseTrigger>
          {slots.default?.()}
        </ArkDialogContent>
      </ArkDialogContainer>
    );
  },
});

const SharkSheetHeader = defineComponent({
  name: "SharkSheetHeader",
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn(
          "flex flex-col space-y-2 text-center sm:text-left",
          attrs?.class ?? ""
        )}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const SharkSheetFooter = defineComponent({
  name: "SharkSheetFooter",
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
          attrs?.class ?? ""
        )}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const SharkSheetTitle = defineComponent({
  name: "SharkSheetTitle",
  setup(_, { slots, attrs }) {
    return () => (
      <ArkDialogTitle
        class={cn("text-lg font-semibold text-foreground", attrs.class ?? "")}
      >
        {slots.default?.()}
      </ArkDialogTitle>
    );
  },
});

const SharkSheetDescription = defineComponent({
  name: "SharkSheetDescription",
  setup(_, { slots, attrs }) {
    return () => (
      <ArkDialogDescription
        class={cn("text-sm text-muted-foreground", attrs.class ?? "")}
      >
        {slots.default?.()}
      </ArkDialogDescription>
    );
  },
});

export {
  SharkSheetOverlay,
  SharkSheet,
  SharkSheetTrigger,
  SharkSheetClose,
  SharkSheetContent,
  SharkSheetTitle,
  SharkSheetHeader,
  SharkSheetFooter,
  SharkSheetDescription,
};
