import { FadeLoader } from "react-spinners";

export function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FadeLoader color="#50B2C0" />
    </div>
  );
}
