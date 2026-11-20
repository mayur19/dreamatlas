# Architecture

Private journal records, circle copies and public copies are separate resources.

- Private queries always begin with the authenticated owner identifier.
- Sharing creates a deliberate snapshot instead of granting access to the source.
- Public response shapes contain no private identifiers or exact timestamps.
- Aggregate queries count unique publishers and suppress cohorts below the configured threshold.
- Security logs contain event metadata, never journal bodies.

The current slice uses an in-process repository to prove the domain rules. PostgreSQL repositories and authenticated sessions are the next foundation milestone.

