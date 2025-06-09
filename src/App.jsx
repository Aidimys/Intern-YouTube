import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import AuthorPage from './Pages/AuthorPage';
import VideoPage from './Pages/VideoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="AuthorPage" element={<AuthorPage />} />
        <Route path="video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
