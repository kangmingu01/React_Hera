import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const CarouselFade = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/carouse1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption
            style={{ width: 600, height: 130 }}
            className="text-black text-start align-right carousel-right"
          >
            <h2>세상에 없던 NEW COMFORT MLBB</h2>
            <p>센슈얼 파우더 매트 립스틱</p>
            <span className=" text-white bg-black border border-dark p-2 ">
              자세히 보기
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/carouse2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{ width: 600, height: 130 }}
            className="text-black text-start align-right carousel-right"
          >
            <h2>아침부터 저녁까지 매끈한 피부결</h2>
            <p>실키 스테이 파운데이션</p>
            <span className=" text-white bg-black border border-dark p-2 ">
              자세히 보기
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/carouse3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{ width: 600, height: 130 }}
            className="text-black text-start align-right carousel-right"
          >
            <h2>내 피부처럼 가벼운 벨벳티 스킨</h2>
            <p>센블랙 쿠션</p>
            <span className=" text-white bg-black border border-dark p-2 ">
              자세히 보기
            </span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselFade;
