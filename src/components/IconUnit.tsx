import * as React from "react";

const IconUnit: React.FC<IconUnitProps> = (props) => {
  const { value } = props;
  return <div className="iconunit"> {value} </div>;
};

interface IconUnitProps {
  value?: JSX.Element;
}

export default IconUnit;
