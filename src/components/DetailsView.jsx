import React from "react";

export const DetailsView = ({ details }) => {
  return (
    <>
      <ul className="list-group">
        {/* {details?.name && <span>{details.name}</span>} */}
        <li className={"list-group-item"}>
          <img src={`${details?.avatar}?${Math.random()}`} width={260} />
        </li>
        <li className={"list-group-item"}>{details?.name}</li>
        <li className={"list-group-item"}>City: {details?.details?.city}</li>
        <li className={"list-group-item"}>
          Position: {details?.details?.position}
        </li>
      </ul>
    </>
  );
};
