import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import { Audio, BallTriangle } from "react-loader-spinner";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const PhoneDetail = () => {
  const [Phone, SetPhone] = useState([]);
  const [loading, Setloading] = useState(true);
 const [selected, setSelected] = useState({ from: undefined, to: undefined });
   const footer = selected?.from
    ? selected.to
      ? `📅 Selected from ${selected.from.toLocaleDateString()} to ${selected.to.toLocaleDateString()}`
      : `📅 Start date: ${selected.from.toLocaleDateString()}`
    : "Pick a date range.";
   useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then (rac=>rac.json())
    // .then (data =>SetPhone(data.data))
   

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phaons = data.data.data;
        const phonDataWhak = phaons.map((phaon) => {
          console.log(phaon.phone_name, "   ", phaon.slug);

          const obj = {
            name: phaon.phone_name,
            price: parseInt(phaon.slug.split("-")[1]),
          };
          return obj;
        });
        SetPhone(phonDataWhak);
        Setloading(false);
      });
  }, []);
  console.log(Phone);

  return (
    <div>
      <h3>Phone : {Phone.length}</h3>
      {/* <Audio
      height={80}
      width={80}
      radius={9}
      color="green"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass=""
    /> */}

      {loading && (
        <BallTriangle
          height={50}
          width={50}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      <DayPicker
      animate
      mode="range"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />

      <BarChart
        style={{
          width: "100%",
          maxWidth: "6 c00px",
          maxHeight: "400px",
          aspectRatio: 1.618,
        }}
        responsive
        data={Phone}
      >
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>

        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default PhoneDetail;
