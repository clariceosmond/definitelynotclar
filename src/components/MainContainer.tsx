import * as React from "react";
import Logic from "./Logic";
import yakuzaIdle from "../items/yakuza_idle.png";
import caflag from "../items/ca-flag.png";

const MainContainer: React.FC = () => {
  return (
    <div className="mainbox">
      <Logic />
      <div className="mainboxitem">
        <img src={yakuzaIdle} alt="" id="iconpic" />
        <div style={{ width: "500px" }}>
          <h1> Clarice Osmond </h1>
          <h2> Education: University of Waterloo </h2>
          <h2> 3B Computer Science</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "500px",
              justifyContent: "center",
            }}
          >
            <img
              src={caflag}
              alt=""
              style={{
                width: "50px",
                height: "35px",
                marginRight: "15px",
                marginTop: "20px",
              }}
            />
            <h2> ON, Canada </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
