import { assertEquals } from "jsr:@std/assert";

export class Demineur {
  grille: string[][];

  constructor(grille: string[][]) {
    this.grille = grille;
  }

  
  resoudre(): string {
    const longueur = this.grille[0].length;
    let resultat = "";

    for (let y = 0; y < this.grille.length; y++){
      for (let x = 0; x < longueur; x++) {
        if (this.grille[x][y] === "*") {
          resultat += "*";
        } else {
          let mines = 0;
          console.log(x)
          console.log(y)
          console.log();

          if(x===0){
            if(y===0){
              if (this.grille[x+1][y]==="*") mines++;
              if (this.grille[x][y+1]==="*") mines++;
              if (this.grille[x+1][y+1]==="*") mines++;
            }else if (y===this.grille.length-1){
              if (this.grille[x+1][y]==="*") mines++;
              if (this.grille[x][y-1]==="*") mines++;
              if (this.grille[x+1][y-1]==="*") mines++;
            }else{
              if (this.grille[x+1][y]==="*") mines++;
              if (this.grille[x][y+1]==="*") mines++;
              if (this.grille[x+1][y+1]==="*") mines++;
              if (this.grille[x][y-1]==="*") mines++;
              if (this.grille[x+1][y-1]==="*") mines++;
            }
          }else if(x===longueur-1){
            if(y===0){
              if (this.grille[x-1][y]==="*") mines++;
              if (this.grille[x-1][y+1]==="*") mines++;
              if (this.grille[x][y+1]==="*") mines++;
            }else if (y===this.grille.length-1){
              if (this.grille[x-1][y]==="*") mines++;
              if (this.grille[x-1][y-1]==="*") mines++;
              if (this.grille[x][y-1]==="*") mines++;
            }else{  
              if (this.grille[x-1][y]==="*") mines++;   
              if (this.grille[x-1][y+1]==="*") mines++;
              if (this.grille[x][y+1]==="*") mines++;
              if (this.grille[x-1][y-1]==="*") mines++;
              if (this.grille[x][y-1]==="*") mines++;
            }
          }else if(y===0){  
            if (this.grille[x-1][y]==="*") mines++;
            if (this.grille[x+1][y]==="*") mines++; 
            if (this.grille[x-1][y+1]==="*") mines++;
            if (this.grille[x][y+1]==="*") mines++;
            if (this.grille[x+1][y+1]==="*") mines++;
          }else if (y===this.grille.length){
            if (this.grille[x-1][y]==="*") mines++;
            if (this.grille[x+1][y]==="*") mines++;
            if (this.grille[x-1][y-1]==="*") mines++;
            if (this.grille[x][y-1]==="*") mines++;
            if (this.grille[x+1][y-1]==="*") mines++;
          }else{
            if (this.grille[x-1][y]==="*") mines++;
            if (this.grille[x+1][y]==="*") mines++;
            if (this.grille[x-1][y+1]==="*") mines++;
            if (this.grille[x][y+1]==="*") mines++;
            if (this.grille[x+1][y+1]==="*") mines++;
            if (this.grille[x-1][y-1]==="*") mines++;
            if (this.grille[x][y-1]==="*") mines++;
            if (this.grille[x+1][y-1]==="*") mines++;
          }
          resultat += mines.toString();
        }
      }
      resultat += "\n";
    }
    return resultat.slice(0,-1);
  }
}

const demineur = new Demineur([
    [".",".",".",".","."],
    [".","*","*","*","."],
    [".","*",".","*","."],
    [".","*","*","*","."],
    [".",".",".",".","."]
  ]);
console.log(demineur.resoudre())

/*All In, on rentre dans le dur, reste plus qu'a ajouter la verification des mines
j'y suis aller comme un barbare, mais ça fonctionne, je vais voir si je peut optimiser tout ça*/

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