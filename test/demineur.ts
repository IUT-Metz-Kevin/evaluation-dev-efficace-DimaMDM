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

    for (let y = 0; y < this.grille.length; y++){
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
      resultat += "\n";
    }
    return resultat.slice(0,-1);
  }
}

/*pour le moment je garde la vérification des mines sur la ligne 
mais je me contente juste de d'afficher en 2D*/

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

Deno.test("ligne de 5 avec 2 mines", () => {
  const demineur = new Demineur([[".","*",".","*","."]]);
  assertEquals(demineur.resoudre(), "1*2*1");
});

Deno.test("grille de 5x5 sans mines", () => {
  const demineur = new Demineur([
    [".",".",".",".","."],
    [".",".",".",".","."],
    [".",".",".",".","."],
    [".",".",".",".","."],
    [".",".",".",".","."]
  ]);
  assertEquals(demineur.resoudre(), "00000\n00000\n00000\n00000\n00000");
});