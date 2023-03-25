import { styled } from "@/styles/stitches.config";

export const Container = styled("figure", {
  background: "$gradient-vertical",
  borderRadius: "$full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    width: "100%",
    border: "2px solid transparent",
    borderRadius: "$full",
  },
});
