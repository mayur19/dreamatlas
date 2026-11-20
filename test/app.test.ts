import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";

describe("journal boundary", () => {
  it("captures a minimal private dream", async () => {
    const response = await request(createApp()).post("/api/me/dreams").send({
      journalDate: "2026-11-20", title: "", body: "A corridor of blue doors.", themes: []
    });
    expect(response.status).toBe(201);
    expect(response.body.data.ownerId).toBe("demo-user");
  });
});

