import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

import Button from "../../shared/generics/button";

import paytion from "../../shared/assets/svg/paytion.svg";
import showcase from "../../shared/assets/svg/showcase.svg";
import showcaseCard1 from "../../shared/assets/svg/office icon.svg";
import showcaseCard2 from "../../shared/assets/svg/exchange icon.svg";
import showcaseCard3 from "../../shared/assets/svg/100+.svg";

const Showcase = () => {
  let { t } = useTranslation();
  return (
    <div
      className=" w-[95%] mx-auto max-w-[1440px] relative  max-[670px]:flex-col max-[670px]:items-center  flex  mt-10   justify-between max-[500px]:gap-6 max-[320px]:w-[90%]
    "
    >
      <div className=" flex flex-col gap-7 pt-30 max-[670px]:pt-0 ">
        <div className="flex flex-col gap-2 max-[500px]:items-center max-[500px]:text-center  ">
          <img src={paytion} className=" w-fit max-[500px]:w-[60%]" alt="" />
          <p className="text-[22px] max-w-[340px] text-[#f1f1f1] ">
            {parse(t("Финансовые"))}
          </p>
        </div>
        <div className="w-fit max-[500px]:mx-auto">
          <Button x={5} y={2}>
            Узнать
          </Button>
        </div>
      </div>
      <div>
        <img src={showcase} alt="" />
      </div>
      <div className="absolute top-3/5 max-[1144px]:top-5/5  grid grid-cols-3 gap-5  max-[830px]:w-full max-[830px]:*:flex-row max-[830px]:grid-cols-1">
        <div className="showcaseCard rounded-2xl max-[330px]:*:text-[14px] p-4 min-w-[250px] flex flex-col gap-5 ">
          <img src={showcaseCard1} className="w-fit" alt="" />
          <p className=" text-white ">{parse(t("15"))}</p>
        </div>
        <div className="showcaseCard rounded-2xl max-[330px]:*:text-[14px] p-4 min-w-[250px] flex flex-col gap-5 ">
          <img src={showcaseCard2} className="w-fit" alt="" />
          <p className=" text-white ">{parse(t("Операции"))}</p>
        </div>
        <div className="showcaseCard rounded-2xl max-[330px]:*:text-[14px] -z-[1] max-[1364px]:z-0 *:!z-10 p-4 min-w-[250px] flex flex-col gap-5 ">
          <img src={showcaseCard3} className="w-fit" alt="" />
          <p className=" text-white ">{parse(t("700"))}</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
