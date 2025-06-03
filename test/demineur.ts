import { assertEquals } from "jsr:@std/assert";

export class Demineur {
  grille: string[][];

  constructor(grille: string[][]) {
    this.grille = grille;
  }

  test(x:number,y:number): number{
    let mines = 0;
    for (let dx = -1; dx <=1;dx++){
      for (let dy = -1; dy <=1;dy++){
        if (dx === 0 && dy === 0)continue
        const nx = x + dx;
        const ny = y + dy;
        if(
          nx >= 0 && nx < this.grille.length-1 && ny >= 0 && ny < this.grille[0].length && this.grille[nx][ny] === "*") mines++;
      }
    }
    return mines
  }

  resoudre(): string {
    const longueur = this.grille[0].length;
    let resultat = "";

    for (let y = 0; y < this.grille.length; y++){
      for (let x = 0; x < longueur; x++) {
        if (this.grille[x][y] === "*") {
          resultat += "*";
        } else {
          resultat += this.test(x,y).toString();
        }
      }
      resultat += "\n";
    }
    return resultat.slice(0,-1);
  }
}

//=================== DEMINAGE MANUEL ===================//

const demineur = new Demineur([
    [".",".",".",".","."],
    [".","*","*","*","."],
    [".","*",".","*","."],
    [".","*","*","*","."],
    [".",".",".",".","."]
  ]);
console.log(demineur.resoudre())

/*pour remplacer les if else des enfer j'ai fait une fonction pour compter les mines
j'avais oublier que compter -1 dans un tableau faisais tout planter :/ 
je vous laisse en bonus de quoi expérimenter dans la console a quoi ressemble le démineur*/

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

Deno.test("grille de 5x5 avec mines", () => {
  const demineur = new Demineur([
    [".",".",".",".","."],
    [".","*","*","*","."],
    [".","*",".","*","."],
    [".","*","*","*","."],
    [".",".",".",".","."]
  ]);
  assertEquals(demineur.resoudre(), "12321\n2***2\n3*8*3\n2***2\n12321");
});