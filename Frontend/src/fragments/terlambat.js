import React, { useState, useEffect } from "react";
import axios from "axios";

const Terlambat = () => {
  const [data, setData] = useState([]);
  const [lateCount, setLateCount] = useState(0);
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v1/presence/"
      );
      setData(response.data);
      const count = response.data.reduce((acc, el) => {
        if (getStatusClass(el.createdAt) === "Terlambat") {
          return acc + 1;
        }
        return acc;
      }, 0);
      setLateCount(count);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getStatusClass = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const targetTimeMorningShift = new Date();
    const targetTimeAfternoonShift = new Date();
    targetTimeMorningShift.setHours(8, 0, 0, 0); // Adjust as needed
    targetTimeAfternoonShift.setHours(13, 0, 0, 0); // Adjust as needed

    // Calculate time differences in milliseconds
    const timeDifferenceOnMorning = createdAtDate - targetTimeMorningShift;
    const timeDifferenceOnAfternoon = createdAtDate - targetTimeAfternoonShift;

    // Determine status based on time differences
    let status;
    if (timeDifferenceOnMorning <= 0) {
      status = "Tepat Waktu Pagi";
    } else if (timeDifferenceOnAfternoon <= 0) {
      status = "Tepat Waktu Siang";
    } else {
      status = "Terlambat";
    }

    return status;
  };
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                Terlambat
              </div>
              <div className="h5 ps-2 mb-0 font-weight-bold text-gray-800">
                {lateCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terlambat;
