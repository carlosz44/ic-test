import {
  Item,
  ItemAgedBrie,
  ItemBackstagePasses,
  ItemLegendary,
  ItemConjured,
} from "./item";

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item>) {
    //TODO: Initialize and test
    this.items = items;
    // this.items = items.forEach((item) => {
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

  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
    // this.items.forEach((item) => item.update());
    // this.items.forEach((item) => {
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
}
