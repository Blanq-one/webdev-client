import type { NextRequest } from "next/server";

function toNumber(value: string | null) {
  if (value === null || value.trim() === "") return NaN;
  return Number(value);
}

function calculate(operation: string, a: number, b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      return undefined;
  }
}

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const operation = params.get("operation") ?? "add";
  const a = toNumber(params.get("a"));
  const b = toNumber(params.get("b"));

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return Response.json({ error: "Both a and b must be numbers." }, { status: 400 });
  }
  if (operation === "divide" && b === 0) {
    return Response.json({ error: "Cannot divide by zero." }, { status: 400 });
  }
  const result = calculate(operation, a, b);
  if (result === undefined) {
    return Response.json(
      { error: `Unknown operation "${operation}". Use add, subtract, multiply, or divide.` },
      { status: 400 }
    );
  }
  return Response.json({ operation, a, b, result });
}
