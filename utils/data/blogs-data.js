export const localBlogs = [
  {
    slug: 'blockchain-explained-trustless-ledgers',
    title: 'Blockchain Explained: A Ledger That Does Not Need Trust',
    description:
      'A practical intro to how blockchain stores data, why blocks are chained with hashes, and what immutability actually means for apps you ship.',
    cover_image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80',
    published_at: '2026-08-12T10:00:00.000Z',
    reading_time_minutes: 6,
    public_reactions_count: 24,
    comments_count: 3,
    url: '/blog/blockchain-explained-trustless-ledgers',
    tags: ['Blockchain', 'Web3'],
    content: [
      'Blockchain is a shared database that many computers keep in sync. Instead of one company owning the source of truth, every participant stores a copy of the same history. New data is grouped into blocks. Each block points to the previous one with a cryptographic hash, which is why we call it a chain.',
      'If someone tries to rewrite an old record, the hash of that block changes. Every later block would no longer match. The network would reject the fake history. That is the core idea behind immutability: not that data can never change, but that changes are expensive, visible, and must be agreed on by the network.',
      'For a frontend or full-stack developer, this matters because the “database” is public and append-only. You do not PATCH a row in secret. You submit a transaction, wait for confirmation, then read the new state. Latency, gas fees, and failed transactions become part of the product UX.',
      'Public chains like Ethereum are useful when many parties need the same rules and no single admin. Private or consortium chains are useful inside a company or a set of partners who still want an audit trail. Pick the model that matches the trust problem you are actually solving.',
    ],
  },
  {
    slug: 'smart-contracts-code-as-agreement',
    title: 'Smart Contracts: When Code Holds the Agreement',
    description:
      'How smart contracts run on-chain, what they are good at, and the pitfalls that show up when business logic lives on a public ledger.',
    cover_image:
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1600&q=80',
    published_at: '2026-08-18T10:00:00.000Z',
    reading_time_minutes: 7,
    public_reactions_count: 31,
    comments_count: 5,
    url: '/blog/smart-contracts-code-as-agreement',
    tags: ['Smart Contracts', 'Ethereum'],
    content: [
      'A smart contract is a program stored on a blockchain. Once deployed, anyone can call its functions under the rules written in the code. Payments, ownership, and access can move without a middleman if the contract is designed well.',
      'On Ethereum, contracts are typically written in Solidity and compiled to bytecode that the Ethereum Virtual Machine runs. Users sign transactions from a wallet. The network executes the call, charges gas, and updates storage. The result is public and replayable.',
      'Contracts are great at escrow, tokens, on-chain registries, and automated payouts. They are a poor fit for secrets, heavy computation, or data that must stay private. Anything you put on a public chain is visible. Off-chain storage plus on-chain hashes is a common pattern for documents and media.',
      'Bugs are expensive. You cannot quietly hotfix production the way you would a Node API. Audits, tests, upgrade patterns (or deliberately immutable contracts), and clear admin keys are part of shipping. Treat the contract as a financial system, not just another microservice.',
    ],
  },
  {
    slug: 'proof-of-work-vs-proof-of-stake',
    title: 'Proof of Work vs Proof of Stake: How Networks Agree',
    description:
      'Consensus is how a chain decides the next block. Here is a clear comparison of Proof of Work and Proof of Stake, and why it matters for energy, speed, and security.',
    cover_image:
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1600&q=80',
    published_at: '2026-08-22T10:00:00.000Z',
    reading_time_minutes: 5,
    public_reactions_count: 18,
    comments_count: 2,
    url: '/blog/proof-of-work-vs-proof-of-stake',
    tags: ['Consensus', 'Blockchain'],
    content: [
      'A blockchain is only useful if honest nodes agree on the same history. Consensus is the set of rules that pick the next valid block when many people could propose one.',
      'Proof of Work (used by Bitcoin) asks miners to spend energy solving a puzzle. The first valid solution wins the right to add a block and earn a reward. Attacking the chain means out-spending the honest majority in electricity and hardware. It is simple and battle-tested, but energy-heavy and slower to confirm.',
      'Proof of Stake (used by Ethereum after The Merge) asks validators to lock crypto as collateral. If they propose or attest to invalid blocks, they can lose that stake. Security comes from economic skin in the game rather than electricity. Finality is often faster, and energy use drops sharply.',
      'Neither model is magic. Both still need a well-distributed set of participants. For product work, consensus mainly shows up as confirmation time and finality: how long you wait before you treat a payment or mint as settled.',
    ],
  },
  {
    slug: 'web3-for-frontend-developers',
    title: 'Web3 for Frontend Developers: Wallets, RPCs, and UX',
    description:
      'What changes when your React or Next.js app talks to a chain: wallet connect, signing, RPC providers, and the UX traps that confuse users.',
    cover_image:
      'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1600&q=80',
    published_at: '2026-08-26T10:00:00.000Z',
    reading_time_minutes: 6,
    public_reactions_count: 27,
    comments_count: 4,
    url: '/blog/web3-for-frontend-developers',
    tags: ['Web3', 'Frontend', 'Next.js'],
    content: [
      'A typical Web3 frontend still uses React or Next.js. The new pieces are a wallet (MetaMask, WalletConnect, and others), an RPC URL to read chain state, and a library such as viem, ethers, or wagmi to encode calls.',
      'Users do not log in with email first. They connect a wallet and sign a message or a transaction. You must handle rejected signatures, wrong networks, and empty balances. Show the network name, estimated gas, and a clear pending state. Never assume the transaction succeeded because the wallet popup closed.',
      'Reads can go through a public RPC; writes must be signed by the user. Indexing layers (The Graph, custom indexers) help when you need history that is painful to query from raw logs. Keep secrets off the client. API keys for RPC providers belong in server routes or environment variables.',
      'Good Web3 UX feels like a normal product: progressive disclosure, fallbacks when the wallet is missing, and copy that explains what the user is approving. The chain is infrastructure. The interface still has to earn trust.',
    ],
  },
  {
    slug: 'blockchain-beyond-crypto',
    title: 'Blockchain Beyond Crypto: Where It Actually Helps',
    description:
      'Tokens get the headlines. The useful patterns are provenance, shared records, and programmable settlement — plus when a normal database is the better call.',
    cover_image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    published_at: '2026-08-28T10:00:00.000Z',
    reading_time_minutes: 5,
    public_reactions_count: 21,
    comments_count: 1,
    url: '/blog/blockchain-beyond-crypto',
    tags: ['Blockchain', 'Use Cases'],
    content: [
      'Crypto trading is one use of a public ledger. Other patterns show up in supply chains (who handled a lot, and when), certificates and credentials that anyone can verify, and settlement between companies that do not share a database.',
      'Healthcare and wellness products sometimes store hashes of records on-chain while keeping personal data off-chain. That gives an audit trail without leaking patient details. Gift cards, memberships, and course certificates can be issued as tokens if you need transferability and public verification.',
      'A chain is the wrong default for a private admin CMS, a chat inbox, or anything that needs cheap, fast updates and GDPR-style deletion. If one team already controls the data and users trust that team, Postgres is simpler and cheaper.',
      'Use blockchain when you need shared rules, a public audit trail, or value that moves without a single operator. Use a traditional stack when you need privacy, speed, and easy iteration. The skill is matching the tool to the trust model — not putting every feature on-chain.',
    ],
  },
];
