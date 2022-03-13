import { DotEnv, Postgres } from "./deps.ts";

export interface State {
  env: Record<string, string>;
  database: {
    client: Postgres.Client;
  };
}

export function initializeState(): Promise<State> {
}
