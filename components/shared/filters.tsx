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
interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 2000,
  });

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  return (
    <div className={className}>
      <Title
        text="Фильтрация"
        size="sm"
        className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
      />
      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="qwe" text="Можно собирать" value="1" />
        <FilterCheckbox name="rty" text="Новинки" value="2" />
      </div>
      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={2000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={2000}
            placeholder="2000"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={2000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
        name="ingredients"
      />
    </div>
  );
};
