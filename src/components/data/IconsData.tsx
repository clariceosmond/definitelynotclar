import jsicon from "../../items/js-icon.png";
const iconsData: IconsDataProps = {
  icons0: [{ icon: jsicon, name: "javascript" }],
  icons1: [],
  icons2: [],
};

interface IconsProps {
  icon: string;
  name: string;
}
interface IconsDataProps {
  icons0: Array<IconsProps>;
  icons1: Array<IconsProps>;
  icons2: Array<IconsProps>;
}

export default iconsData;
