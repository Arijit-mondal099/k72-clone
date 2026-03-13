import type { FC } from "react";

interface VideoProps {
  classes?: string;
}

const Video: FC<VideoProps> = ({ classes }) => {
  return (
    <>
      <video
        src="/home-video.mp4"
        muted
        autoPlay
        loop
        className={`h-full w-full object-cover ${classes}`}
      />
    </>
  );
};

export default Video;
