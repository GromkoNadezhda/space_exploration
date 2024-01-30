import { Header } from "../Header/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);
