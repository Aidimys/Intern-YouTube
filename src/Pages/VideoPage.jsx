import Header from "../Comp/Header/Header";
import VideoContent from "../Comp/VideoContent/VideoContent";
import { useEffect } from "react";

const VideoPage = () => {
  useEffect(() => {
    document.body.classList.add("video-page");
    return () => document.body.classList.remove("video-page");
  }, []);
  return (
    <>
      <Header />
      <VideoContent />
    </>
  );
};
export default VideoPage;
