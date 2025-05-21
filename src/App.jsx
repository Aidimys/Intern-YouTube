import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AuthorPage from "./Pages/AuthorPage";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='AuthorPage' element={<AuthorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
