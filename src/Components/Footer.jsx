import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#1A1A1D] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold text-[#A64D79]">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal text-[#6A1E55]">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center text-[#A64D79]">
          <MdOutlineEmail size={20} />
          myemail@gmail.com
        </li>
        <li className="flex gap-1 items-center text-[#6A1E55]">
          <CiLinkedin size={20} />
          linkedin.com/username
        </li>
        <li className="flex gap-1 items-center text-[#3B1C32]">
          <FaGithub size={20} />
          github.com/username
        </li>
      </ul>
    </div>
  );
};

export default Footer;
