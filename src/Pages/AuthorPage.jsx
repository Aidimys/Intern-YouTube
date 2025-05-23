import AuthorContent from "../Comp/AuthorContent/AuthorContent";
import LeftMenu from "../Comp/LeftMenu/LeftMenu";
import Nav from "../Comp/Nav/Nav";
import { useEffect } from "react";

const AuthorPage = () => {
  useEffect(() => {
    document.body.classList.add("channel-page");
    return () => document.body.classList.remove("channel-page");
  }, []);

  return (
    <>
      <Nav />
      <LeftMenu />
      <AuthorContent />
    </>
  );
};
export default AuthorPage;
