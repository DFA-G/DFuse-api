import { DotEnv, Postgres } from "./deps.ts";

export interface State {
  database: {
    client: Postgres.Client;
    queries: {};
  };
}

export function initializeState(): Promise<State> {
}
