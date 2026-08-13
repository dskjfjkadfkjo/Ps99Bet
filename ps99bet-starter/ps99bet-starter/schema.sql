CREATE TABLE users (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE wallets (
  user_id TEXT PRIMARY KEY,
  gems INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE matches (
  id TEXT PRIMARY KEY,
  game TEXT NOT NULL,
  creator_id TEXT NOT NULL,
  value INTEGER NOT NULL,
  status TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
