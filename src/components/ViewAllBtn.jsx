import React from "react";

const ViewAllBtn = ({ name,url }) => {

  const btnFunction = () =>{
    window.open(url)
  }
  return (
    <div>
      <button type="submit" onClick={btnFunction}>{name} ➡</button>
    </div>
  );
};

export default ViewAllBtn;
