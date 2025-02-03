---
sidebar_position: 1
---

# Repositories

What to take in consideration when building an application

Aspects:

- [Source code](repositories#source-code)
- [Tests](repositories#tests)
- [Documentation](repositories#documentation)
- [CI/CD](repositories#cicd)
- [Observability](repositories#observability)
- [Performance](repositories#performance)
- [Cost](repositories#cost)
- [Security](repositories#security)
- [Infrastructure](repositories#infrastructure)

## Source code

* SOLID Principles: Modular, scalable and maintainable code
  * S - Single-responsibility Principle
  * O - Open-closed Principle
  * L - Liskov Substitution Principle
  * I - Interface Segregation Principle
  * D - Dependency Inversion Principle  
* DRY (Don't Repeat Yourself): Avoid duplication by abstracting reusable logic
* KISS (Keep It Simple, Stupid): Write simple, easy-to-understand code
* YAGNI (You Ain’t Gonna Need It): Avoid premature optimizations and unnecessary features

## Tests

* Unit tests
  * Property-based testing 
* Integration tests
* Load tests
* E2E tests
* Performance tests (JMH)
* Golden tests

## Documentation

* README - Always have a "How to" section
* Always document API (swagger)

## CI/CD

* Pipeline configuration to build, test, deploy

## Observability

* Logging - Recording events, messages, or errors, critical for debugging, monitoring, and auditing
* Tracing - Tracking the flow of requests through distributed systems
* Profiling – Capturing CPU/memory usage patterns in real time
* Metrics - Quantifiable data points about system health and performance
* Alerting – Setting up notifications for anomalies or predefined thresholds
* Visualization & Dashboards – Aggregating and presenting observability data

## Performance

* Ensure low latency APIs
* Apply efficient serialization (Protobuf over JSON)
* Apply compression on payloads
* Apply indexing, use batch queries when possible
* Introduce caching
* Implement health checks
* Benchmark JVM using JMH (Java Micro-benchmarking Harness)
* Use the right collections
* Choose the right GC
* Minimise cold starts, configure auto-scaling
* Use minimal base images

## Cost

* Running costs 

## Security

* Authentication and Authorization
* Sanitise input (protect against SQL injection)
* Rate limit 
* Apply Least Privilege principle
* Ensure GDPR & Privacy Laws

## Infrastructure

* IaC
* Scalability
* Zero-downtime deployment
* Components - Databases, cache, ...
