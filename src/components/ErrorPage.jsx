import { TiArrowBackOutline } from "react-icons/ti";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <h1 className="text-7xl font-bold">Oops!...</h1>
      <p className="text-4xl font-bold text-red-600">404</p>
      <p className="text-lg">Page not found</p>
      <div className="space-x-4">
        <button onClick={()=>navigate(-1)} className="btn px-7 rounded-full bg-[#9538E2] text-white">
        Go Back <TiArrowBackOutline className="text-2xl" />
        </button>
        <Link to={"/"}>
        <button className="btn px-7 rounded-full text-[#9538E2] bg-white border-[#9538E2]">
        Go Home <IoHomeOutline className="text-xl" />
        </button></Link>
      </div>
    </div>
  );
};
export default ErrorPage;