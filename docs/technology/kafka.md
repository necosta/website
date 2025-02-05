---
sidebar_position: 4
---

# Kafka

### Core components

- Producer
  - Producer sends a message to a topic
  - Kafka writes the message to a partition
- Broker
  - Partitions allow parallel processing by different consumers
  - Broker replicates data based on the replication factor
  - Messages persist based on retention settings (time-based or size-based)
- Consumer (& Consumer Groups)
  - Each partition is assigned to only one consumer in the group 
  - Consumers keep track of their position in a partition using offsets
- Zookeeper
  - Deals with leader election, topic configurations, and ACLs
- Kafka Streams & Connect
  - Kafka Streams: Stream processing library for real-time data transformation
  - Kafka Connect: Integrates Kafka with external systems (databases, cloud storage, etc.)

### Tips & Tricks

- Configure producer message ack's (durability vs performance)
- Enable compression (Reduces Network & Storage Costs) (increases latency)
- Batch producer messages (linger or batch size) (increases latency)
- Configure retries and backoff strategies
- Enable encryption (SSL) and ACL's
- Monitor Kafka metrics (JMX)
- Monitor consumer lag/offset

### Other
- Three levels of delivery guarantees:
  - At-most-once: Messages may be lost but are never duplicated.
  - At-least-once: Messages are never lost, but duplicates may occur.
  - Exactly-once: No duplicates and no loss (hardest to achieve).
- Re-balancing
  - When consumers are added or deleted
  - When brokers are added or deleted (repartitioning manually done via reassign partitions)
