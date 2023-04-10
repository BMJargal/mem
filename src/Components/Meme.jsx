import React, { useState, useEffect } from "react";
const Meme = ({ item }) => {
  const [data, setData] = useState(item);

  const plusCount = () => {
    const updatedData = { ...data, upvotes: data.upvotes + 1 };
    setData(updatedData);
  };
  const minusCount = () => {
    const updatedData = { ...data, downvotes: data.downvotes + 1 };
    setData(updatedData);
  };

  useEffect(() => {
    const jsonDataString = JSON.stringify(data);
    localStorage.setItem("data", jsonDataString);
  }, [data]);

  return (
    <div className="memecard">
      <div className="memetitle">{item.title}</div>

      <div className="memeimg">
        <img
          style={{ width: 500, height: 300, alignItems: "center" }}
          src={"./mem" + item.img}
          alt="meme_image"
        ></img>
      </div>

      <div className="memevote">
        <div className="memevote">
          <button className="btn" onClick={plusCount}>
            Like
          </button>
          <p className="upv">{data.upvotes}</p>
        </div>

        <div className="memevote">
          <p className="downv">{data.downvotes}</p>
          <button className="btn" onClick={minusCount}>
            Unlike
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meme;
