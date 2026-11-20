import { randomUUID } from "node:crypto";

export interface Dream {
  id: string;
  ownerId: string;
  journalDate: string;
  title: string;
  body: string;
  themes: string[];
  revision: number;
}

export interface SharedCopy {
  id: string;
  sourceDreamId: string;
  publisherId: string;
  alias: string;
  title: string;
  body: string;
  themes: string[];
  status: "ACTIVE" | "WITHDRAWN";
}

export class DreamJournal {
  readonly dreams = new Map<string, Dream>();
  readonly shares = new Map<string, SharedCopy>();

  create(ownerId: string, input: Omit<Dream, "id" | "ownerId" | "revision">): Dream {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input.journalDate)) throw new Error("INVALID_DATE");
    const dream: Dream = { id: randomUUID(), ownerId, revision: 1, ...structuredClone(input) };
    this.dreams.set(dream.id, dream);
    return structuredClone(dream);
  }

  update(ownerId: string, id: string, expectedRevision: number, patch: Pick<Dream, "title" | "body" | "themes">): Dream {
    const dream = this.dreams.get(id);
    if (!dream || dream.ownerId !== ownerId) throw new Error("NOT_FOUND");
    if (dream.revision !== expectedRevision) throw new Error("REVISION_CONFLICT");
    Object.assign(dream, structuredClone(patch), { revision: dream.revision + 1 });
    return structuredClone(dream);
  }

  share(ownerId: string, dreamId: string, publicCopy: Pick<SharedCopy, "alias" | "title" | "body" | "themes">): SharedCopy {
    const dream = this.dreams.get(dreamId);
    if (!dream || dream.ownerId !== ownerId) throw new Error("NOT_FOUND");
    const copy: SharedCopy = {
      id: randomUUID(),
      sourceDreamId: dreamId,
      publisherId: ownerId,
      status: "ACTIVE",
      ...structuredClone(publicCopy)
    };
    this.shares.set(copy.id, copy);
    return structuredClone(copy);
  }

  publicTheme(theme: string, minimumPublishers: number): { suppressed: boolean; count?: number; entries?: SharedCopy[] } {
    const entries = [...this.shares.values()].filter((copy) => copy.status === "ACTIVE" && copy.themes.includes(theme));
    const publishers = new Set(entries.map((copy) => copy.publisherId)).size;
    if (publishers < minimumPublishers) return { suppressed: true };
    return { suppressed: false, count: entries.length, entries: structuredClone(entries) };
  }

  patterns(ownerId: string): Array<{ theme: string; count: number }> {
    const counts = new Map<string, number>();
    for (const dream of this.dreams.values()) {
      if (dream.ownerId !== ownerId) continue;
      for (const theme of new Set(dream.themes)) counts.set(theme, (counts.get(theme) ?? 0) + 1);
    }
    return [...counts].map(([theme, count]) => ({ theme, count })).sort((a, b) => b.count - a.count || a.theme.localeCompare(b.theme));
  }
}

