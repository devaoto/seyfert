import { Shard, ShardSocketCloseCodes, ShardState } from "./types.ts";

export async function shutdown(shard: Shard): Promise<void> {
  shard.close(ShardSocketCloseCodes.Shutdown, "Shard shutting down.");
  shard.state = ShardState.Offline;
}
