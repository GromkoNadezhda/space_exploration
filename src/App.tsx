import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AstronomyPictures } from "./components/AstronomyPictures/AstronomyPictures";
import { Layout } from "./components/Layout/Layout";
import { AstronomyPicture } from "./components/AstronomyPicture/AstronomyPicture";
import {
  BASIC_BLOCKS_ID,
  BASIC_BLOCKS_ID_LIST,
  HeaderContent,
} from "./constants/constants";
import { NotFound } from "./components/NotFound/NotFound";
import "./style/App.scss";

const App = () => {
  const [headerContent, setHeaderContent] = useState<{
    id: string;
    title: string;
    mainPart: string;
  }>(HeaderContent[BASIC_BLOCKS_ID.allAstronomyPictures]);

  const updateHeaderContent = (id: string) => {
    const filteredHeaderContent = BASIC_BLOCKS_ID_LIST.find(
      (basicBlockId) => basicBlockId === id
    );

    !!filteredHeaderContent
      ? setHeaderContent(HeaderContent[filteredHeaderContent])
      : setHeaderContent(HeaderContent.otherPages);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Layout headerContent={headerContent}>
          <Routes>
            <Route
              path="/"
              element={
                <AstronomyPictures
                  updateHeaderContent={updateHeaderContent}
                  headerContent={headerContent}
                />
              }
            />
            <Route
              path="/:date"
              element={
                <AstronomyPicture
                  updateHeaderContent={updateHeaderContent}
                  headerContent={headerContent}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFound
                  updateHeaderContent={updateHeaderContent}
                  headerContent={headerContent}
                  error="Сheck the url"
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
