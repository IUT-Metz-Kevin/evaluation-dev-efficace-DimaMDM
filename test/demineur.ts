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
    return resultat
  }
}

/*avec ma méthode initial ça aurais rendu le code incroyablement lourd,
je vais passer en brut force et verifier chacun des case voisin pour la suite.
pour le moment en 1D car TDD...*/

//=================== TEST ===================//

Deno.test("case vide 0", () => {
  const demineur = new Demineur([["."]]);
  assertEquals(demineur.resoudre(), "0");
});

Deno.test("ligne de 5 sans mines", () => {
  const demineur = new Demineur([[".",".",".",".","."]]);
  assertEquals(demineur.resoudre(), "00000");
});
