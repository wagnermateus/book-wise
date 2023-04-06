import { styled } from "@/styles/stitches.config";
import Link from "next/link";

export const Container = styled("div", {
  display: "flex",
});

export const Content = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginLeft: "6rem",
});
export const BooksContent = styled("div", {
  maxWidth: "38rem",
  display: "flex",
  flexDirection: "column",
  gap: "$10",
});
export const LastBookRead = styled("section", {
  main: { height: "auto" },

  ">div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export const LastRatings = styled("div", {
  maxWidth: "38rem",
});

export const PopularBooks = styled("aside", {
  maxWidth: "20.25rem",
  display: "flex",
  flexDirection: "column",

  marginLeft: "4rem",
  marginRight: "6rem",

  ">div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export const PopularBooksList = styled("div", {
  width: "100%",
  marginTop: "$4",
  display: "flex",
  flexDirection: "column",
  gap: "$3",

  img: {
    minWidth: "4rem",
    height: "5.875rem",
  },
});

export const ButtonSeeAll = styled(Link, {
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

export const Books = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
});

export const Header = styled("header", {
  margin: "4.5rem 0 $4 ",

  display: "flex",
  gap: "$3",
});

export const Text = styled("span", {
  color: "$gray100",
  fontSize: "$sm",
  lineHeight: "$base",
});

export const Ratings = styled("section", {
  marginTop: "$4",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});
