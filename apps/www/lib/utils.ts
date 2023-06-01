import { type ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Slots, type VNode, cloneVNode, isVNode } from "vue";

export function useUniqueChild(slots: Slots, componentName: string) {
  const validChildren = getValidChildren(slots);
  if (validChildren.length > 1) {
    const errorMessage = `[${componentName}] : ${componentName} can only have one root element.`;
    console.error(errorMessage);
    throw new SyntaxError(errorMessage);
  }
  const DefaultSlot = cloneVNode(validChildren[0]);

  return DefaultSlot;
}

export function getValidChildren(slots: Slots | null): VNode[] {
  const slotArray = slots?.default?.() || [];
  return slotArray.filter((child) => {
    return isVNode(child);
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function copyToClipboard(value: string) {
  const el = document.createElement("textarea");
  el.value = value;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
