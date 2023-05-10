import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  maxHeight: "100vh",
  inset: 0,
});

export const Content = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  maxWidth: "41rem",
  background: "$gray800",

  display: "flex",
  flexDirection: "column",
  gap: "$10",

  padding: "0 3rem 3rem",

  minHeight: "100vh",
  maxHeight: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
});

export const CloseButton = styled(Dialog.Close, {
  marginTop: "1.5rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",

  position: "absolute",
  right: "1.5rem",
});

export const RatingsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});
export const RatingsContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});
export const RatingHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const RateButton = styled("button", {
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
