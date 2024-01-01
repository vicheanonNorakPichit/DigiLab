import React, { useEffect, useState } from "react";
import axios from "axios";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";
function Lab() {
  const [data, setData] = useState([]);

  // Get All Labs Data from API
  // const getLab = () => {
  //   axios
  //     .get("http://localhost:3000/api/experiments")
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/experiments")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" grid gap-4 lg:grid-cols-2 grid-cols-1 items-center">
      {data?.map((lab) => (
        <div className="card w-full shadow-xl" key={lab}>
          <div className="card-body">
            <h2 className="card-title">{lab.experiment_name}</h2>
            <p>{"ថ្នាក់ទី៖ " + lab.grade}</p>
            <div className="card-actions justify-end">
              <Link to={"/experiment/" + lab._id}>
                <MainButton text="ចាប់ផ្តើម" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Lab;
