export class Block {
  public_key: string;
  link_public_key: string;
  sequence_number: string;
  link_sequence_number: string;
  previous_hash: string;
  hash: string;
  signature: string;
  timestamp: number;
  transaction: {string: string};
  type: string;
  linked: Block;
}
