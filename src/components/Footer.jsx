import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <section class="d-flex justify-content-center  p-4 border-bottom">
          <div>
            <a href="" class="mx-4 link-secondary text-dark">
              <BsFacebook style={{ width: "30px", height: "30px" }} />
            </a>
          </div>
          <div>
            <a href="" class="mx-4 link-secondary text-dark">
              <BsYoutube style={{ width: "30px", height: "30px" }} />
            </a>
          </div>
          <div>
            <a href="" class="mx-4 link-secondary text-dark">
              <BsInstagram style={{ width: "30px", height: "30px" }} />
            </a>
          </div>
          <div>
            <a href="" class="mx-4 link-secondary text-dark">
              <RiKakaoTalkFill style={{ width: "30px", height: "30px" }} />
            </a>
          </div>
        </section>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              서비스이용약관
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              UGG이용약관
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              개인정보처리방침
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              영상정보처리방침
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              뷰티포인트
            </a>
          </li>
        </ul>
        <p>
          고객상담팀(수신자요금부담) 080-023-5454 (상담시간 월~금 : AM 09:00 ~
          PM 06:00)
        </p>
        <p className="text-center text-muted">
          © AMOREPACIFIC CORPORATION. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
