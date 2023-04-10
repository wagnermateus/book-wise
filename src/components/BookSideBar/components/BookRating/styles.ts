import { styled } from "@/styles/stitches.config";

export const Container = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  backgroundColor: "$gray700",
  padding: "$6",
  borderRadius: "$md",

  p: {
    color: "$gray300",
    lineHeight: "$base",
    fontSize: "$sm",
  },
});

export const Details = styled("header", {
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
export const UserNameAndRatingDateBox = styled("div", {
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
