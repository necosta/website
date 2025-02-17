"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2449],{4951:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"technology/scala-cats","title":"Scala Cats","description":"A guide on Scala Cats and Scala Cats Effect library main features","source":"@site/docs/technology/scala-cats.md","sourceDirName":"technology","slug":"/technology/scala-cats","permalink":"/website/docs/technology/scala-cats","draft":false,"unlisted":false,"editUrl":"https://github.com/necosta/website/tree/main/docs/technology/scala-cats.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Scala","permalink":"/website/docs/technology/scala"},"next":{"title":"Pekko","permalink":"/website/docs/technology/akka-pekko"}}');var l=s(4848),r=s(8453);const c={sidebar_position:5},t="Scala Cats",d={},o=[{value:"Why use Cats?",id:"why-use-cats",level:2},{value:"Deep dive",id:"deep-dive",level:2},{value:"On main type classes",id:"on-main-type-classes",level:3},{value:"On error handling",id:"on-error-handling",level:2},{value:"On data types",id:"on-data-types",level:2},{value:"Tagless final",id:"tagless-final",level:2},{value:"Why Use Tagless Final?",id:"why-use-tagless-final",level:3},{value:"Standard tech stack",id:"standard-tech-stack",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"scala-cats",children:"Scala Cats"})}),"\n",(0,l.jsx)(n.p,{children:"A guide on Scala Cats and Scala Cats Effect library main features"}),"\n",(0,l.jsx)(n.h2,{id:"why-use-cats",children:"Why use Cats?"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Applies ",(0,l.jsx)(n.strong,{children:"Pure Functional Programming"})," principles","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Promotes immutability, referential transparency, and side-effect-free programming"}),"\n",(0,l.jsx)(n.li,{children:"Easier to reason about and test"}),"\n",(0,l.jsxs)(n.li,{children:["Promotes ",(0,l.jsx)(n.strong,{children:"composable"})," and reusable components (functions, classes, etc.)"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Ensures ",(0,l.jsx)(n.strong,{children:"Type Safety"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Provides strong guarantees at compile time, reducing the likelihood of runtime errors"}),"\n",(0,l.jsx)(n.li,{children:"Define and enforce business rules and constraints through types"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Concurrency and Parallelism"})," features","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Asynchronous"})," (Non-blocking operations) by default, designed for composable concurrency"]}),"\n",(0,l.jsx)(n.li,{children:"Includes methods that enable and abstract parallel executions"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Includes ",(0,l.jsx)(n.strong,{children:"Higher-Order Abstractions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Higher-order abstractions which help to compose and manipulate data structures in a clean and reusable way."}),"\n",(0,l.jsx)(n.li,{children:"These abstractions allow you to work with values in a more generalized manner."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Extensive ",(0,l.jsx)(n.strong,{children:"Error Handling"})," features","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Robust abstractions for error handling, avoiding resorting to exceptions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"deep-dive",children:"Deep dive"}),"\n",(0,l.jsx)(n.h3,{id:"on-main-type-classes",children:"On main type classes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Semigroup"}),": Adds ",(0,l.jsx)(n.code,{children:".combine"})," so we can associate"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Monoid"}),": Adds ",(0,l.jsx)(n.code,{children:".empty"})," as identity"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Functor"}),": Adds ",(0,l.jsx)(n.code,{children:".map"})," for transformations"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Applicative"}),": Adds ",(0,l.jsx)(n.code,{children:".pure"})," to lift values into context"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Monad"}),": Adds ",(0,l.jsx)(n.code,{children:".flatMap"})," to chain computations"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Foldable"}),": Adds ",(0,l.jsx)(n.code,{children:".fold"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Traverse"}),": Adds ",(0,l.jsx)(n.code,{children:".traverse"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Async"}),": Adds ability to perform asynchronous computations"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Sync"}),": Adds ability to perform synchronous computations"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Options: ",(0,l.jsx)(n.code,{children:"IO.pure"}),", ",(0,l.jsx)(n.code,{children:"IO.delay"}),", ",(0,l.jsx)(n.code,{children:"IO.blocking"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Show"}),": Adds a type safe ",(0,l.jsx)(n.code,{children:".toString"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Eq"}),": Adds a type safe equality operation"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Clock"}),": Adds a type safe clock"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"IO monad"}),": A monad that ensures lazy computation that produces a result (success or error) and may produce side effects"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Resource"}),": Abstraction that ensures proper acquisition and release of resources"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Other:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Spawn"}),": Allows the creation of new ",(0,l.jsx)(n.code,{children:"Fibers"})," and their management (race conditions)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Concurrent"}),": Brings ",(0,l.jsx)(n.code,{children:"Ref"})," (for state) and ",(0,l.jsx)(n.code,{children:"Deferred"})," (for promises - waiting for a value that will be provided later)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IO.defer"}),": Defers evaluation until execution time"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IO.evalOn"}),": Runs a computation on a specific execution context"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:".background"}),": Runs a computation in the background, without blocking the main execution"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Temporal"}),": Brings time-related capabilities, such as delay (",(0,l.jsx)(n.code,{children:"sleep"}),") and timeouts"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Dispatcher"}),': Allows the bridge between "pure" and "impure" code (normally Java library)']}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Supervisor"}),": Management of child fibers"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Semaphore"}),": Limits access to shared resources"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"on-error-handling",children:"On error handling"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"handleErrorWith"}),': Similar to Java "try-catch"']}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"attempt"}),": Returns an either for the success/insuccess of the operation"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"onError"}),": Useful for logging, does not stop the operation from throwing error"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"orElse"}),": Provides a fallback alternative in case a condition is not met"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"on-data-types",children:"On data types"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"NonEmptyList"}),", ",(0,l.jsx)(n.code,{children:"NonEmptyChain"})," - Ensures at compile time collection is not empty"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Validated"})," - Accumulates errors (unlike ",(0,l.jsx)(n.code,{children:"Either"})," which short-circuits)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Kleisli"})," - (A => F[B]), useful to chain pipelines"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"tagless-final",children:"Tagless final"}),"\n",(0,l.jsx)(n.p,{children:"Tagless Final is a design pattern used in FP to write polymorphic code that abstracts over different effect types\n(IO, Future, Either, etc.).\nInstead of committing to a specific monad like IO, we use a type class constraint (F[_]: SomeTypeClass)\nto keep the code flexible."}),"\n",(0,l.jsx)(n.h3,{id:"why-use-tagless-final",children:"Why Use Tagless Final?"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Abstraction \u2013 Allows us to write generic code that works with different effect types"}),"\n",(0,l.jsx)(n.li,{children:"Testability \u2013 We can substitute IO with Either or Option for testing"}),"\n",(0,l.jsx)(n.li,{children:"Separation of Concerns \u2013 Business logic is independent of the effect system"}),"\n",(0,l.jsx)(n.li,{children:"Flexibility \u2013 Supports multiple interpreters (e.g., sync, async, mock implementations)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"standard-tech-stack",children:"Standard tech stack"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Logging (log4cats)"}),"\n",(0,l.jsx)(n.li,{children:"Tracing (natchez)"}),"\n",(0,l.jsx)(n.li,{children:"HTTP/API (http4s)"}),"\n",(0,l.jsx)(n.li,{children:"DB (doobie, skunk, slick)"}),"\n",(0,l.jsx)(n.li,{children:"Codecs (circe)"}),"\n",(0,l.jsx)(n.li,{children:"Streaming (fs2)"}),"\n",(0,l.jsx)(n.li,{children:"Config (pureconfig or ciris)"}),"\n",(0,l.jsx)(n.li,{children:"Tests (scalacheck)"}),"\n",(0,l.jsx)(n.li,{children:"API definition (tapir)"}),"\n",(0,l.jsx)(n.li,{children:"Contract definition (smithy4s)"}),"\n",(0,l.jsx)(n.li,{children:"AWS lambda event processing (feral)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(6540);const l={},r=i.createContext(l);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);