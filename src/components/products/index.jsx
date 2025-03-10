import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

import products1 from "../../shared/assets/svg/products1.svg";
import products2 from "../../shared/assets/svg/products2.svg";
import products3 from "../../shared/assets/svg/pics.svg";
import Button from "../../shared/generics/button";

const Products = () => {
  let { t } = useTranslation();
  return (
    <div className="w-[95%] max-[320px]:w-[90%] mx-auto max-w-[1440px] mt-10 flex flex-col gap-10">
      <p className="text-[48px] max-[950px]:text-[30px] max-[500px]:text-[20px] text-[#f1f1f1] font-extrabold ">
        {t("Наши")}
      </p>
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center justify-between max-[970px]:flex-col-reverse bgCard rounded-xl px-10 max-[1050px]:px-5 max-[970px]:p-5 border border-[#3d3d3d]  ">
          <div>
            <h2 className="text-[48px] max-[1160px]:text-[30px] max-[500px]:text-[20px] text-[#f1f1f1] font-extrabold  ">
              {t("Обмен")}
            </h2>
            <p className="text-[#bebebe] text-[18px]">
              {parse(t("Обменивайте"))}
            </p>
            <div className="pt-5 max-[444px]:w-full w-fit">
              <Button x={5} y={2}>
                {t("Обменять")}
              </Button>
            </div>
          </div>
          <img src={products1} className="max-[970px]:max-h-[300px]" alt="" />
        </div>
        <div className="flex items-center justify-between max-[970px]:flex-col-reverse bgCard rounded-xl px-10 max-[1050px]:px-5 max-[970px]:p-5 border border-[#3d3d3d]  ">
          <div>
            <h2 className="text-[48px] max-[1160px]:text-[30px] max-[500px]:text-[20px] text-[#f1f1f1] font-extrabold ">
              {t("Консьерж")}
            </h2>
            <p className="text-[#bebebe] text-[18px]">{parse(t("Это"))}</p>
            <div className="pt-5 max-[444px]:w-full w-fit">
              <Button x={5} y={2}>
                {t("Обменять")}
              </Button>
            </div>
          </div>
          <img src={products2} className="max-[970px]:max-h-[300px]" alt="" />
        </div>
        <div className="flex items-center justify-between max-[970px]:flex-col-reverse bgCard rounded-xl px-10 max-[1050px]:px-5 max-[970px]:p-5 border border-[#3d3d3d]  ">
          <div>
            <h2 className="text-[48px] max-[1160px]:text-[30px] max-[500px]:text-[20px] text-[#f1f1f1] font-extrabold ">
              {t("Обмен")}
            </h2>
            <p className="text-[#bebebe] text-[18px]">
              {parse(t("Обменивайте"))}
            </p>
            <div className="pt-5 max-[444px]:w-full w-fit">
              <Button x={5} y={2}>
                {t("Обменять")}
              </Button>
            </div>
          </div>
          <img src={products3} className="max-[970px]:max-h-[300px]" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Products;
