import AuthorContent from "../Comp/AuthorContent/AuthorContent";

import Header from "../Comp/Header/Header";
import { useEffect } from "react";
import Aside from "../Comp/AsideMenu/Aside";

const AuthorPage = () => {
  useEffect(() => {
    document.body.classList.add("channel-page");
    return () => document.body.classList.remove("channel-page");
  }, []);

  return (
    <>
      <Header />
      <Aside />
      <AuthorContent />
    </>
  );
};
export default AuthorPage;
