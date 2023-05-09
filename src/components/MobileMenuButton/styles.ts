import { styled } from "@/styles/stitches.config";

export const MenuButton = styled("button", {
  all: "unset",
  width: "2rem",
  heigth: "2rem",

  alignSelf: "end",

  marginTop: "4rem",

  cursor: "pointer",

  ">svg": {
    color: "$purple100",

    "&:hover": {
      opacity: "0.7",
    },
  },

  "@media(min-width:950px)": {
    visibility: "collapse",
  },
});
