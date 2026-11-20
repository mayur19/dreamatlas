CREATE TABLE accounts (
  id uuid PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  timezone text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE dreams (
  id uuid PRIMARY KEY,
  owner_id uuid NOT NULL REFERENCES accounts(id),
  journal_date date NOT NULL,
  title_ciphertext text NOT NULL,
  body_ciphertext text NOT NULL,
  revision integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE private_tags (
  id uuid PRIMARY KEY,
  owner_id uuid NOT NULL REFERENCES accounts(id),
  category text NOT NULL,
  name_ciphertext text NOT NULL
);
CREATE TABLE dream_tags (
  dream_id uuid NOT NULL REFERENCES dreams(id),
  tag_id uuid NOT NULL REFERENCES private_tags(id),
  PRIMARY KEY (dream_id, tag_id)
);
CREATE TABLE shared_copies (
  id uuid PRIMARY KEY,
  source_dream_id uuid NOT NULL REFERENCES dreams(id),
  publisher_id uuid NOT NULL REFERENCES accounts(id),
  public_alias text NOT NULL,
  title_copy text NOT NULL,
  body_copy text NOT NULL,
  themes_json jsonb NOT NULL,
  status text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

