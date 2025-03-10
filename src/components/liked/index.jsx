import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

import payment from "../../shared/assets/svg/payment.svg";
import earth from "../../shared/assets/svg/Clip path group.svg";
import deposit from "../../shared/assets/svg/deposit.svg";

const Liked = () => {
  let { t } = useTranslation();
  return (
    <div className="w-[95%] max-[1144px]:mt-60 max-[830px]:pt-40  max-[320px]:w-[90%] mx-auto max-w-[1440px] space-y-10 ">
      <p className="text-[48px] max-[950px]:text-[30px] max-[500px]:text-[20px] text-[#f1f1f1] font-extrabold ">
        {parse(t("Решаем"))}
      </p>
      <div className="grid grid-cols-3 max-[720px]:grid-cols-1  *:w-full gap-6">
        <div className="headerBg max-[770px]:p- max-[900px]:*:text-[15px] max-[770px]:*:text-[14px] border border-[#3d3d3d]  !rounded-xl p-5 flex flex-col gap-4 w-fit  ">
          <img src={deposit} className="max-[720px]:max-h-[320px]" alt="" />
          <p className="text-[#ecebeb] text-[18px] font-semibold">
            {parse(t("Покупка"))}
          </p>
        </div>
        <div className="headerBg max-[770px]:p- max-[900px]:*:text-[15px] max-[770px]:*:text-[14px] border  border-[#3d3d3d]  !rounded-xl p-5 flex flex-col gap-4 w-fit  ">
          <img src={earth} className="max-[720px]:max-h-[320px]" alt="" />
          <p className="text-[#ecebeb] text-[18px] font-semibold">
            {parse(t("Покупка"))}
          </p>
        </div>
        <div className="headerBg max-[770px]:p- max-[900px]:*:text-[15px] max-[770px]:*:text-[14px] border border-[#3d3d3d]  !rounded-xl p-5 flex flex-col gap-4 w-fit  ">
          <img src={payment} className="max-[720px]:max-h-[320px]" alt="" />
          <p className="text-[#ecebeb] text-[18px] font-semibold">
            {parse(t("Покупка"))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Liked;
