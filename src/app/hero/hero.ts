/**
 * Created by Somiar on 2017/5/8.
 */

export class Hero {
  id: number;
  name: string;
  //tid: string;
}

export class HeroTaxReturn {
  constructor(
    public hero: Hero,
    public income = 0
  ){}

  get taxValue() {return this.income*.1}

  clone() {
    return new HeroTaxReturn(this.hero, this.income);
  }
}