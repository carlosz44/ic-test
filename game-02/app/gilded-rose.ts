import {
  Item,
  ItemAgedBrie,
  ItemBackstagePasses,
  ItemLegendary,
  ItemConjured,
} from "./item";

export class GildedRose {
  constructor(public items: Array<Item>) {
    this.items = items.map((row) => {
      return this.loopUp(row);
    });
  }

  loopUp(
    item: Item
  ): ItemAgedBrie | ItemBackstagePasses | ItemLegendary | ItemConjured | Item {
    return (
      {
        "Aged Brie": new ItemAgedBrie(item.name, item.sellIn, item.quality),
        "Backstage passes to a TAFKAL80ETC concert": new ItemBackstagePasses(
          item.name,
          item.sellIn,
          item.quality
        ),
        "Sulfuras, Hand of Ragnaros": new ItemLegendary(
          item.name,
          item.sellIn,
          item.quality
        ),
        Conjured: new ItemConjured(item.name, item.sellIn, item.quality),
      }[item.name] || item
    );
  }

  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
  }
}
