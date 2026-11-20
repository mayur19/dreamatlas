import { describe, expect, it } from "vitest";
import { DreamJournal } from "../src/domain.js";

const dream = { journalDate: "2026-11-20", title: "Flooded library", body: "The books became boats.", themes: ["water", "library"] };

describe("DreamJournal", () => {
  it("isolates private records by owner", () => {
    const journal = new DreamJournal();
    const saved = journal.create("mira", dream);
    expect(() => journal.update("someone-else", saved.id, 1, { title: "x", body: "x", themes: [] })).toThrow("NOT_FOUND");
  });

  it("shares a stable redacted snapshot", () => {
    const journal = new DreamJournal();
    const saved = journal.create("mira", dream);
    const copy = journal.share("mira", saved.id, { alias: "NightTransit", title: "A library", body: "Books became boats.", themes: ["water"] });
    journal.update("mira", saved.id, 1, { title: "Private title changed", body: dream.body, themes: dream.themes });
    expect(journal.shares.get(copy.id)?.title).toBe("A library");
  });

  it("suppresses small public cohorts", () => {
    const journal = new DreamJournal();
    for (const owner of ["one", "two"]) {
      const saved = journal.create(owner, dream);
      journal.share(owner, saved.id, { alias: owner, title: dream.title, body: dream.body, themes: ["water"] });
    }
    expect(journal.publicTheme("water", 3)).toEqual({ suppressed: true });
  });
});

