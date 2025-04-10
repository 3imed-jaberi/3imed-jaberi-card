import * as fs from 'node:fs';
import * as path from 'node:path';

import boxen from 'boxen';
import chalk from 'chalk';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('            Imed Jaberi'),
	handle: chalk.white('@3imed-jaberi'),
	work: chalk.white('Engineering Lead at Paack (::)'),
	twitter: chalk.cyan('https://twitter.com/3imed_jaberi'),
	npm: chalk.cyan('https://npmjs.com/~3imed-jaberi'),
	github: chalk.cyan('https://github.com/3imed-jaberi'),
	linkedin: chalk.cyan('https://linkedin.com/in/3imed-jaberi'),
	web: chalk.cyan('https://imed-jaberi.com'),
	npx: `${chalk.red('npx')} ${chalk.white('@3imed-jaberi/card')}`,
	labelWork: chalk.white.bold('       Work:'),
	labelTwitter: chalk.white.bold('    Twitter:'),
	labelNpm: chalk.white.bold('        Npm:'),
	labelGitHub: chalk.white.bold('     GitHub:'),
	labelLinkedIn: chalk.white.bold('   LinkedIn:'),
	labelWeb: chalk.white.bold('        Web:'),
	labelCard: chalk.white.bold('       Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelNpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + // data.name + data.handle
	newline +
	newline + // Add one whole blank line
	working +
	newline + // data.labelWork + data.work
	twittering +
	newline + // data.labelTwitter + data.twitter
	npming +
	newline + // data.labelnpm + data.npm
	githubing +
	newline + // data.labelGitHub + data.github
	linkedining +
	newline + // data.labelLinkedIn + data.linkedin
	webing +
	newline + // data.labelWeb + data.web
	newline +
	carding; // data.labelCard + data.npx

const cardMessage = chalk.green(boxen(output, options));
// console.log(cardMessage);
fs.writeFileSync(path.join(import.meta.dirname, 'bin/output'), cardMessage);
