import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray700",
  borderRadius: "$md",
  padding: "1.5rem",
});
export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  figure: {
    width: "2.5rem",
    height: "2.5rem",
  },
});
export const User = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});
export const Stars = styled("div", {});
export const Star = styled("button", {
  all: "unset",
  cursor: "pointer",
});
export const TextAreaInput = styled("textarea", {
  marginTop: "$6",
  resize: "none",
  outline: 0,
  width: "100%",
  height: "10.25rem",
  backgroundColor: "$gray800",
  padding: "0.875rem 1.5rem",
  border: "1px solid $gray500",
  color: "$gray200",
  lineHeight: "$base",
  transition: "all 1s",

  "&::placeholder": {
    color: "$gray400",
  },
  "&:focus": {
    border: "1px solid $green200",
  },
});
export const Buttons = styled("div", {
  marginTop: "$3",
  display: "flex",
  justifyContent: "flex-end",
  gap: "$2",

  button: {
    all: "unset",
    background: "$gray600",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "all 0.5s",

    "&:hover": {
      opacity: 0.6,
    },

    "&:disabled": {
      cursor: "not-allowed",

      "&:hover": {
        opacity: 1,
      },
    },
  },
});
