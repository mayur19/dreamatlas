import express from "express";
import { z } from "zod";
import { DreamJournal } from "./domain.js";

const input = z.object({
  journalDate: z.string(),
  title: z.string().max(160),
  body: z.string().min(1).max(50000),
  themes: z.array(z.string().min(1).max(40)).max(20)
});

export function createApp(journal = new DreamJournal()) {
  const app = express();
  app.use(express.json({ limit: "256kb" }));
  app.use(express.static("public"));
  app.get("/api/health", (_request, response) => response.json({ status: "ok" }));
  app.post("/api/me/dreams", (request, response) => {
    const parsed = input.safeParse(request.body);
    if (!parsed.success) return response.status(422).json({ error: "VALIDATION_FAILED" });
    try {
      return response.status(201).json({ data: journal.create("demo-user", parsed.data) });
    } catch (error) {
      return response.status(422).json({ error: error instanceof Error ? error.message : "UNKNOWN" });
    }
  });
  app.get("/api/me/patterns", (_request, response) => response.json({ data: journal.patterns("demo-user") }));
  return app;
}

