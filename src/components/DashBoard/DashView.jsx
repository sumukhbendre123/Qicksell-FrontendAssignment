import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashView.css";
import Card from "../Card/Card";
import userImage from "../../assets/userImage.jpg";

const DashView = () => {
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => (
          <div key={index} className="dashCardContainer">
            <div className="dashCardHeading flex-sb">
              <div className="leftView">
                {!user ? (
                  <DiCodeigniter />
                ) : (
                  <div
                    className="imageContainer relative"
                    style={{
                      width: "15px",
                      height: "15px",
                      display: "inline-block",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                      src={userImage}
                      alt="UserImage"
                    />
                  </div>
                )}
                <span>
                  {elem[index]?.title} {elem[index]?.value?.length}
                </span>
              </div>
              <div className="rightView">
                <AiOutlinePlus /> <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashList flex-gap-10">
              {elem[index]?.value?.map((elem, ind) => (
                <Card key={ind} id={elem.id} title={elem.title} tag={elem.tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default DashView;
