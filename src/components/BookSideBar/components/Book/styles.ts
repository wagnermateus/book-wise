import { styled } from "@/styles/stitches.config";

export const Container = styled("article", {
  marginTop: "4rem",
  width: "35.25rem",
  height: "25rem",
  display: "flex",
  flexDirection: "column",
  gap: "$10",
  padding: "1.5rem 2rem 1rem",
  backgroundColor: "$gray700",
  borderRadius: "$md",
});

export const Content = styled("div", {
  display: "flex",

  gap: "$5",
});

export const Footer = styled("div", {
  borderTop: "1px solid $gray600",
  display: "flex",
  gap: "3.5rem",
  padding: "1.5rem 0",
});

export const FooterItem = styled("div", {
  display: "flex",
  gap: "$4",

  ">div": {
    display: "flex",
    flexDirection: "column",

    span: {
      color: "$gray300",
      fontSize: "$sm",
    },

    strong: {
      color: "$gray200",
      lineHeight: "$base",

      textTransform: "capitalize",
    },
  },
});

export const NumberOfReviewsSpan = styled("span", {
  color: "$gray400",
  fontSize: "$sm",
});

export const ImageContainer = styled("figure", {
  width: "10rem",
  img: {
    width: "100%",
    height: "100%",
  },
});

export const BookInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$8",
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
