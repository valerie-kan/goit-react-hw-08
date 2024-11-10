import { Suspense } from "react";
import { AppBar } from "./appBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};
