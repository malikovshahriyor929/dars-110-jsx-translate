import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

import seyf from "../../shared/assets/svg/seyf.svg";

const Protect = () => {
  let { t } = useTranslation();
  return (
    <div className="w-[95%] max-[320px]:w-[90%] mx-auto max-w-[1440px] mt-10 ">
      <div className="bgCard p-10 max-[330px]:p-4 rounded-xl border border-[#3d3d3d]  flex items-center justify-between max-[880px]:flex-col-reverse bg-[url('../../shared/assets/svg/showcasebg.svg')]">
        <div className=" ">
          <h1 className="text-[48px] max-[1100px]:text-[30px] max-[350px]:text-[20px] text-[#f1f1f1] font-extrabold ">
            {parse(t("Ваши"))}
          </h1>
          <p className="text-[18px] max-[386px]:text-[16px] text-[#bebebe]">{parse(t("Безопасность"))}</p>
        </div>
        <img src={seyf} alt="" />
      </div>
    </div>
  );
};

export default Protect;
