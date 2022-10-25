import React from "react";
import Cocktails from "./Cocktails";
import Loading from "../components/Loading";
import { useGlobalContext } from "./context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">Pas de cocktail trouvé</h2>;
  }

  return (
    <section className="section">
      <h2 className="sectionTitle">Liste des cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          console.log(item);
          return <Cocktails key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};



export default CocktailList;
