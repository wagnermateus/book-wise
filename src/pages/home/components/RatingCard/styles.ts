import { styled } from "@/styles/stitches.config";

export const Container = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  backgroundColor: "$gray700",
  padding: "$6",
  borderRadius: "$md",
});

export const Header = styled("header", {
  display: "flex",
  gap: "$4",
});
export const AvatarImgContainer = styled("div", {
  width: "2.5rem",
  height: "2.5rem",
  img: {
    width: "100%",
    height: "100%",
  },
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

  "@media(max-width: 769px)": {
    flexDirection: " column",
    alignItems: "center",
    gap: "$8",
  },
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
