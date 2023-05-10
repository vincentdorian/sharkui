import {defineComponent} from "vue"

import * as Ark from "@ark-ui/vue";

const Menu = defineComponent({
    name: "Menu",
    setup(_, {slots}) {
        return () => {
            return (
                <Ark.Menu class={"max-w-3xl w-full"}>
                    {slots.default?.()}
                </Ark.Menu>  
            )
        }
    },
});

const MenuItem = defineComponent({
    name: "MenuItem",
    setup(_, {slots}) {
        return () => {
            return (
                <Ark.MenuItem>
                    {slots.default?.()}
                </Ark.MenuItem>  
            )
        }
    },
});

const MenuTrigger = defineComponent({
    name: "MenuTrigger",
    setup(_, {slots}) {
        return () => {
            return (
                <Ark.MenuTrigger>
                    {slots.default?.()}
                </Ark.MenuTrigger>
            )
        }
    },
});

const MenuContent = defineComponent({
    name: "MenuContent",
    setup(_, {slots}) {
        return () => {
            return (
                <Ark.MenuContent>
                    {slots.default?.()}
                </Ark.MenuContent>  
            )
        }
    },
});

export {Menu, MenuItem, MenuContent, MenuTrigger}


