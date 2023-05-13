import {
    cloneVNode,
    computed,
    isVNode,
    reactive,
    ref,
    type AllowedComponentProps,
    type ComponentCustomProps,
    type Slots,
    type VNode,
    type VNodeProps,
  } from 'vue'

export function useUniqueChild(slots: Slots, componentName: string) {
    const validChildren = getValidChildren(slots)
    if (validChildren.length > 1) {
      const errorMessage = `[${componentName}] : ${componentName} can only have one root element.`
      console.error(errorMessage)
      throw new SyntaxError(errorMessage)
    }
    const DefaultSlot = cloneVNode(validChildren[0])
  
    return DefaultSlot
  }

export function getValidChildren(slots: Slots | null): VNode[] {
    const slotArray = slots?.default?.() || []
    return slotArray.filter((child) => {
      return isVNode(child)
    })
  }
