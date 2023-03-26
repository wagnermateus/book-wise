import { styled } from "@/styles/stitches.config";

export const Container = styled("figure", {
  width: "100%",
  height: "100%",
  background: "$gradient-vertical",
  borderRadius: "$full",
  border: "2px solid transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    borderRadius: "$full",
  },
});
