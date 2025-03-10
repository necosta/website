---
slug: tech-trends
title: Tech trends I've witnessed
authors: [necosta]
tags: []
date: 2025-02-26T00:00
---

Some of the software industry tech trends (or hypes) I've witnessed through my career.

<!-- truncate -->

---

These days AI dominates as the new trend and is definitely here to stay.
While I completely admire and praise the progress made these last years, I'm also cautious as I've seen too many times 
trends not keeping up with their promises and "the next big thing" just becoming the "hammer that makes everything look like a nail".

Here are a few trends (or let's call it disruptions 😊) I've witnessed over my career:

### Big Data

It was around 2013 that I got introduced to Big Data and, as a Data Engineer, it truly excited me.

From 5 years working on mainly SQL Server relational databases and data warehouses, it made sense to me the whole 
"map-reduce" distributed jobs, capable of processing and aggregating huge amounts of data.

The hype was definitely there, and there was the temptation of solving all present and future problems with Big Data.

The biggest problem? Most projects didn't have lots of data to process so dealing with the "CAP theorem" challenges 
of Big Data processes was simply not worth it.

From someone working from a desk very close to the server room that had thousands of VMs running map-reduce jobs on top of HDFS 
on bare metal, it was great to witness the rise of cloud computing that allowed more companies to more easily 
deploy their jobs on Big Data clusters.
Also from someone that worked with Yarn and Mesos and Spark version 1.4, it's been great to see how Big Data technologies evolved 
and how stability improved. Running these days a Spark job on Databricks abstracts you of all the complexity of distributed systems.

Was it a hype? Definitely not, it changed the industry. 
But sad to find companies applying "Big Data" processing with data that fits on a single VM and projects running 
expensive Spark ETL data pipelines that re-aggregate the exact same data every day.

### Agile

Agile arrived to me around 2012. I started having daily stand-ups (actually standing in a circle), sprint planning
and retrospectives. I've been applying Agile methodology for more than 10 years and in most projects it worked relatively well.

But the biggest problem I have with it? Often the focus becomes the process and not the project goals.

I think I share this opinion with other developers when I say:
- If no daily updates needed, no need for a daily meeting
- If we don't have clear specifications and well-defined roadmaps, no need for sprint planning
- If we can ship improvements every day, no need to wait till the end of the sprint to deploy
- If retrospectives outcomes are never actioned, no need for retrospectives
- And the list goes on...

But what's common on the above points is that often the Agile process just slows developers productivity.

I worked in Scrum, Kanban, Scrumban and even SAFe (Scaled Agile) modes. 
In my opinion, SAFe is a huge productivity killer and Kanban is the most "agile" of all the Agile frameworks.

Also, the fact that it became a "hype" (all companies like to say they do Agile) left it misused, creating sometimes 
redundant roles (if not done right) such as Agile coach and Scrum masters (nothing against these roles, just sometimes 
they can have the side effect of reducing the team focus and ownership if not done right).

In conclusion, and in my personal opinion, the focus should not be on following Agile just because it was (and remains) 
the most popular project management framework but on finding the processes which each development team feel more comfortable 
and productive.

### Microservices

I started my career as a software developer deploying monolithic applications and only around 2016 microservices got introduced
to me mainly driven by Kubernetes adoption and explosion. 

I do have a very positive opinion about microservices. Concepts like "single responsibility" and "well-defined APIs" make 
sense to me as I remember the issues I had maintaining huge code bases with a lot of dependencies.

With the years, I also learned by experience the issues of microservices architectures and there is one issue in particular 
that got under my skin. Far too often in these last years developing on microservices I ended up spending my time applying
the same code change on multiple repositories. 
Not because I had duplicate code, just because a lot of the changes and bug-fixes are traversal to many repositories.

Jumping between tens-to-hundreds of repositories is a downside of this approach as well as mapping and understanding each microservice 
"role" in the overall architecture diagram. 
With the hype being focused on "microservices wins over monoliths" lots of projects moved in this direction without need.

Although I have not mentioned all the advantages of building microservices, I do see it as a great scalable approach for software 
development where, with efficient intra and cross-team communication, can work well.

Just one final note on "microservices being the hammer that makes everything look like a nail", In 2022 I worked on a project
that used a single repository (monorepo) with SBT multi-modules that deployed services without the need of Kubernetes, and it felt the 
optimised approach for an efficient delivery of that project. 
Lesson being not all architectures need to be solved with microservices.

### Blockchain

Only around 2018 I started feeling the hype around blockchain. Companies claiming they had projects on blockchain
even when it was obvious that all their use-case did not fit a solution with blockchain.

Unlike Agile and Big Data, I feel this buzz was more short-lived. 
A big number of companies grew on top of blockchain (Crypto, Web3, DeFi, NFT's, etc.) but it wasn't mass adopted.
Not that it does not have potential (definitely does), I guess the biggest issue was/is lack of real-world use cases.

I don't have professional experience working with hyperledger/blockchain, but I did go to conferences in Lisbon about it 
and witnessed once again the fail of "promises given with caution" on the explosion of blockchain based startups in the 
period 2018-2020.

### AI

Perhaps just because it's the most recent "new big thing", the impact is felt stronger.

Just like Google search left us without having to memorize, and the calculator left us without needing to perform mental calculations,
feels that AI LLM GPTs are here to provide all answers to any question (including writing source code without the need of humans).

We see many companies looking to integrate with "new AI", even when they don't have use cases for it (some are using ML for years
and don't understand that ML is a branch of AI).

As with all other "trends", I believe we should remain down-to-earth, understand the benefits this technology brings but
also reflect on all the consequences of the usage of AI.
We definitely don't want humans interacting with AI chatbots that "go in circle" (happens to me often), and we definitely 
don't want the next generation to lose creativity and reasoning because of AI "easy quick" outputs.
But we do want AI leveraging the human on all tasks that it performs better without ever failing to respect the 3 H's: 
Honest, Harmless and Helpful.

I believe the next years we will see changes on the way software developers interact with software, becoming more productive 
and focused on quality and optimisations. 
I'm not convinced yet developers are replaceable as innovation is not something currently AI can do (it leverages massive amounts 
of written text but can't bring to life new concepts) but time will tell...
