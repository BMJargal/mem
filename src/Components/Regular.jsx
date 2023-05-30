//Regular.jsx

import Meme from "./Meme";

const Regular = ({ state, setState, plusCount, minusCount }) => {
  return (
    <div className="center">
      {state.map(
        (item, id) =>
          -item.downvotes + item.upvotes <= 5 && (
            <>
              <Meme
                id={id}
                item={item}
                plusCount={plusCount}
                minusCount={minusCount}
              />
            </>
          )
      )}
    </div>
  );
};

export default Regular;
