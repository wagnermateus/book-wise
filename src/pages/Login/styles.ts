import { styled } from "@/styles/stitches.config";

export const Container = styled("main", {
  width: "100%",

  display: "flex",
});

export const ImageContainer = styled("figure", {
  padding: "$6 0 $5 $5",

  img: {
    width: "100%",
    height: "100%",
  },
});

export const OptionsContainer = styled("section", {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  paddingTop: "15.3125rem",
});
export const Box = styled("div", {
  display: "flex",
  width: "23.25rem",
  flexDirection: "column",

  gap: "$10",
});

export const Buttons = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Button = styled("button", {
  all: "unset",
  width: "100%",
  backgroundColor: "$gray600",
  padding: "$5 $6",

  display: "flex",
  alignItems: "center",
  gap: "$5",

  borderRadius: "$md",

  cursor: "pointer",

  fontWeight: "$bold",
  fontSize: "$lg",
});

export const Header = styled("article", {
  display: "flex",
  flexDirection: "column",

  strong: {
    fontWeight: "$bold",
    fontSize: "1.5rem",
  },

  span: {
    color: "$gray200",
    fontSize: "$md",
  },
});
