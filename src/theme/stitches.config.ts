import { grass, slate } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, createTheme } = createStitches({
    theme: {
        fonts: {
            default: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            mono: 'Courier New',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
        },
    },
});

export const theme = createTheme({
    colors: {
        ...slate,
        ...grass,
    },
});