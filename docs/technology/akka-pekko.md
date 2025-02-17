---
sidebar_position: 6
---

# Pekko 

Apache Pekko (previously Akka) uses the Actor Model which is a concurrency paradigm designed for scalable 
and fault-tolerant applications.

An Actor is a lightweight, independent unit of computation that:
- Processes messages asynchronously
- Maintains internal state, which is not directly accessible
- Can create new actors (actor hierarchy)
- Can communicate with other actors using message-passing
- Can handle failures using a supervision strategy

## Characteristics

1. Concurrency and Scalability
- Lightweight Threads: Millions of actors can exist in an application because they run on top of a thread pool (`system.dispatcher`) 
- Message-Driven: Uses non-blocking message-passing for high-throughput systems.
- Distributed by Default: Can run on multiple machines without significant changes.
2. Fault Tolerance (Supervision Model)
- Actors follow a "let it crash" philosophy.
- Parent actors supervise children and can decide to restart, resume, or stop them if they fail.
- This makes applications resilient to failures.
3. Location Transparency and Remote Actors
- You can send messages to actors running on different nodes (machines) as if they were local.
- This enables distributed computing and microservices architectures.
4. Streaming and Event-Driven Processing
- Pekko Streams (like Akka Streams) provides reactive stream processing, handling backpressure automatically.
- Works well with event-driven architectures.
5. Persistence and State Management
- Pekko Persistence allows actors to retain their state across restarts using event sourcing.
- Useful for applications that require fault tolerance and historical state tracking.
6. Cluster and Sharding
- Pekko Cluster enables scaling across multiple nodes dynamically.
- Cluster Sharding helps distribute actors across a cluster based on entity IDs.
7. HTTP and Integration
- Pekko HTTP (like Akka HTTP) allows you to build RESTful and WebSocket APIs.
- Integrates with Kafka, gRPC, and other distributed systems.

## Streams

Reactive, asynchronous, and backpressure-aware stream processing library.

- Sources - Producers of data
- Sinks - Consumers of data
- Flows - Transformations