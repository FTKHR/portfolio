import { useNavigate } from "react-router-dom";
import pp from "../assets/pp.jpg";
import CGPortfolio from "./CGPortfolio";
//import CSPortfolio from "./CSPortfolio";
export default function Home() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex items-center space-x-3 p-2 bg-rose-200 px-4">
        <img src={pp} width="70px" className="rounded-full" />
        <div>
          <h1 className="text-2xl ">Iftekhar Alam Khan</h1>
          <p className="text-sm opacity-70">3D Artist, Web Developer.</p>
        </div>
      </div>
      <div className="flex m-2 space-x-2">
        <div>
          <p>CG Works</p>
          <CGPortfolio />
        </div>
        <div>
          <p>CS Works</p>
          <CGPortfolio />
        </div>
      </div>
    </>
  );
}
