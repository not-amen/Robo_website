import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/statistics/key", async (_req, res) => {
    try {
      const stats = await storage.getKeyStatistics();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch key statistics" });
    }
  });

  app.get("/api/statistics/all", async (_req, res) => {
    try {
      const stats = await storage.getAllStatistics();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch statistics" });
    }
  });

  app.get("/api/statistics/unemployment-trend", async (_req, res) => {
    try {
      const data = await storage.getUnemploymentTrend();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch unemployment trend" });
    }
  });

  app.get("/api/statistics/demographic-breakdown", async (_req, res) => {
    try {
      const data = await storage.getDemographicBreakdown();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch demographic data" });
    }
  });

  app.get("/api/policies", async (_req, res) => {
    try {
      const policies = await storage.getAllPolicies();
      res.json(policies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch policies" });
    }
  });

  app.get("/api/policies/recent", async (_req, res) => {
    try {
      const policies = await storage.getRecentPolicies(2);
      res.json(policies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch recent policies" });
    }
  });

  app.get("/api/timeline", async (_req, res) => {
    try {
      const events = await storage.getAllTimelineEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch timeline events" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
