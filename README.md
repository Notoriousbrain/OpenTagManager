
#  OTM (Open Tag Manager)

An open-source alternative to Google Tag Manager, built using modern TypeScript tooling and designed with flexibility, performance, and developer ergonomics in mind.

 **Status**: MVP Setup In Progress – tRPC and Next.js are working 

##  Tech Stack

| Layer              | Technology                                   |
| ------------------ | -------------------------------------------- |
| Monorepo           | [Turborepo](https://turbo.build)             |
| Frontend           | [Next.js (App Router)](https://nextjs.org)   |
| API Layer          | [tRPC v11](https://trpc.io)                  |
| State/Fetch        | [TanStack Query](https://tanstack.com/query) |
| Language           | [TypeScript](https://www.typescriptlang.org) |
| Package Manager    | [Bun](https://bun.sh)                        |
| ORM (Planned)      | [Drizzle ORM](https://orm.drizzle.team)      |
| Database (Planned) | [Neon PostgreSQL](https://neon.tech)         |

---

##  Setup & Development

### Install dependencies

```bash
bun install
```

### Start development (dashboard app)

```bash
bun turbo run dev --filter=dashboard
```

---

##  Features in Progress

- [x] tRPC server and router configured
- [x] React Query (TanStack) integration
- [x] Shared API layer in `packages/trpc`
- [ ] Drizzle ORM setup
- [ ] Neon DB connection
- [ ] Schema for containers/tags/triggers
- [ ] Loader script in separate app
- [ ] Authentication (BetterAuth)

---

##  Purpose

OTM is designed to:

- Offer a **self-hosted, extensible alternative** to Google Tag Manager
- Embrace **modern monorepo DX** using Turborepo and Bun
- Be **type-safe end to end** using tRPC
