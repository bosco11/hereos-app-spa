import { heroes } from "../data/heroes";
import React from "react"

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
