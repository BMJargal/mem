//Meme.jsx
const Meme = ({ id, item, plusCount, minusCount }) => {
  return (
    <div key={id} className="memecard">
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
          <button className="btn" onClick={() => plusCount(id)}>
            Like
          </button>
          <p className="upv">{item.upvotes}</p>
        </div>

        <div className="memevote">
          <p className="downv">{item.downvotes}</p>
          <button className="btn" onClick={() => minusCount(id)}>
            Unlike
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meme;
