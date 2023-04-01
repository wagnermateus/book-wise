import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
});

export const Header = styled("header", {
  marginTop: "4.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "$10",
});

export const LogoAndInputBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
export const BookCategories = styled("div", {
  display: "flex",
  gap: "$3",
});
export const Logo = styled("div", {
  display: "flex",
  gap: "$3",
});
export const CategoryInputContainer = styled("div", {
  position: "relative",

  input: {
    position: "absolute",
    height: "100%",
    width: "100%",
    margin: 0,
    zIndex: 1,
    opacity: 0,
    cursor: "pointer",

    "&:checked + div": {
      backgroundColor: "$purple200",
      color: "$gray100",
    },
  },
});

export const InputLabel = styled("div", {
  padding: "0.25rem 1rem",
  border: "1px solid $purple100",
  borderRadius: "$full",
  color: "$purple100",
  transition: "all 1s",
});
export const SearchBookInput = styled("input", {
  width: "27rem",
  height: "3rem",
  borderRadius: "$sm",
  padding: "0.875rem 1.25rem",
  backgroundColor: "transparent",
  border: "1px solid $gray500",
  color: "$gray100",
  transition: "all 2s",
  "&:focus": {
    outline: 0,
    border: "1px solid $green200",
  },

  "&::placeholder": {
    color: "$gray400",
  },
});

export const Content = styled("div", {
  margin: "0 6rem",
  flex: 1,
});
