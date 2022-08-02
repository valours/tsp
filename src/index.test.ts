import { assertEquals } from "https://deno.land/std@0.120.0/testing/asserts.ts";
import { describe } from "./dev_deps.ts";
import { hello } from "./index.ts";

describe("welcome", () => {
  // given & when
  const result = hello();

  // then
  assertEquals(result, "hello");
});
