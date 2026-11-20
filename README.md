# DreamAtlas

**A private map of the night, with deliberate sharing.** Capture dreams, notice transparent personal
patterns and share carefully redacted copies on your own terms.

DreamAtlas is an open-source, privacy-first journal. Entries remain private by default; trusted or
public sharing creates a separate snapshot rather than granting access to the original. Aggregate
discovery suppresses small cohorts and presents factual counts without diagnosis or interpretation.

> **Project status: early foundation.** Owner isolation, optimistic revisions, snapshot sharing,
> personal theme counts and minimum-publisher suppression are implemented and tested. The remaining
> work is tracked in the [ticket index](docs/TICKETS.md): approximately 10% of the planned product
> is complete.

## Project status

| Area | Status | Tickets |
| --- | --- | --- |
| Repository standards, MIT license and continuous checks | Implemented | Foundation |
| Owner-scoped private journal domain | Implemented | Foundation |
| Revision conflicts and stable sharing copies | Implemented | Foundation |
| Transparent personal theme counts | Implemented | Foundation |
| Small public-cohort suppression | Implemented | Foundation |
| Accounts, encrypted persistence and key operations | Pending | DA-101 – DA-103 |
| Capture, editing, tags, search and calendar | Pending | DA-104 – DA-108 |
| Personal pattern dashboard | Pending | DA-109 – DA-111 |
| Trusted circles and deliberate previews | Pending | DA-112 – DA-115 |
| Pseudonyms, redaction and public atlas | Pending | DA-116 – DA-121 |
| Reminders, moderation and data rights | Pending | DA-122 – DA-127 |
| Complete verification and release readiness | Pending | DA-128 – DA-130 |

## Quick start

Requirements: Node.js 22 or later and npm.

    npm install
    npm run dev

Open:

- Web: <http://localhost:3103>
- Health endpoint: <http://localhost:3103/api/health>
- Personal pattern endpoint: <http://localhost:3103/api/me/patterns>

The current request boundary uses a synthetic local identity until account sessions are implemented.

## Demo access (development only)

No credentials are required for the foundation preview. POST /api/me/dreams stores an entry in the
process-local development journal. This is not a production privacy model; authenticated accounts,
encrypted storage and key operations are tracked by DA-101 through DA-103.

## Commands

| Command | What it does |
| --- | --- |
| npm run dev | Start the local server with file watching |
| npm test | Run privacy-domain and request tests |
| npm run typecheck | Check strict TypeScript |
| npm run build | Compile the production server into dist |
| npm start | Run the compiled server |

## Tech stack

| Layer | Choice |
| --- | --- |
| Language | TypeScript in strict mode on Node.js 22+ |
| API | Express 5 with zod request validation |
| Data model | PostgreSQL forward migration with encrypted-field contracts |
| Domain | Owner isolation, revisions, sharing snapshots and cohort thresholds |
| Web | Accessible static foundation page served by Express |
| Tests | Vitest and Supertest |
| Checks | GitHub Actions for type checks, tests and sensitive-data scanning |

## Repository layout

    dreamatlas/
    ├── src/
    │   ├── app.ts             private journal HTTP boundary
    │   ├── domain.ts          journal, sharing and aggregate rules
    │   └── server.ts          process entry point
    ├── test/                  privacy-domain and request tests
    ├── migrations/            account, encrypted journal and sharing schema
    ├── public/                initial journal landing page
    ├── docs/
    │   ├── ARCHITECTURE.md    privacy and sharing boundaries
    │   ├── ROADMAP.md         milestone sequence
    │   └── TICKETS.md         complete implementation index
    └── .github/               checks and issue template

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Delivery roadmap](docs/ROADMAP.md)
- [Implementation ticket index](docs/TICKETS.md)
- [Product requirements](https://github.com/mayur19/dreamatlas/issues/1)
- [Public issue tracker](https://github.com/mayur19/dreamatlas/issues)

## Known limitations

- Journal state is process-local and clears on restart.
- Authentication and application-level encryption are not connected yet.
- Circle membership, redaction tools and moderation are pending.
- Pattern reporting currently covers theme frequency only.
- DreamAtlas supports reflection and creativity; it does not provide medical conclusions.

## Contributing, security and license

- [Contributing guide](CONTRIBUTING.md): workflow and verification expectations.
- [Security policy](SECURITY.md): private vulnerability reporting.
- [Community conduct](CODE_OF_CONDUCT.md).
- Licensed under the [MIT License](LICENSE).

