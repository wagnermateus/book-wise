import { styled } from "@/styles/stitches.config";
import Link from "next/link";

export const Container = styled(Link, {
  all: "unset",

  display: "flex",
  alignItems: "center",
  gap: "$5",
  maxWidth: "100%",
  backgroundColor: "$gray700",
  padding: "$4 $5",
  borderRadius: "$md",
  border: "2px solid transparent",
  transition: "all 0.5s",
  cursor: "pointer",

  "&:hover": {
    border: "2px solid $gray600",
  },
});

export const ImageContainer = styled("figure", {
  img: {
    width: "100%",
    height: "100%",
  },
});

export const BookInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const TitleAndAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",

  ">strong": {
    width: "12.5rem",
    overflow: "hidden",
    lineHeight: "$short",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  ">span": {
    color: "$gray400",
    fontSize: "$sm",
    lineHeight: "$base",
  },
});
