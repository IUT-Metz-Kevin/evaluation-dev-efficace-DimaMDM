import { assertEquals } from "jsr:@std/assert";

export class Demineur {
  grille: string[][];

  constructor(grille: string[][]) {
    this.grille = grille;
  }

  
  resoudre(): string {
    const ligne = this.grille[0];
    const longueur = ligne.length;
    let resultat = "";

    for (let x = 0; x < longueur; x++) {
      if (ligne[x] === ".") {
        resultat += "0";
      } 
    }
    return resultat;
  }
}

//si il y a un bug avec le commit c'est parce que j'avais déja commencer a modifier ma fonction :/

//=================== TEST ===================//

Deno.test("case vide 0", () => {
  const demineur = new Demineur([["."]]);
  assertEquals(demineur.resoudre(), "0");
});

Deno.test("ligne de 5 sans mines", () => {
  const demineur = new Demineur([[".",".",".",".","."]]);
  assertEquals(demineur.resoudre(), "00000");
});

Deno.test("ligne de 5 avec mine", () => {
  const demineur = new Demineur([[".",".","*",".","."]]);
  assertEquals(demineur.resoudre(), "01*10");
});