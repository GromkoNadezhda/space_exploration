import { ReactNode } from "react";
import { Header } from "@components/Header/Header";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);
