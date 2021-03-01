const maxQuality: number = 50;
const minQuality: number = 0;
const legendaryQuality: number = 80;

export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}

  update(): void {
    this.quality =
      this.sellIn < 1
        ? Math.max(minQuality, this.quality - 2)
        : Math.max(minQuality, this.quality - 1);
    this.sellIn -= 1;
  }
}
export class ItemAgedBrie extends Item {
  update(): void {
    this.quality =
      this.sellIn < 0
        ? Math.min(maxQuality, this.quality + 2)
        : Math.min(maxQuality, this.quality + 1);
    this.sellIn -= 1;
  }
}
export class ItemBackstagePasses extends Item {
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
  update(): void {
    this.quality != legendaryQuality
      ? (this.quality = legendaryQuality)
      : this.quality;
  }
}
export class ItemConjured extends Item {
  update(): void {
    this.quality =
      this.sellIn < 1
        ? Math.max(minQuality, this.quality - 4)
        : Math.max(minQuality, this.quality - 2);
    this.sellIn -= 1;
  }
}
