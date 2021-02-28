import { Item } from "./gilded-rose";

const maxQuality: number = 50;
const minQuality: number = 0;
const legendaryQuality: number = 80;

export const updateItem = (item: Item) => {
  item.quality =
    item.sellIn < 1
      ? Math.max(0, item.quality - 2)
      : Math.max(0, item.quality - 1);
  item.sellIn -= 1;

  return item;
};
export const updateItemAgedBrie = (item: Item) => {
  item.quality =
    item.sellIn < 0
      ? Math.min(maxQuality, item.quality + 2)
      : Math.min(maxQuality, item.quality + 1);
  item.sellIn -= 1;

  return item;
};
export const updateItemBackstagePasses = (item: Item) => {
  if (item.sellIn < 0) {
    item.quality = 0;
  } else if (item.sellIn <= 5) {
    item.quality = Math.min(maxQuality, item.quality + 3);
  } else if (item.sellIn <= 10) {
    item.quality = Math.min(maxQuality, item.quality + 2);
  } else {
    item.quality = Math.min(maxQuality, item.quality + 1);
  }
  item.sellIn -= 1;

  return item;
};
export const updateItemSulfuras = (item: Item) => {
  item.quality != legendaryQuality
    ? (item.quality = legendaryQuality)
    : item.quality;

  return item;
};
export const updateItemConjured = (item: Item) => {
  item.quality =
    item.sellIn < 1
      ? Math.max(minQuality, item.quality - 4)
      : Math.max(minQuality, item.quality - 2);
  item.sellIn -= 1;

  return item;
};
