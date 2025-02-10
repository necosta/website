---
sidebar_position: 6
---

# Programming paradigms

A deep-dive into programming paradigms:
- Functional programming
- Object oriented programming
- Imperative programming
- Reactive Programming

## Functional programming

Treats computation as the evaluation of pure functions, avoiding mutable state and side effects

- Pure Functions: No side effects; same input always gives the same output
- Immutability: No variable mutations; state changes create new data structures
- Higher-Order Functions: Functions can take other functions as arguments
- Composition: Functions are combined to build complex logic

Example: **Scala**, **Haskell**, **Clojure**

## Object oriented programming

Organizes code around objects that encapsulate state (fields) and behavior (methods)

- Groups related data & behavior into objects (Encapsulation)
- Enables code reuse via class hierarchies (Inheritance)
- Objects of different types can be treated uniformly (Polymorphism)
- State encapsulated in objects, often mutable
  
Example: **Java**, **C#**, **C++**

## Imperative programming

Focuses on explicitly defining a sequence of commands that change program state

Uses mutable state and control structures (loops, conditionals)

Example: **C**, **Rust**

## Reactive programming

Programming with asynchronous data streams where changes propagate automatically

Ideal for real-time applications, event-driven systems, UI frameworks

Example: **Akka streams**, **React**

## Which One to Use?

- Use FP when working with data transformations, parallelism, or writing highly maintainable code
- Use OOP when modeling real-world entities with behavior
- Use Imperative when performance optimization or low-level control is needed
- Use Reactive when dealing with event-driven, async flows (e.g., UIs, distributed systems, real-time analytics)
