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
      if (ligne[x] === "*") {
        resultat += "*";
      } else {
        let mines = 0;
        if (x > 0 && ligne[x - 1] === "*") mines++;
        if (x < longueur - 1 && ligne[x + 1] === "*") mines++;
        resultat += mines.toString();
      }
    }
    return resultat;
  }
}

/*ici si la case est une mine on réecrit, sinon on vérifie la case a gauche et a droite,
si ce sont des mines on rajoute 1 en fonction du nombre de mines*/

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