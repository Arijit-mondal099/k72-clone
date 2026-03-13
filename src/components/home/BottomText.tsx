import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <div className="font-[lausanne-500] flex flex-col md:flex-row gap-4 text-[6.5vw] uppercase text-white leading-[8vw] pb-4">
      <Link
        to={"/projects"}
        className="border-4 text-center border-white rounded-full px-6 py-1 hover:border-yellow-200 hover:text-yellow-200 transition-colors duration-100"
      >
        projects
      </Link>

      <Link
        to={"/agence"}
        className="border-4 text-center border-white rounded-full px-6 py-1 hover:border-yellow-200 hover:text-yellow-200 transition-colors duration-100"
      >
        agence
      </Link>
    </div>
  );
};

export default BottomText;
