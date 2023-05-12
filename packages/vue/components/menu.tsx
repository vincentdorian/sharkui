import {defineComponent} from "vue"

import { Menu, MenuItem, MenuContent, MenuTrigger } from "@ark-ui/vue";

const SharkMenu = defineComponent({
    name: "Menu",
    setup(_, {slots}) {
        return () => {
            return (
                <Menu class={"max-w-3xl w-full"}>
                    {slots.default?.()}
                </Menu>  
            )
        }
    },
});

const SharkMenuItem = defineComponent({
    name: "MenuItem",
    setup(_, {slots}) {
        return () => {
            return (
                <MenuItem>
                    {slots.default?.()}
                </MenuItem>  
            )
        }
    },
});

const SharkMenuTrigger = defineComponent({
    name: "MenuTrigger",
    setup(_, {slots}) {
        return () => {
            return (
                <MenuTrigger>
                    {slots.default?.()}
                </MenuTrigger>
            )
        }
    },
});

const SharkMenuContent = defineComponent({
    name: "MenuContent",
    setup(_, {slots}) {
        return () => {
            return (
                <MenuContent>
                    {slots.default?.()}
                </MenuContent>  
            )
        }
    },
});

export {SharkMenu as Menu, SharkMenuItem as MenuItem, SharkMenuTrigger as MenuTrigger, SharkMenuContent as MenuContent}

