const maxQuality: number = 50;
const minQuality: number = 0;
const legendaryQuality: number = 80;

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  update(): void {
    this.quality =
      this.sellIn < 1
        ? Math.max(minQuality, this.quality - 2)
        : Math.max(minQuality, this.quality - 1);
    this.sellIn -= 1;
  }
}
export class ItemAgedBrie extends Item {
  constructor(sellIn: number, quality: number) {
    super("Aged Brie", sellIn, quality);
  }
  update(): void {
    this.quality =
      this.sellIn < 0
        ? Math.min(maxQuality, this.quality + 2)
        : Math.min(maxQuality, this.quality + 1);
    this.sellIn -= 1;
  }
}
export class ItemBackstagePasses extends Item {
  constructor(sellIn: number, quality: number) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }
  update(): void {
    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality = Math.min(maxQuality, this.quality + 3);
    } else if (this.sellIn <= 10) {
      this.quality = Math.min(maxQuality, this.quality + 2);
    } else {
      this.quality = Math.min(maxQuality, this.quality + 1);
    }
    this.sellIn -= 1;
  }
}
export class ItemLegendary extends Item {
  constructor() {
    super("Sulfuras, Hand of Ragnaros", 0, legendaryQuality);
  }
  update(): void {
    this.quality != legendaryQuality
      ? (this.quality = legendaryQuality)
      : this.quality;
  }
}
export class ItemConjured extends Item {
  constructor(sellIn: number, quality: number) {
    super("Conjured", sellIn, quality);
  }
  update(): void {
    this.quality =
      this.sellIn < 1
        ? Math.max(minQuality, this.quality - 4)
        : Math.max(minQuality, this.quality - 2);
    this.sellIn -= 1;
  }
}
