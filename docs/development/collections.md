---
sidebar_position: 2
---

# Collections

## Scala Collections

Deep dive on the different collections available in Scala:

| Collection   | Description                                             | Similar                   |
|--------------|---------------------------------------------------------|:--------------------------|
| ArrayBuffer  | Mutable collections                                     | StringBuilder             |
| Seq          | Ordered collection of elements                          |                           |
| List         | Linked list, faster inserts, slower random access       | NonEmptyList, LazyList    |
| Vector       | Indexed sequence, faster random access                  |                           |
| Map          | Key value pairs, for fast lookups                       | HashMap, TreeMap          |
| Queue        | Used when FIFO                                          | ArrayDeque, PriorityQueue |
| Set          | Unordered collection of unique elements                 | HashSet, TreeSet          |
| Chain        | Optimized for adding elements at both the head and tail | NonEmptyChain             |

### From Scala docs

[Collections](https://docs.scala-lang.org/scala3/book/collections-classes.html)

#### Immutable collections:

![Immutable Collections diagram](https://docs.scala-lang.org/resources/images/tour/collections-immutable-diagram-213.svg)

#### Mutable collections:

![Mutable Collections diagram](https://docs.scala-lang.org/resources/images/tour/collections-mutable-diagram-213.svg)

## Java Collections

TBD