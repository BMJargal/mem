import Meme from "./Meme";
import Data from "../Data/Data.json";

const Regular = () => {
  return (
    <div>
      <p>I AM REGULAR</p>
      {Data.filter((item) => item.upvotes - item.downvotes < 5).map((item) => (
        <Meme item={item} />
      ))}
    </div>
  );
};

export default Regular;
