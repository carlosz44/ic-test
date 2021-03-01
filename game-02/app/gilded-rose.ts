import {
  updateItem,
  updateItemAgedBrie,
  updateItemBackstagePasses,
  updateItemSulfuras,
  updateItemConjured,
} from "./updateItem";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Aged Brie": {
          item = updateItemAgedBrie(item);
          break;
        }
        case "Backstage passes to a TAFKAL80ETC concert": {
          item = updateItemBackstagePasses(item);
          break;
        }
        case "Sulfuras, Hand of Ragnaros": {
          item = updateItemSulfuras(item);
          break;
        }
        case "Conjured": {
          item = updateItemConjured(item);
          break;
        }
        default:
          item = updateItem(item);
      }
    });
    return this.items;
  }
}
