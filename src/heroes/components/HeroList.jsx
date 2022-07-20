import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCart } from "./HeroCart";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCart key={hero.id} {...hero} />
      ))}
    </div>
  );
};
