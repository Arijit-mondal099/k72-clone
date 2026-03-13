import Video from "./Video";

const TopText = () => {
  return (
    <div className="font-[lausanne-500] text-center text-[9.5vw] uppercase text-white md:leading-[8vw] pt-6">
      <div>L'étincelle</div>

      <div className="flex items-center justify-center gap-4">
        <span>qui</span>

        <div className="h-[13vh] rounded-full overflow-hidden mb-4 hidden md:block">
          <Video classes="rounded-full" />
        </div>

        <span>génère</span>
      </div>

      <div>la créativité</div>
    </div>
  );
};

export default TopText;
