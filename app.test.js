import {jest} from "@jest/globals"

jest.mock("./app")
import {app} from "./app"


test("Test", () => {
  expect('_isMockFunction' in app && app._isMockFunction).toBe(true)
})
