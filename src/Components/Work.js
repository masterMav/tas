import React from "react";
import PickMeals from "../Assets/trophy.jpg";
import ChooseMeals from "../Assets/rise.png";
import DeliveryMeals from "../Assets/bell.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Compete",
      text: "Providing a platform for competing with friends by maintaining a Top ratings Leaderboard",
    },
    {
      image: ChooseMeals,
      title: "Progress report",
      text: "Collect, process and maintain various practice stats for a detailed Performance Analysis.",
    },
    {
      image: DeliveryMeals,
      title: "Community events",
      text: "Get notified on time about upcoming lectures, contests and guest talks.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          To achieve our vision of introducing the masses to the world of Competitive Programming, we are focusing on 3 vital aspects:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
