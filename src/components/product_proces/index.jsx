import { useTranslation } from "react-i18next";

import product_proces1 from "../../shared/assets/svg/product_proces.svg";
import product_proces2 from "../../shared/assets/svg/product_proces2.svg";
import product_proces3 from "../../shared/assets/svg/product_proces3.svg";
import card from "../../shared/assets/svg/card.svg";

const Product_proces = () => {
  let { t } = useTranslation();
  return (
    <div className="w-[95%] max-[320px]:w-[90%] mx-auto max-w-[1440px] mt-10 flex flex-col gap-10 ">
      <p className="text-[48px] max-[950px]:text-[30px] max-[500px]:text-[20px] text-[#f1f1f1] font-extrabold ">
        {t("Продукты")}
      </p>
      <div className="grid grid-cols-3 gap-5 max-[830px]:grid-cols-1">
        <div className="bgCard p-5 flex items-center flex-col justify-between gap-4 border border-[#3d3d3d] rounded-xl">
          <img src={product_proces1} alt="" />
          <div className="flex items-start gap-3">
            <img src={card} alt="" />
            <div>
              <h1 className="text-white font-bold text-[18px]">
                {t("Банковская")}
              </h1>
              <p className="text-[#bebebe]">{t("Дебетовые")}</p>
            </div>
          </div>
        </div>
        <div className="bgCard p-5 flex items-center flex-col justify-between gap-4 border border-[#3d3d3d] rounded-xl">
          <img src={product_proces2} alt="" />
          <div className="flex items-start gap-3">
            <img src={card} alt="" />
            <div>
              <h1 className="text-white font-bold text-[18px]">
                {t("Персональный")}
              </h1>
              <p className="text-[#bebebe]">{t("Личный")}</p>
            </div>
          </div>
        </div>
        <div className="bgCard p-5 flex items-center flex-col justify-between gap-4 border border-[#3d3d3d] rounded-xl">
          <img src={product_proces3} alt="" />
          <div className="flex items-start gap-3">
            <img src={card} alt="" />
            <div>
              <h1 className="text-white font-bold text-[18px]">
                {t("Банковская")}
              </h1>
              <p className="text-[#bebebe]">{t("Дебетовые")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_proces;
