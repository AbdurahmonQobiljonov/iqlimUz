import React from "react";
import { RenderCitys } from "../Helper/Language-helper";
const ItemNabar = ({ onclickLinks, citiesSelector }) => {
  return (
    <>
      {citiesSelector.map((item) => (
        <li key={item._id} onClick={() => onclickLinks(item._id)}>
          {RenderCitys(item.slug)}
        </li>
      ))}
    </>
  );
};

export default ItemNabar;
