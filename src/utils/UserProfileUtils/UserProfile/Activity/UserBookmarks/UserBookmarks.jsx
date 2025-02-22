import { useState } from "react";

import css from "./UserBookmarks.module.css";

import happyHoursImg from "/images/happyhours.jpg";

import UserDetCard from "../../../UserDetCard/UserDetCard";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const UserBookmarks = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "Biryani"
    },
    {
      id: 2,
      imgSrc: happyHoursImg,
      name: "Dosa"
    },
    {
      id: 3,
      imgSrc: happyHoursImg,
      name: "Idli"
    },
    {
      id: 4,
      imgSrc: happyHoursImg,
      name: "Samosa"
    },
    {
      id: 5,
      imgSrc: happyHoursImg,
      name: "Poha"
    },
    {
      id: 6,
      imgSrc: happyHoursImg,
      name: "Upma"
    },
    {
      id: 7,
      imgSrc: happyHoursImg,
      name: "Chilla"
    },
    {
      id: 8,
      imgSrc: happyHoursImg,
      name: "Puri"
    },
    {
      id: 9,
      imgSrc: happyHoursImg,
      name: "Bhaji"
    },
    {
      id: 10,
      imgSrc: happyHoursImg,
      name: "Khichdi"
    },
    {
      id: 11,
      imgSrc: happyHoursImg,
      name: "Pakora"
    },
    {
      id: 12,
      imgSrc: happyHoursImg,
      name: "Jalebi"
    },
    {
      id: 13,
      imgSrc: happyHoursImg,
      name: "Kachori"
    },
    {
      id: 14,
      imgSrc: happyHoursImg,
      name: "Halwa"
    },
  ]);
  let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <UserDetCard imgSrc={item.imgSrc} name={item.name} key={item.id}/>;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserBookmarks;
