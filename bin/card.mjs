#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';

const output = fs.readFileSync(
	path.join(import.meta.dirname, 'output'),
	'utf8',
);
console.log(output);
