import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../shared/assets/svg/Logo (1).svg";
import i18next, { languageMenu } from "../../shared/config/i18";
import Button from "../../shared/generics/button";

const Header = () => {
  let { t } = useTranslation();
  let [check, setCheck] = useState(false);
  let changelang = (code) => {
    i18next.changeLanguage(code);
    localStorage.setItem("language", code);
  };
  return (
    <div className="headerBg ">
      <div className="w-[95%] mx-auto max-w-[1440px] flex items-center justify-between py-4 ">
        <div className="flex items-center gap-8 ">
          <img src={logo} alt="" />
          <ul className=" max-[450px]:hidden flex items-center gap-8  text-[14px] text-[#c7c7c8]">
            <li>
              <p>{t("Продукты")}</p>
            </li>
            <li>
              <p>{t("Отзывы")}</p>
            </li>
            <li>
              <p>{t("нас")}</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative z-50 ">
            <button
              onClick={() => setCheck(!check)}
              className="px-2 py-1 border-[#3d3d3d] text-white bg-[#1f2025] rounded-lg border "
            >
              {t("language")}
            </button>
            <div
              className={` ${
                check ? "scale-100" : "scale-0"
              }  -bottom-16 right-0   absolute !z-[999] rounded-lg p-2 bg-white shadow-2xl duration-400  w-[120px]  `}
            >
              {languageMenu?.map((value) => (
                <div
                  onClick={() => {
                    changelang(value.code);
                    setCheck(!check);
                  }}
                  key={value.id}
                  className="border-b cursor-pointer duration-500 border-gray-300 *:py-1 flex items-center "
                >
                  <img
                    src={value.img}
                    className="h-7 w-7 object-contain rounded-full"
                    alt=""
                  />
                  <p className="text-[14px]">{value.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-[664px]:hidden">
            <Button>Стать</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
