import React, { useState } from "react";

const bestP = [
  {
    id: 0,
    img: "assets/best1.png",
    title: "센슈얼 파우더 매트 리쿼드",
  },
  {
    id: 1,
    img: "assets/best2.jpg",
    title: "실키 스테이 24H 롱웨어 파운데이션 SPF 20 / PA++",
  },
];

const newP = [
  {
    id: 0,
    img: "assets/new1.jpg",
    title: "센슈얼 피팅 글로우 틴트",
  },
  {
    id: 1,
    img: "assets/new2.png",
    title: "헤라 UV프로텍터 톤업 SPF50+ / PA++++",
  },
];

const BestProduct = () => {
  return (
    <section
      className="d-flex text-start mx-auto mt-5 mb-5"
      style={{ maxWidth: 1044 }}
    >
      {/* Best */}
      <div style={{ width: 500, marginRight: 22 }}>
        <h1>BEST</h1>
        <div>
          <div className="d-flex mx-auto">
            {bestP.map((best) => {
              return (
                <div key={best.id} style={{ width: 215.75 }}>
                  <div style={{ width: 180 }}>
                    <a href="" className="text-decoration-none text-black">
                      <img
                        src={best.img}
                        alt={best.title}
                        style={{ width: 180 }}
                      />
                      <p>{best.title}</p>
                      <p>자세히 보기 ></p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* New */}
      <div style={{ width: 500, marginRight: 22 }}>
        <h1>NEW</h1>
        <div>
          <div className="d-flex mx-auto">
            {newP.map((newP) => {
              return (
                <div key={newP.id} style={{ width: 215.75 }}>
                  <div style={{ width: 180 }}>
                    <a href="" className="text-decoration-none text-black">
                      <img
                        src={newP.img}
                        alt={newP.title}
                        style={{ width: 180 }}
                      />
                      <p>{newP.title}</p>
                      <p>자세히 보기 ></p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProduct;
