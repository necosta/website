"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6423],{461:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"development/repositories","title":"Repositories","description":"What to take in consideration when building an application","source":"@site/docs/development/repositories.md","sourceDirName":"development","slug":"/development/repositories","permalink":"/website/docs/development/repositories","draft":false,"unlisted":false,"editUrl":"https://github.com/necosta/website/tree/main/docs/development/repositories.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Development","permalink":"/website/docs/category/development"},"next":{"title":"Collections","permalink":"/website/docs/development/collections"}}');var r=n(4848),t=n(8453);const l={sidebar_position:1},o="Repositories",c={},d=[{value:"Source code",id:"source-code",level:2},{value:"Tests",id:"tests",level:2},{value:"Documentation",id:"documentation",level:2},{value:"CI/CD",id:"cicd",level:2},{value:"Observability",id:"observability",level:2},{value:"Performance",id:"performance",level:2},{value:"Cost",id:"cost",level:2},{value:"Security",id:"security",level:2},{value:"Infrastructure",id:"infrastructure",level:2}];function a(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"repositories",children:"Repositories"})}),"\n",(0,r.jsx)(i.p,{children:"What to take in consideration when building an application"}),"\n",(0,r.jsx)(i.p,{children:"Aspects:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#source-code",children:"Source code"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#tests",children:"Tests"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#documentation",children:"Documentation"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#cicd",children:"CI/CD"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#observability",children:"Observability"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#performance",children:"Performance"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#cost",children:"Cost"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#security",children:"Security"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"repositories#infrastructure",children:"Infrastructure"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"source-code",children:"Source code"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["SOLID Principles: Modular, scalable and maintainable code","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"S - Single-responsibility Principle - A class should have only one reason to change"}),"\n",(0,r.jsx)(i.li,{children:"O - Open-closed Principle - Entities should be open for extension but closed for modification"}),"\n",(0,r.jsx)(i.li,{children:"L - Liskov Substitution Principle - Subtypes must be substitutable for their base types"}),"\n",(0,r.jsx)(i.li,{children:"I - Interface Segregation Principle - A class should not be forced to implement interfaces it does not use"}),"\n",(0,r.jsx)(i.li,{children:"D - Dependency Inversion Principle - High-level modules should not depend on low-level modules. Both should depend on abstractions"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"DRY (Don't Repeat Yourself): Avoid duplication by abstracting reusable logic"}),"\n",(0,r.jsx)(i.li,{children:"KISS (Keep It Simple, Stupid): Write simple, easy-to-understand code"}),"\n",(0,r.jsx)(i.li,{children:"YAGNI (You Ain\u2019t Gonna Need It): Avoid premature optimizations and unnecessary features"}),"\n",(0,r.jsx)(i.li,{children:"APO (Avoid Premature Optimisations): First, make it work. Then, make it right. Then, make it fast"}),"\n",(0,r.jsx)(i.li,{children:"KFS (Keep Functions Small): Each function should do one thing and do it well"}),"\n",(0,r.jsx)(i.li,{children:"FF (Fail Fast): Detect and handle errors as early as possible"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"tests",children:"Tests"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Unit tests","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Property-based testing"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Integration tests"}),"\n",(0,r.jsx)(i.li,{children:"Load tests"}),"\n",(0,r.jsx)(i.li,{children:"Smoke tests"}),"\n",(0,r.jsx)(i.li,{children:"E2E tests"}),"\n",(0,r.jsx)(i.li,{children:"Performance tests (JMH)"}),"\n",(0,r.jsx)(i.li,{children:"Golden/Regression tests"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Other:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Penetration Tests"}),"\n",(0,r.jsx)(i.li,{children:"A/B Tests"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"documentation",children:"Documentation"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:'README - Always have a "How to" section'}),"\n",(0,r.jsx)(i.li,{children:"Always document API (swagger)"}),"\n",(0,r.jsx)(i.li,{children:"Have a runbook available"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"cicd",children:"CI/CD"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Pipeline configuration to build, test and deploy"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"observability",children:"Observability"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Logging - Recording events, messages, or errors, critical for debugging, monitoring, and auditing"}),"\n",(0,r.jsx)(i.li,{children:"Tracing - Tracking the flow of requests through distributed systems"}),"\n",(0,r.jsx)(i.li,{children:"Profiling \u2013 Capturing CPU/memory usage patterns in real time"}),"\n",(0,r.jsx)(i.li,{children:"Metrics - Quantifiable data points about system health and performance"}),"\n",(0,r.jsx)(i.li,{children:"Alerting \u2013 Setting up notifications for anomalies or predefined thresholds"}),"\n",(0,r.jsx)(i.li,{children:"Visualization & Dashboards \u2013 Aggregating and presenting observability data"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Ensure low latency APIs"}),"\n",(0,r.jsx)(i.li,{children:"Apply efficient serialization (Protobuf over JSON)"}),"\n",(0,r.jsx)(i.li,{children:"Apply compression on payloads"}),"\n",(0,r.jsx)(i.li,{children:"Apply indexing, use batch queries when possible"}),"\n",(0,r.jsx)(i.li,{children:"Introduce caching"}),"\n",(0,r.jsx)(i.li,{children:"Implement health checks"}),"\n",(0,r.jsx)(i.li,{children:"Benchmark JVM using JMH (Java Micro-benchmarking Harness)"}),"\n",(0,r.jsx)(i.li,{children:"Use the right collections"}),"\n",(0,r.jsx)(i.li,{children:"Choose the right GC"}),"\n",(0,r.jsx)(i.li,{children:"Minimise cold starts, configure auto-scaling"}),"\n",(0,r.jsx)(i.li,{children:"Use minimal base images"}),"\n",(0,r.jsx)(i.li,{children:"Attention to memory management, concurrency and parallelization"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"cost",children:"Cost"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Cloud running costs"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"security",children:"Security"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Authentication and Authorization"}),"\n",(0,r.jsx)(i.li,{children:"Sanitise input (protect against SQL injection)"}),"\n",(0,r.jsx)(i.li,{children:"Rate limit"}),"\n",(0,r.jsx)(i.li,{children:"Apply Least Privilege principle"}),"\n",(0,r.jsx)(i.li,{children:"Ensure GDPR & Privacy Laws"}),"\n",(0,r.jsx)(i.li,{children:"Data encryption"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"IaC"}),"\n",(0,r.jsx)(i.li,{children:"Scalability"}),"\n",(0,r.jsx)(i.li,{children:"Zero-downtime deployment"}),"\n",(0,r.jsx)(i.li,{children:"Components - Databases, cache, ..."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var s=n(6540);const r={},t=s.createContext(r);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);