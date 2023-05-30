//hot.jsx
import Meme from "./Meme";

const Hot = ({ state, setState, plusCount, minusCount }) => {
  return (
    <div className="center">
      {state.map(
        (item, id) =>
          -item.downvotes + item.upvotes > 5 && (
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

export default Hot;
