"use client";

import { Provider } from "react-redux";
import { reduxStore } from "./redux";
import { SessionProvider } from "next-auth/react";

/* Core */

/* Instruments */

export const Providers = (props: any) => {
  return (
    <SessionProvider session={props.session}>
      <Provider store={reduxStore}>{props.children}</Provider>
    </SessionProvider>
  );
};
