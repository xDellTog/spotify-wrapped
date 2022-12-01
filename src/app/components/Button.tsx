import { styled } from "../../theme/stitches.config";

export const Button = styled("button", {
  cursor: "pointer",

  defaultVariants: {
    color: "default",
  },
  variants: {
    color: {
      default: {
        color: "$slate1",
        textDecoration: "none",
        "&:hover": {
          color: "$slate2",
          textDecoration: "underline",
        },
        "&:focus": {
          color: "$slate3",
          textDecoration: "underline",
        },
      },
      primary: {
        color: "$grass8",
        textDecoration: "none",
        "&:hover": {
          color: "$grass9",
          textDecoration: "underline",
        },
        "&:focus": {
          color: "$grass10",
          textDecoration: "underline",
        },
      },
    },
  },
});
