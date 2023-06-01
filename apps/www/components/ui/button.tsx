import { Pressable } from "@ark-ui/vue";
import { VariantProps, cva } from "class-variance-authority";
import { type ButtonHTMLAttributes, defineComponent } from "vue";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const SharkButton = defineComponent({
  name: "SharkButton",
  props: {
    asChild: {
      type: Boolean as PropType<ButtonProps["asChild"]>,
      default: false,
    },
    variant: {
      type: String as PropType<ButtonProps["variant"]>,
      default: "default",
    },
    size: {
      type: String as PropType<ButtonProps["size"]>,
      default: "default",
    },
    type: {
      type: String as PropType<ButtonProps["type"]>,
      default: "button",
    },
  },
  emits: ["click"],
  setup(props, { slots, attrs, emit }) {
    return () => {
      return (
        <Pressable
          class={cn(
            buttonVariants({ variant: props.variant, size: props.size }),
            attrs.class ?? ""
          )}
          onClick={(e: Event) => emit("click", e)}
        >
          {slots.default?.()}
        </Pressable>
      );
    };
  },
});

export { SharkButton, buttonVariants };
