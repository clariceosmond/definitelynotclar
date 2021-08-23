import jsicon from "../../items/language/js-icon.png";
import cicon from "../../items/language/cicon.png";
import cppicon from "../../items/language/cppicon.png";
import tsxicon from "../../items/language/tsxicon.png";
import htmlicon from "../../items/language/htmlicon.png";
import pyicon from "../../items/language/pyicon.png";
import javaicon from "../../items/language/javaicon.png";
import kotlinicon from "../../items/language/kotlinicon.png";
import cssicon from "../../items/language/cssicon.png";
import mysqlicon from "../../items/language/mysqlicon.png";

const iconsData: IconsDataProps = {
  icons0: [
    { icon: pyicon, name: "Python" },
    { icon: jsicon, name: "JavaScript" },
    { icon: tsxicon, name: "TypeScript" },
    { icon: cicon, name: "C" },
    { icon: cppicon, name: "C++" },
    { icon: javaicon, name: "Java" },
    { icon: kotlinicon, name: "Kotlin" },
    { icon: mysqlicon, name: "MySQL" },
    { icon: htmlicon, name: "HTML" },
    { icon: cssicon, name: "CSS" },
  ],
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
