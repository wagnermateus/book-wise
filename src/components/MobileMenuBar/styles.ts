import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
});

export const Content = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  width: "18rem",
  borderRadius: "$md",
  background: "$gray700",

  display: "flex",
  flexDirection: "column",

  minHeight: "100vh",
  height: "100vh",

  overflowY: "auto",
  overflowX: "hidden",

  "@media(min-width:1300px)": {
    visibility: "collapse",
  },
});

export const CloseButton = styled(Dialog.Close, {
  marginTop: "1.5rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",

  position: "absolute",
  right: "1.5rem",
});
