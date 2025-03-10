---
sidebar_position: 2
---

# Collections

Deep dive on the different collections available in Scala and Java

## Scala Collections

| Collection  | Description                                             | Similar                   |
|-------------|---------------------------------------------------------|:--------------------------|
| ArrayBuffer | Mutable collections                                     | StringBuilder             |
| Seq         | Ordered collection of elements                          |                           |
| List        | Linked list, faster inserts, slower random access       | NonEmptyList, LazyList    |
| Vector      | Indexed sequence, faster random access                  |                           |
| Map         | Key value pairs, for fast lookups                       | HashMap, TreeMap          |
| ListMap     | Sorted map                                              |                           |
| Queue       | Used when FIFO                                          | ArrayDeque, PriorityQueue |
| Set         | Unordered collection of unique elements                 | HashSet, TreeSet          |
| Chain       | Optimized for adding elements at both the head and tail | NonEmptyChain             |

### From Scala docs

[Collections](https://docs.scala-lang.org/scala3/book/collections-classes.html)

#### Immutable collections:

![Immutable Collections diagram](https://docs.scala-lang.org/resources/images/tour/collections-immutable-diagram-213.svg)

#### Mutable collections:

![Mutable Collections diagram](https://docs.scala-lang.org/resources/images/tour/collections-mutable-diagram-213.svg)

## Java Collections

| Collection | Description                                                       | Similar         |
|------------|-------------------------------------------------------------------|:----------------|
| ArrayList  | Mutable - Best for random access and read operations              | Scala Vector    |
| LinkedList | Best for frequent insertions and deletions                        | Scala List      |
| HashSet    | No duplicates and no order of elements                            | Scala Set       |
| TreeSet    | Sorted  - Best for sorted unique elements and range-based queries | Scala SortedSet |
| HashMap    | stores key-value pairs and does not guarantee any specific order  | Scala Map       |
| TreeMap    | Stores keys in sorted order                                       | Scala SortedMap |
