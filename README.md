# Distributed Microservices Workshop
=====================================

The idea behind this example is to demonstrate certain distributed systems concepts. It has been created as part of Katacoda training.

The application is loosely based on users purchasing events for a event. The application demonstrates the following concepts:
  * Service Discovery using Hashicorp Consul
  * Version Aware Routing
  * Retry Pattern against fragile systems
  * Rate Limiting, UPS and Circuit Breaking to limit data loss and downtime
  * Async messaging using Queues for stability and scalability
  * Web Tokens for Service Security
  * TLS and Key Rotation for Service Security
  * OpenTracing, Zipkin, Correlation IDs for logging and Prometheus for monitoring and observability

This is designed to demonstrate concepts, not a copy/paste production implementation.

## Katacoda

https://katacoda.com/courses/distributed-microservices

## Local Setup

Requires NodeJS, Docker, Java

Current Repository:

```
git clone https://github.com/katacoda/distributed-microservices-workshop.git
cd distributed-microservices-workshop
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```

Complete Demo Application:

```
git clone https://github.com/katacoda/microservices-ticketing-demo.git
cd microservices-ticketing-demo
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```

### Download Dependencies
Download the dependencies for your OS:

Windows
`git clone https://github.com/katacoda/microservices-ticketing-dependencies-windows.git`

OSX
`git clone https://github.com/katacoda/microservices-ticketing-dependencies-osx.git`

Linux
`git clone https://github.com/katacoda/microservices-ticketing-dependencies-linux.git`
