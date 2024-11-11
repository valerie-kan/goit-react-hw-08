import { Suspense } from "react";

import { AppBar } from "./appBar/AppBar";
import Loader from "./loader/Loader";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};
