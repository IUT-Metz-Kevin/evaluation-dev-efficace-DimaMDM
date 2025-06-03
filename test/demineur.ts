import { assertEquals } from "jsr:@std/assert";

Deno.test("case vide 0", () => {
  const demineur = new Demineur([["."]]);
  assertEquals(demineur.resoudre(), "0");
});
