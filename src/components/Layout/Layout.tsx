import { Header } from "@components/Header/Header";

export const Layout = ({
  children,
  headerContent,
}: {
  children: React.ReactNode;
  headerContent: {
    title: string;
    mainPart: string;
    id: string;
  };
}) => (
  <>
    <Header headerContent={headerContent} />
    {children}
  </>
);
