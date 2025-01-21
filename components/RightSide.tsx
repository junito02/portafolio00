import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:junioralejandrotiburcio@gmail.com">
        <p className="text-sm text-bold rotate-90 w-72 tracking-widest text-white text-center justify-center items-center bg-[#25507b] p-2 rounded-lg hover:scale-110 duration-300">
          Junior Alejandro
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
