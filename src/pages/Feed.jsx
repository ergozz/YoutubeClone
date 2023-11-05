import { useContext } from "react";
import SideBar from "./../components/SideBar";
import { YoutubeContext } from "../context/YoutubeContext";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="videos">
        {!videos ? (
          <Loading />
        ) : (
          videos?.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;