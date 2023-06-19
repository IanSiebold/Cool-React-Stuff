import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: "#f6f9e1",
            },
        }),
    },
    colors: {
        //General Page
        link_text: "#0645ad",
        page_bg: "#f6f9e1",
        page_text: "#262a09",
        page_sec_bg: "#f4f9f1",
        page_sec_text: "#262a09",

        //Buttons
        button_bg: "#326615",
        button_text: "#f9f9f9",
        button_hover_bg: "#23490f",
        sec_button_bg: "#f4f9f1",
    }
});

export default theme;
