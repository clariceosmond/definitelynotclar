import iconsData from "../data/IconsData";
import IconUnit from "../IconUnit";

const LanguagePage = () => {
  let iconset = Array(30).fill(<IconUnit />);
  for (let i = 0; i < iconsData.icons0.length; ++i) {
    iconset[i] = (
      <IconUnit
        image={iconsData.icons0[i].icon}
        text={iconsData.icons0[i].name}
      />
    );
  }
  return iconset;
};

export default LanguagePage;
