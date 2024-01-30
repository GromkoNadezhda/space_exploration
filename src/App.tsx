import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AstronomyPictures } from "./components/AstronomyPictures/AstronomyPictures";
import { Layout } from "./components/Layout/Layout";
import { AstronomyPicture } from "./components/AstronomyPicture/AstronomyPicture";
import "./style/App.scss";

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AstronomyPictures/>} />
            <Route path='/:date' element={<AstronomyPicture/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
