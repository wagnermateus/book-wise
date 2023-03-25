import { styled } from "@/styles/stitches.config";
import Link from "next/link";

export const Container = styled("nav", {
  width: "14.5rem",
  height: "61.75rem",

  margin: "$5 0 $5 $5",
  paddingTop: "$10",
  borderRadius: "$md",
  backgroundColor: "$gray700",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const NavList = styled("ul", {
  marginTop: "4rem",
  marginBottom: "39.875rem",

  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const NavItem = styled("li", {
  display: "flex",
  listStyle: "none",
  gap: "$4",
});

export const ActiveLinkBorder = styled("div", {
  visibility: "hidden",
  width: "4px",
  height: "$6",
  borderRadius: "$full",
  background: "$gradient-vertical",
  transition: "all 4s",

  variants: {
    active: {
      true: {
        visibility: "visible",
      },
    },
  },
});

export const LinkComponent = styled(Link, {
  textDecoration: "none",
  fontWeight: "$bold",
  color: "$gray400",

  display: "flex",
  alignItems: "center",

  svg: {
    marginRight: "$3",
  },

  variants: {
    active: {
      true: {
        color: "$gray100",
      },
    },
  },
});

export const UserInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  span: {
    color: "$gray200",
    fontSize: "$sm",
    lineHeight: "$base",
  },

  svg: {
    cursor: "pointer",
  },
});

export const LoginButton = styled("button", {
  all: "unset",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  gap: "$3",

  color: "$gray200",
  fontWeight: "$bold",
  lineHeight: "$base",
});
