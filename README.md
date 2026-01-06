# Code Snippets Daily

> Daily collection of useful JavaScript/TypeScript code utilities and snippets

## Overview

This repository contains reusable code snippets, utilities, and helper functions for JavaScript/TypeScript development. Each snippet is well-documented with examples and tests.

## Categories

- **Array Utils** - Array manipulation utilities (chunk, unique, shuffle, etc.)
- **String Utils** - String processing helpers (capitalize, truncate, etc.)
- **Date Utils** - Date formatting and manipulation
- **Object Utils** - Object manipulation utilities
- **Async Utils** - Asynchronous programming helpers
- **Validation Utils** - Input validation functions

## Usage

Each snippet is in its own file with JSDoc documentation and examples:

\`\`\`javascript
import { chunk } from './javascript/array-utils/chunk.js';

const result = chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]
\`\`\`

## Structure

\`\`\`
javascript/
├── array-utils/
│   ├── chunk.js
│   ├── unique.js
│   └── README.md
├── string-utils/
│   ├── capitalize.js
│   └── README.md
└── ...
\`\`\`

## Contributing

This repository is automatically updated daily with new snippets via [contrib-flow](https://github.com/trdat1111/contrib-flow).

## License

MIT
