import React from "react";

function WeatherItem({ label, value }) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h5 className="weight700">{label}</h5>
      </div>
      <div className="col-md-6 ">
        <h5>{value}</h5>
      </div>
    </div>
  );
}

export default WeatherItem;
