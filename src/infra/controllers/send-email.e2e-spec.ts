import { routes_names } from "@infra/constants/routes";
import { emailFactory } from "@test/factory/email";
import { app, server } from "@src/main";
import * as request from "supertest";
import { SupaEmailDB } from "../storages/supabase";
import { StoragesError } from "../storages/errors/StoragesError";

describe("Create email E2E test", () => {
  afterAll(async () => {
    server.close();
  });

  it("should create email", async () => {
    SupaEmailDB.prototype.create = jest.fn(async () => {});
    const entitie = emailFactory();

    const res = await request(app)
      .post(routes_names.send_email)
      .send({
        email: entitie.email,
      })
      .set("Content-Type", "application/json");

    expect(res.status).toEqual(201);
  });

  it("should throw one error: email already exist", async () => {
    SupaEmailDB.prototype.create = jest.fn(async () => {
      throw new StoragesError({
        name: "Default error",
        hint: "some hint",
        privateMessage: "private message",
        message: "message",
        details: "some detail",
        code: 409,
      });
    });
    const entitie = emailFactory();

    const res = await request(app)
      .post(routes_names.send_email)
      .send({
        email: entitie.email,
      })
      .set("Content-Type", "application/json");

    expect(res.status).toEqual(409);
  });
});
