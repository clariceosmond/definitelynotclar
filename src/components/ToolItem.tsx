import * as React from "react";

const ToolItem: React.FC<ToolItemProps> = (props) => {
  const { name, style, onClick } = props;
  return (
    <button
      className="toolitem"
      id={name}
      style={style}
      onClick={onClick}
    ></button>
  );
};

interface ToolItemProps {
  name: string;
  style: any;
  onClick: () => void;
}
export default ToolItem;
