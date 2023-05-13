import * as vue from 'vue';
import { Slots, VNode } from 'vue';

declare function useUniqueChild(slots: Slots, componentName: string): VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>;
declare function getValidChildren(slots: Slots | null): VNode[];

declare const utils_getValidChildren: typeof getValidChildren;
declare const utils_useUniqueChild: typeof useUniqueChild;
declare namespace utils {
  export {
    utils_getValidChildren as getValidChildren,
    utils_useUniqueChild as useUniqueChild,
  };
}

declare const _default: {
    utils: typeof utils;
};

export { _default as default };
