import { styled } from "@/styles/stitches.config";

export const Container = styled("main", {
  marginTop: "$4",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  width: "38rem",
  height: "17.5rem",
  backgroundColor: "$gray700",
  padding: "$6",
  borderRadius: "$md",
});

export const Header = styled("header", {
  display: "flex",
  gap: "$4",
});

export const UserNameAndRatingDate = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

export const UserName = styled("span", {
  fontSize: "$md",
  lineHeight: "$base",
});

export const RatingDate = styled("span", {
  color: "$gray400",
  fontSize: "$sm",
  lineHeight: "$base",
});

export const Book = styled("div", {
  display: "flex",
  gap: "$5",
});

export const CoverContainer = styled("figure", {
  width: "6.75rem",
  height: "9.5rem",
  borderRadius: "$sm",
});

export const Details = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",

  p: {
    color: "$gray300",
    lineHeight: "$base",
    fontSize: "$sm",
  },
});

export const TitleAndAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",

  ">strong": {
    lineHeight: "$short",
  },

  ">span": {
    color: "$gray400",
    fontSize: "$sm",
    lineHeight: "$base",
  },
});
