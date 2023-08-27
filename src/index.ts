import { Effect, Console } from "effect"


const divide = (a: number, b: number): Effect.Effect<never,Error, number> => {
  if (b === 0) {
    return Effect.fail(new Error("Cannot divide by zero"))
  }
  return Effect.succeed(a / b)

}
