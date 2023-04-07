import { styled } from "@/styles/stitches.config";
import Link from "next/link";

export const Container = styled("div", {
  display: "flex",
});

export const Content = styled("main", {
  margin: "4.5rem 6rem 6rem 5.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "$10",
});

export const Header = styled("header", {
  display: "flex",
  gap: "0.875rem",
});

export const Ratings = styled("section", {
  maxWidth: "39rem",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const Box = styled("div", {
  display: "flex",

  gap: "4rem",
});

export const UserProfile = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "19.25rem",
  height: "35rem",
  gap: "$8",
  borderLeft: "1px solid $gray700",
});

export const UserInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  figure: {
    width: "4.5rem",
    marginBottom: "$6",
  },

  strong: {
    fontSize: "$xl",
  },
  span: {
    fontSize: "$sm",
    lineHeight: "$base",
    color: "$gray400",
  },
});

export const UserActivities = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",
});

export const Activity = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: "$5",
});
export const ActivityInfo = styled("div", {
  display: "flex",
  flexDirection: "column",

  span: {
    color: "$gray300",
    lineHeight: "$base",
  },
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

export const ButtonBack = styled(Link, {
  all: "unset",

  width: "6rem",
  height: "1.875rem",

  color: "$purple100",
  fontWeight: "$bold",
  fontSize: "$sm",
  padding: "0.25rem 0.5rem",

  borderRadius: "$sm",
  cursor: "pointer",

  display: "flex",

  alignItems: "center",
  justifyContent: "center",

  transition: "all 0.5s",

  "&:hover": {
    backgroundColor: "rgba(131,129,217, 0.1)",
  },
});
