import "./App.css";
import LeftMenu from "./Comp/LeftMenu/LeftMenu";
import MainContent from "./Comp/MainContent/MainContent";
import Nav from "./Comp/Nav/Nav";
function App() {
  return (
    <div className='App'>
      <Nav />
      <LeftMenu />
      <MainContent />
    </div>
  );
}

export default App;
