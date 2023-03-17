import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray800",
    color: "$gray100",
  },

  "body, input, textarea, button": {
    fontFamily: "$default",
    fontWeight: 400,
  },

  "@media(max-width: 768px)": {
    html: {
      fontSize: "87%",
    },
  },
});
