import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
});

export const Content = styled("main", {
  margin: "4.5rem 6rem 0 5.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "$10",
});

export const Header = styled("header", {
  display: "flex",
  gap: "0.875rem",
});

export const Ratings = styled("div", {
  width: "39rem",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});
export const SearchRatingInput = styled("input", {
  width: "100%",
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

export const Books = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});
