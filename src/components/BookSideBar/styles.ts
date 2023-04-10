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
  width: "41rem",
  background: "$gray800",

  display: "flex",

  padding: "0 3rem 3rem",

  minHeight: "100vh",
  maxHeight: "100vh",
});

export const CloseButton = styled(Dialog.Close, {
  marginTop: "1.5rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",

  position: "absolute",
  right: "1.5rem",
});
