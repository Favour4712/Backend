#!/usr/bin/env node
// Startup script to ensure correct working directory
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { chdir } from 'process';

// Get the directory of this file (project root)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Change to the project root directory
chdir(__dirname);

// Now import and start the server (server.js runs on import)
await import('./src/server.js');

