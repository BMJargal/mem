import React, { useState, useEffect } from "react";
// import mem1 from ".."
const Meme = ({ item }) => {
  const [upcount, setUpCount] = useState(item.upvotes);
  const [data, setData] = useState([]);

  const [visible, setVisible] = React.useState([]);
  useEffect(() => {
    fetch("../Data.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function plusCount() {
    const newData = { ...data, upcount: upcount + 1 };

    setData(newData);

    fetch("plusCount.php", {
      method: "POST",
      body: JSON.stringify(newData),
    });

    setUpCount(upcount + 1);
  }

  return (
    <div className="memecard">
      <div className="memetitle">{item.title}</div>
      <div className="memeimg">
        <img src={"./mem" + item.img} alt="meme_image"></img>
      </div>
      <div className="memevote">
        <div>
          <p className="upv">{upcount}</p>
          <button onClick={plusCount}>Like</button>
        </div>
        <div>
          <p>Data: {JSON.stringify(data)}</p>
          <button onClick={plusCount}>Update Data</button>
        </div>
        <div>
          <div key={item.title}>
            <button
              onClick={() =>
                setVisible(
                  visible.includes(item.title)
                    ? visible.filter((vtitle) => vtitle !== item.title)
                    : [...visible, item.title]
                )
              }
            >
              {visible.includes(item.title) ? "Hide" : "Show"}
            </button>
            {visible.includes(item.title) && <div>{item.title}</div>}
          </div>
        </div>

        <div className="downv">{item.downvotes}</div>
      </div>
    </div>
  );
};

export default Meme;
