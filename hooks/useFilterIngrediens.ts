import React from "react";
import { useSet } from "react-use";
import { Ingredient } from "@prisma/client";
import { Api } from "@/services/api-client";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  // список самих ингридиентов с бд
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  // если загрузка - то отображаем скелетоны
  const [loading, setLoading] = React.useState(true);
  // храним выбранные ингридиенты (их id)
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredientsItem = await Api.ingredients.getAll();
        setIngredients(ingredientsItem);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);
  return { ingredients, loading, onAddId: toggle, selectedIds };
};
