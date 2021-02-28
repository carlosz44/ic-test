import {
  Item,
  ItemAgedBrie,
  ItemBackstagePasses,
  ItemLegendary,
  ItemConjured,
} from "./item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    //TODO: Initialize and test
    this.items = items;
    // this.items = items.map((item) => {
    //   switch (item.name) {
    //     case "Aged Brie": {
    //       return new ItemAgedBrie(item.sellIn, item.quality);
    //     }
    //     case "Backstage passes to a TAFKAL80ETC concert": {
    //       return new ItemBackstagePasses(item.sellIn, item.quality);
    //     }
    //     case "Sulfuras, Hand of Ragnaros": {
    //       return new ItemLegendary().update();
    //     }
    //     case "Conjured": {
    //       return new ItemConjured(item.sellIn, item.quality);
    //     }
    //     default:
    //       return new Item(item.name, item.sellIn, item.quality);
    //   }
    // });
  }

  updateQuality(): Array<Item> {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Aged Brie": {
          return new ItemAgedBrie(item.sellIn, item.quality).update();
        }
        case "Backstage passes to a TAFKAL80ETC concert": {
          return new ItemBackstagePasses(item.sellIn, item.quality).update();
        }
        case "Sulfuras, Hand of Ragnaros": {
          return new ItemLegendary().update();
        }
        case "Conjured": {
          return new ItemConjured(item.sellIn, item.quality).update();
        }
        default:
          return new Item(item.name, item.sellIn, item.quality).update();
      }
    });
    return this.items;
  }
}
