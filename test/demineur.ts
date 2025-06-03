import { assertEquals } from "jsr:@std/assert";

export class Demineur {
  grille: string[][];

  constructor(grille: string[][]) {
    this.grille = grille;
  }

  resoudre(): string {
    if (this.grille.length === 1 && this.grille[0].length === 1 && this.grille[0][0] === ".") {
      return "0";
    }
    return "";
  }
}

Deno.test("case vide 0", () => {
  const demineur = new Demineur([["."]]);
  assertEquals(demineur.resoudre(), "0");
});
