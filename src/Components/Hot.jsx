import Meme from "./Meme";
import Data from "../Data/Data.json";

const Hot = () => {
  return (
    <div>
      <p>I AM HOT</p>
      <img
        src={"../Data/mem1.png"}
        alt="A red apple on a white background"
      ></img>
      {Data.filter((item) => item.upvotes - item.downvotes >= 5).map((item) => (
        <Meme item={item} />
      ))}
    </div>
  );
};

export default Hot;
