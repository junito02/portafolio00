import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/junito02/junito02" target="_blank">
          <span className="w-10 h-10 text-xl bg-[#1d3f61] rounded-full inline-flex items-center justify-center hover:text-black cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/junior-alejandro-836684344/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl  bg-[#1d3f61] rounded-full inline-flex items-center justify-center hover:text-[#557ed6] cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
