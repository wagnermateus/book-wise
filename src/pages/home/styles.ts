import { styled } from "@/styles/stitches.config";
import Link from "next/link";

export const Container = styled("div", {
  display: "flex",

  "@media(max-width:950px)": {
    padding: "4rem",
    ">nav": {
      visibility: "collapse",
    },
  },
});

export const Content = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginLeft: "6rem",

  "@media(max-width:1020px)": {
    marginLeft: "2rem",
  },

  "@media(max-width:950px)": {
    width: "100%",
    marginLeft: 0,
    flex: 0,
  },
});
export const BooksContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",
});
export const LastBookRead = styled("section", {
  maxWidth: "38rem",
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
  "@media(max-width:1300px)": {
    maxWidth: "38rem",
    marginLeft: "0",
  },
  "@media(max-width:950px)": {
    maxWidth: "100%",
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
  "@media(max-width:1300px)": {
    flexDirection: "row",
    overflowX: "auto",
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

  "@media(max-width:1300px)": {
    flexDirection: "column-reverse",
  },
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
