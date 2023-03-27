import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
});

export const Content = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginLeft: "6rem",
});

export const LastRatings = styled("section", {});

export const PopularBooks = styled("section", {
  minWidth: "20.25rem",
  marginLeft: "4rem",
  marginRight: "6rem",

  ">div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export const PopularBooksList = styled("div", {
  marginTop: "$4",
  display: "flex",
  flexDirection: "column",
  gap: "$3",

  img: {
    maxWidth: 64,
    maxHeight: 94,
  },
});

export const ButtonSeeAll = styled("button", {
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

export const Ratings = styled("article", {
  marginTop: "$4",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});
