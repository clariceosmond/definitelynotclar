import iconsData from "../data/IconsData";
import IconUnit from "../IconUnit";

const LanguagePage = () => {
  let iconset = Array(30).fill(<IconUnit />);
  for (let i = 0; i < iconsData.icons0.length; ++i) {
    const imgicon = (
      <div>
        <img className="imgic" alt="" src={iconsData.icons0[i].icon} />
        <div className="icontip"> {iconsData.icons0[i].name} </div>
      </div>
    );
    iconset[i] = <IconUnit value={imgicon} />;
  }
  return iconset;
};

export default LanguagePage;
