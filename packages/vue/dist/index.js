var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/lib/utils.ts
var utils_exports = {};
__export(utils_exports, {
  getValidChildren: () => getValidChildren,
  useUniqueChild: () => useUniqueChild
});
import {
  cloneVNode,
  isVNode
} from "vue";
function useUniqueChild(slots, componentName) {
  const validChildren = getValidChildren(slots);
  if (validChildren.length > 1) {
    const errorMessage = `[${componentName}] : ${componentName} can only have one root element.`;
    console.error(errorMessage);
    throw new SyntaxError(errorMessage);
  }
  const DefaultSlot = cloneVNode(validChildren[0]);
  return DefaultSlot;
}
function getValidChildren(slots) {
  const slotArray = slots?.default?.() || [];
  return slotArray.filter((child) => {
    return isVNode(child);
  });
}

// src/index.ts
var src_default = {
  utils: utils_exports
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map