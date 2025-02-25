import { waitlist, type Waitlist, type InsertWaitlist } from "@shared/schema";

export interface IStorage {
  addToWaitlist(data: InsertWaitlist): Promise<Waitlist>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, Waitlist>;
  private currentId: number;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
  }

  async addToWaitlist(data: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentId++;
    const entry: Waitlist = {
      id,
      email: data.email,
      createdAt: new Date(),
    };
    this.waitlist.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
