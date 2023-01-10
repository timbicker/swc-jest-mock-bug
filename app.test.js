import {jest} from "@jest/globals"

jest.mock("./app", () => ({
  app: jest.fn(() => "Bye")
}))
import {app} from "./app"


test("Test", () => {
  expect(app()).toBe("Bye")
})
