# Implementation ticket index

Full issue descriptions include acceptance criteria, dependencies and verification notes.

- [ ] DA-101 | Foundation | backend,security | Add username accounts and revocable sessions | Rate-limit sign-in and protect state-changing requests.
- [ ] DA-102 | Foundation | backend,database | Implement encrypted PostgreSQL journal repository | Keep plaintext out of storage, logs and error metadata.
- [ ] DA-103 | Foundation | security | Add instance-key validation and rotation plan | Fail safely on missing keys and document recoverability.
- [ ] DA-104 | Journal | frontend | Build quick-capture experience | Optimize for small screens, explicit save and unsaved-draft recovery.
- [ ] DA-105 | Journal | backend,frontend | Add revisioned dream editing and trash | Preserve changes and recover entries within the retention window.
- [ ] DA-106 | Journal | backend,database | Implement private taxonomy | Support category, intensity, recurrence and tag merging.
- [ ] DA-107 | Journal | backend,frontend | Build owner-only full-text search | Filter by dates, themes, emotions, lucidity and sharing state.
- [ ] DA-108 | Journal | frontend | Build calendar and private timeline | Avoid title leakage in locked or logged-out states.
- [ ] DA-109 | Patterns | backend,testing | Implement transparent personal metrics | Return counts, denominators and date ranges without interpretation.
- [ ] DA-110 | Patterns | frontend | Build personal pattern dashboard | Cover frequency, emotion, lucidity and co-occurrence empty states.
- [ ] DA-111 | Patterns | backend | Add deterministic reflection sentences | Use factual templates and enforce minimum samples.
- [ ] DA-112 | Circles | backend,database | Implement trusted circles and roles | Enforce owner/member boundaries and immediate revocation.
- [ ] DA-113 | Circles | backend,security | Implement deliberate share snapshots | Prevent later source edits from changing shared copies.
- [ ] DA-114 | Circles | frontend | Build audience and redaction preview | Show the exact title, body, tags and attachments recipients receive.
- [ ] DA-115 | Circles | backend,frontend | Add reactions and comments | Enforce audience membership, withdrawal and moderation state.
- [ ] DA-116 | Public sharing | backend,database | Implement pseudonym identities | Prevent public linkage to account or circle identity.
- [ ] DA-117 | Public sharing | frontend | Build redaction editor | Flag private people and places before publication.
- [ ] DA-118 | Public sharing | backend,security | Build strict public response shapes | Omit exact times, private identifiers, filenames and source metadata.
- [ ] DA-119 | Atlas | backend,testing | Implement unique-publisher cohort suppression | Suppress both results and bucket existence below threshold.
- [ ] DA-120 | Atlas | backend,frontend | Build neutral-theme discovery | Search only active redacted copies and show sample sizes.
- [ ] DA-121 | Atlas | frontend | Build safe aggregate visualizations | Explain methodology and avoid causal or diagnostic language.
- [ ] DA-122 | Reminders | backend | Add timezone-safe idempotent reminders | Create at most one notification per configured local date.
- [ ] DA-123 | Reminders | frontend | Add optional prompts and neutral streaks | Permit disabling and avoid punitive language.
- [ ] DA-124 | Moderation | backend,security | Implement public reporting and limited review | Show moderators the reported copy, never the private source.
- [ ] DA-125 | Data rights | backend | Build sharing inventory and withdrawal | List every audience and remove future discovery access.
- [ ] DA-126 | Data rights | backend,testing | Implement portable account export | Include private records and attachment manifest securely.
- [ ] DA-127 | Data rights | backend,security | Implement authenticated deletion workflow | Revoke sessions and complete documented anonymization choices.
- [ ] DA-128 | Quality | testing | Automate all privacy-boundary browser journeys | Cover direct identifiers, removal, suppression, export and deletion.
- [ ] DA-129 | Quality | security | Complete threat and privacy review | Verify logging, backups, encryption and moderator capabilities.
- [ ] DA-130 | Release | accessibility,devops | Finish accessibility and deployment readiness | Provide keyboard coverage, runbook, backup restore and health checks.

