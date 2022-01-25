import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { factorializeRecursive } from "./factorialize-recursive.ts"
import { factorialize } from "./factorialize.ts"


Deno.test("should factorialize any number", async () => {

    assertEquals(factorializeRecursive(4), 24)
    assertEquals(factorialize(3), 6)

})

