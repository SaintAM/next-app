"use client";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngrediens";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title
        text="Фильтрация"
        size="sm"
        className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
      />
      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input placeholder="0" min={0} max={3000} defaultValue={0} />
          <Input min={100} max={3000} placeholder="3000" />
        </div>
        <RangeSlider min={0} max={3000} step={10} value={[0, 3000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds = {selectedIds}
      />
    </div>
  );
};
