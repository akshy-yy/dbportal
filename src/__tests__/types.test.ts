import { describe, it, expect } from "vitest";
import type {
  ColumnSchema,
  TableSchema,
  DatabaseSchema,
  QueryResult,
  StructuredQuery,
  DriverCapabilities,
} from "../drivers/types";

describe("DriverCapabilities", () => {
  it("should allow rawQuery and structuredQuery to be set", () => {
    const caps: DriverCapabilities = {
      rawQuery: true,
      structuredQuery: false,
    };
    expect(caps.rawQuery).toBe(true);
    expect(caps.structuredQuery).toBe(false);
  });
});

describe("ColumnSchema", () => {
  it("should create a valid column schema", () => {
    const col: ColumnSchema = {
      name: "id",
      type: "integer",
      isNullable: false,
      isPrimary: true,
    };
    expect(col.name).toBe("id");
    expect(col.isPrimary).toBe(true);
    expect(col.isNullable).toBe(false);
  });
});

describe("TableSchema", () => {
  it("should create a valid table schema with columns and foreign keys", () => {
    const table: TableSchema = {
      name: "users",
      columns: [
        { name: "id", type: "integer", isNullable: false, isPrimary: true },
        { name: "email", type: "text", isNullable: false, isPrimary: false },
      ],
      foreignKeys: [],
    };
    expect(table.name).toBe("users");
    expect(table.columns).toHaveLength(2);
    expect(table.foreignKeys).toHaveLength(0);
  });
});

describe("DatabaseSchema", () => {
  it("should create a valid database schema", () => {
    const schema: DatabaseSchema = {
      dbType: "postgres",
      tables: [],
    };
    expect(schema.dbType).toBe("postgres");
    expect(schema.tables).toHaveLength(0);
  });
});

describe("QueryResult", () => {
  it("should create a valid query result with telemetry", () => {
    const result: QueryResult = {
      data: [{ id: 1, name: "Alice" }],
      telemetry: {
        executionTimeMs: 42,
        affectedRows: 1,
      },
    };
    expect(result.data).toHaveLength(1);
    expect(result.telemetry.executionTimeMs).toBe(42);
  });
});

describe("StructuredQuery", () => {
  it("should support optional fields", () => {
    const query: StructuredQuery = {
      collection: "users",
      limit: 10,
      sort: { createdAt: -1 },
    };
    expect(query.collection).toBe("users");
    expect(query.limit).toBe(10);
    expect(query.sort?.createdAt).toBe(-1);
  });
});
