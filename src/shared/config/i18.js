import translationEN from "../config/locale/en/resources.json";
import translationRU from "../config/locale/ru/resources.json";
import translationUZ from "../config/locale/uz/resources.json";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};
let savedLanguage = localStorage.getItem("language") || "ru";

i18next.use(LanguageDetector).use(initReactI18next).init({
  lng: savedLanguage,
  resources,
  debug: true,
  fallbackLng: "ru",
});

export let languageMenu = [
  {
    id: 1,
    title: "English",
    shortTitle: "En",
    code: "en",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/2048px-United-kingdom_flag_icon_round.svg.png",
  },
  {
    id: 2,
    title: "Uzbekistan",
    shortTitle: "Uz",
    code: "uz",
    img: "https://banner2.cleanpng.com/20190708/ihq/kisspng-flag-of-uzbekistan-flags-of-asia-national-flag-uzbekistan-state-university-of-world-languages-s-1713881749464.webp",
  },
  {
    id: 3,
    title: "Russian",
    shortTitle: "Ru",
    code: "ru",
    img: "https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png",
  },
];

//   let [check, setCheck] = useState(false);
// let changelang = (code) => {
//   i18next.changeLanguage(code);
//   localStorage.setItem("language", code);
// };

{
  /* <div className="relative pt-2 ">
  <button
    onClick={() => setCheck(!check)}
    className="px-2 py-1 rounded-lg border "
  >
    {t("language")}
  </button>
  <div
    className={` ${
      check ? "scale-100" : "scale-0"
    }  -bottom-24  absolute  rounded-lg p-2 bg-white shadow-2xl duration-400  w-[120px]  `}
  >
    {languageMenu.map((value) => (
      <div
        onClick={() => {
          changelang(value.code);
          setCheck(!check);
        }}
        key={value.id}
        className="border-b duration-500 border-gray-300 *:py-1 flex items-center "
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
</div>; */
}
export default i18next;
