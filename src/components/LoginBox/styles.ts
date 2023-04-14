import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
});

export const Content = styled(Dialog.Content, {
  display: "flex",
  flexDirection: "column",

  width: "28.875rem",
  borderRadius: "$sm",
  padding: "1rem 4.5rem 3.5rem ",
  background: "$gray800",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
export const Title = styled("span", {
  marginTop: "3.5rem",
  textAlign: "center",
});

export const CloseButton = styled(Dialog.Close, {
  background: "transparent",
  border: "none",
  cursor: "pointer",

  position: "absolute",
  right: "1.5rem",
});
export const Buttons = styled("div", {
  marginTop: "$10",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

export const Button = styled("button", {
  all: "unset",
  width: "100%",
  backgroundColor: "$gray600",
  padding: "$5 $6",

  display: "flex",
  alignItems: "center",
  gap: "$5",

  borderRadius: "$md",

  cursor: "pointer",

  fontWeight: "$bold",
  fontSize: "$lg",
});
