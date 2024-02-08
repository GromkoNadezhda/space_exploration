import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { AstronomyPictures } from "@components/AstronomyPictures/AstronomyPictures";
import { AstronomyPicture } from "@components/AstronomyPicture/AstronomyPicture";
import { NotFound } from "@components/NotFound/NotFound";
import "@style/App.scss";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AstronomyPictures />} />
          <Route path="/:date" element={<AstronomyPicture />} />
          <Route path="*" element={<NotFound error="Сheck the url" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </div>
);

export default App;
