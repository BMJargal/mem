const Meme = ({ item }) => {
  return (
    <div className="bordercard">
      <div className="titlecard">{item.title}</div>
      <img className="imgcard" src={item.img} alt="meme_image"></img>
      <div className="votecard">
        <div className="upv">{item.upvotes}</div>
        <div className="downv">{item.downvotes}</div>
      </div>
    </div>
  );
};

export default Meme;
