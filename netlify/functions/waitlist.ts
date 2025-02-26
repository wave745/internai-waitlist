import { Handler } from "@netlify/functions";
import { insertWaitlistSchema, type Waitlist } from "../../shared/schema";
import { ZodError } from "zod";

// Simple in-memory storage for demo purposes
const waitlist = new Map<number, Waitlist>();
let currentId = 1;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const data = insertWaitlistSchema.parse(JSON.parse(event.body || "{}"));
    const id = currentId++;
    const entry: Waitlist = {
      id,
      email: data.email,
      createdAt: new Date(),
    };
    waitlist.set(id, entry);

    return {
      statusCode: 200,
      body: JSON.stringify(entry),
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: error.errors[0].message }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to join waitlist" }),
    };
  }
};
