import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const Button = ({ children, x = 3, y = 1 }) => {
  let { t } = useTranslation();

  return (
    <>
      <button
        style={{
          paddingLeft: `${x * 4}px`,
          paddingRight: `${x * 4}px`,
          paddingTop: `${y * 4}px`,
          paddingBottom: `${y * 4}px`,
        }}
        className={` text-[#333] bg-white rounded-lg w-full   `}
      >
        {parse(t(`${children}`))}
      </button>
    </>
  );
};

export default Button;
