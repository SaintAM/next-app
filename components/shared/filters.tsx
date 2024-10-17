import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
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
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моцарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Соленый огурчик",
            value: "4",
          },
          {
            text: "Питтца",
            value: "5",
          },
          {
            text: "хлебушек",
            value: "6",
          },
          {
            text: "Ваниль",
            value: "7",
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моцарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Соленый огурчик",
            value: "4",
          },
          {
            text: "Питтца",
            value: "5",
          },
          {
            text: "хлебушек",
            value: "6",
          },
          {
            text: "Ваниль",
            value: "7",
          },
        ]}
      />
    </div>
  );
};
