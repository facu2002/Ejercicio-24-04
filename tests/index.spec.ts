import "mocha";
import { expect } from "chai";
import { hola } from "../src/index.js";


describe("hola", () => {
  it("should return Hola", () => {
    expect(hola()).to.equal("Hola");
  });
});