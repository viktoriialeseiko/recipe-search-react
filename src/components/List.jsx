import "./list.css";
import { Link } from "react-router-dom";

const List = ({ recipes }) => {
  return (
    <div className="list-container">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h3>
              {recipe.title.length < 20
                ? `${recipe.title}`
                : `${recipe.title.substr(0, 20)}...`}
            </h3>
            <img src={recipe.image_url} alt={recipe.title} />
            <p>Publisher: {recipe.publisher}</p>

            <button>
              <Link
                to={{
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state: {
                    id: recipe.recipe_id
                  }
                }}
              >
                View Original
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default List;
