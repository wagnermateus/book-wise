import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
});

export const Header = styled("header", {
  marginTop: "4.5rem",
});

export const LogoAndInputBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const Logo = styled("div", {
  display: "flex",
  gap: "$3",
});

export const SearchBookInput = styled("input", {
  width: "27rem",
  height: "3rem",
  borderRadius: "$sm",
  padding: "0.875rem 1.25rem",
  backgroundColor: "transparent",
  border: "1px solid $gray500",
  color: "$gray100",

  "&::placeholder": {
    color: "$gray400",
  },

  "&:focus": {
    borderColor: "$green200",
  },
});

export const Content = styled("div", {
  margin: "0 6rem",
  flex: 1,
});
