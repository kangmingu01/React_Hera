import React, { useState } from "react";
import main from "../util/main";
import "../fonts/default.css";

const MainCampaign = () => {
  const [mainPage] = useState(main);
  return (
    <>
      {mainPage.map((main) => {
        return (
          <main key={main.id}>
            <h1 className="mt-5 fs-1 fw-bold">{main.title}</h1>
            <div style={{ backgroundColor: main.bgcolor }} className="mb-3">
              <img src={main.img} alt="" />
            </div>
            <p>
              <a href="" className="text-decoration-none text-black">
                {main.sub}
              </a>
            </p>
          </main>
        );
      })}
    </>
  );
};

export default MainCampaign;
