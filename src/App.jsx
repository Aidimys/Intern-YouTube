import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AuthorPage from "./Pages/AuthorPage";
import VideoPage from "./Pages/VideoPage";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='AuthorPage' element={<AuthorPage />} />
          <Route path='video' element={<VideoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
