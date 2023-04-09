import Meme from "./Meme";
import Data from "../Data/Data.json";

const Hot = () => {
  return (
    <div>
      <p>I AM HOT</p>

      {Data.filter((item) => item.upvotes - item.downvotes >= 5).map((item) => (
        <Meme item={item} />
      ))}
    </div>
  );
};

export default Hot;
