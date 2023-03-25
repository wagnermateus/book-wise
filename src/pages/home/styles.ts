import { styled } from "@/styles/stitches.config";

export const Container = styled("main", {
  display: "flex",
});

export const Content = styled("section", {
  marginLeft: "6rem",
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
