import React from "react";
import style from "./style.module.css";
import { CiStar } from "react-icons/ci";

export const MobileCard = () => {
  return (
    <>
      <div>MobileCard</div>
      <div className="card border-0" style={{ width: 190 }}>
        <img
          className="card-img-top p-3"
          src="/samsungs23ultra.webp"
          alt="Card image"
        />
        <div className="card-body text-center m-0 p-0">
          <h4 className={`card-title m-0 p-0 ${style.card_title} `}>
            Samsung S23 Ultra Max
          </h4>
          <p className={`card-text m-0 p-0 ${style.card_title} `}>
            ( Titanium Yellow, 265GP )
          </p>
          <p className="m-0 p-0">
            <span className="badge bg-success ">
              4.5 <CiStar />
            </span>
            <span className={`text-success ms-2  ${style.card_title}`}>
              25 % off{" "}
            </span>
          </p>
          <div className="m-0 p-0 ">
            <p className={`m-0 p-0 fw-bold ${style.card_title}`}>
              ₹ 1,25,000
              <del>
                <span className="text-muted ms-2">₹ 1,49,000</span>
              </del>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
