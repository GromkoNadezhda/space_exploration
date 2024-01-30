import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AstronomyPictures } from "./components/AstronomyPictures/AstronomyPictures";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AstronomyPictures />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;




