---
sidebar_position: 8
---

# Scala Cats

A guide on Scala Cats main features

## Why use Cats?

- Applies **Pure Functional Programming** principles
  - Promotes immutability, referential transparency, and side-effect-free programming
  - Easier to reason about and test
  - Promotes **composable** and reusable components (functions, classes, etc.)
- Ensures **Type Safety**
  - Provides strong guarantees at compile time, reducing the likelihood of runtime errors
  - Define and enforce business rules and constraints through types
- **Concurrency and Parallelism** features
  - **Asynchronous** (Non-blocking operations) by default, designed for composable concurrency
  - Includes methods that enable and abstract parallel executions 
- Includes **Higher-Order Abstractions**
  - Higher-order abstractions which help to compose and manipulate data structures in a clean and reusable way. 
  - These abstractions allow you to work with values in a more generalized manner.
- Extensive **Error Handling** features
  - Robust abstractions for error handling, avoiding resorting to exceptions

## Deep dive

### On main type classes

- Spawn: Allows the creation of new fibers and their management (race conditions)
- Concurrent: Brings `Ref` (for state) and `Deferred` (for promises - waiting for a value that will be provided later)
- Temporal: Brings time-related capabilities, such as delay (`sleep`) and timeouts
- Dispatcher: Allows the bridge between "pure" and "impure" code (normally Java library)


## On error handling

- `handleErrorWith`: Similar to Java "try-catch"
- `attempt`: Returns an either for the success/insuccess of the operation
- `onError`: Useful for logging, does not stop the operation from throwing error
- `orElse`: Provides a fallback alternative in case a condition is not met

## On data types

- `NonEmptyList`, `NonEmptyChain` - Ensures at compile time collection is not empty
- `Validated` - Accumulates errors (unlike `Either` which short-circuits)
- ``