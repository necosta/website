---
sidebar_position: 5
---

# Scala Cats

A guide on Scala Cats and Scala Cats Effect library main features

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

- `Semigroup`: Adds `.combine` so we can associate
- `Monoid`: Adds `.empty` as identity
- `Functor`: Adds `.map` for transformations
- `Applicative`: Adds `.pure` to lift values into context
- `Monad`: Adds `.flatMap` to chain computations
- `Foldable`: Adds `.fold` 
- `Traverse`: Adds `.traverse`
- `Async`: Adds ability to perform asynchronous computations
- `Sync`: Adds ability to perform synchronous computations
  - Options: `IO.pure`, `IO.delay`, `IO.blocking`

- `Show`: Adds a type safe `.toString`
- `Eq`: Adds a type safe equality operation
- `Clock`: Adds a type safe clock

- `IO monad`: A monad that ensures lazy computation that produces a result (success or error) and may produce side effects
- `Resource`: Abstraction that ensures proper acquisition and release of resources

Other:
- `Spawn`: Allows the creation of new `Fibers` and their management (race conditions)
- `Concurrent`: Brings `Ref` (for state) and `Deferred` (for promises - waiting for a value that will be provided later)
  - `IO.defer`: Defers evaluation until execution time
  - `IO.evalOn`: Runs a computation on a specific execution context
  - `.background`: Runs a computation in the background, without blocking the main execution
- `Temporal`: Brings time-related capabilities, such as delay (`sleep`) and timeouts
- `Dispatcher`: Allows the bridge between "pure" and "impure" code (normally Java library)
- `Supervisor`: Management of child fibers
- `Semaphore`: Limits access to shared resources

## On error handling

- `handleErrorWith`: Similar to Java "try-catch"
- `attempt`: Returns an either for the success/insuccess of the operation
- `onError`: Useful for logging, does not stop the operation from throwing error
- `orElse`: Provides a fallback alternative in case a condition is not met

## On data types

- `NonEmptyList`, `NonEmptyChain` - Ensures at compile time collection is not empty
- `Validated` - Accumulates errors (unlike `Either` which short-circuits)
- `Kleisli` - (A => F[B]), useful to chain pipelines

## Tagless final

Tagless Final is a design pattern used in FP to write polymorphic code that abstracts over different effect types 
(IO, Future, Either, etc.).
Instead of committing to a specific monad like IO, we use a type class constraint (F[_]: SomeTypeClass) 
to keep the code flexible.

### Why Use Tagless Final?

- Abstraction – Allows us to write generic code that works with different effect types
- Testability – We can substitute IO with Either or Option for testing
- Separation of Concerns – Business logic is independent of the effect system
- Flexibility – Supports multiple interpreters (e.g., sync, async, mock implementations)

## Standard tech stack

- Logging (log4cats)
- Tracing (natchez)
- HTTP/API (http4s)
- DB (doobie, skunk, slick)
- Codecs (circe)
- Streaming (fs2)
- Config (pureconfig or ciris)
- Tests (scalacheck)
- API definition (tapir)
- Contract definition (smithy4s)
- AWS lambda event processing (feral)
