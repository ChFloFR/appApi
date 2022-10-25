import React from "react";
import { Link } from "react-router-dom";

const Cocktails = ({ name, info, glass, id, image }) => {
  // const { id } = useParams();
  // const [loading, setLoading] = useState(false);
  // const [cocktails, setCocktails] = useState({});

  // async function getCocktails() {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${url}${id}`);
  //     const data = await response.json();
  //     console.log(data);
  //     if (data.drinks) {
  //       const {
  //         strDrink: name,
  //         strDrinkThumb: image,
  //         strAlcoholic: info,
  //         strCategory: category,
  //         strGlass: glass,
  //         strinstructions: instructions,
  //         strIngredient1,
  //         strIngredient2,
  //         strIngredient3,
  //         strIngredient4,
  //         strIngredient5,
  //       } = data.drinks[0];
  //       const ingredients = [
  //         strIngredient1,
  //         strIngredient2,
  //         strIngredient3,
  //         strIngredient4,
  //         strIngredient5,
  //       ];
  //       const newCocktail = {
  //         name,
  //         image,
  //         info,
  //         category,
  //         glass,
  //         instructions,
  //         ingredients,
  //       };
  //       setCocktails(newCocktail);
  //       setLoading(false);
  //     } else {
  //       setCocktails(null);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getCocktails();
  //   // eslint-disable-next-line
  // }, [id]);

  // if (loading) {
  //   return <Loading />;
  // }

  // if (!cocktails){
  //   return <h2>pas de cocktail correspondant</h2>
  // }
  // const { name, image, category, info, glass, instructions, ingredients } =
  //   cocktails;

  return (
    <article className="cocktail-section">
      <Link to="/" className="btn btn-primary">
        Retour accueil
      </Link>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );

  // let { once } = useParams(url.id);
  // return <div>{once}</div>
};

export default Cocktails;
