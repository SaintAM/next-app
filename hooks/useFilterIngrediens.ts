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
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);
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
