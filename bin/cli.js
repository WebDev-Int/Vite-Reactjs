#!/usr/bin / env node
/* eslint-disable no-undef */
// /* eslint-disable */

const { execSync } = require('child_process');
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/WebDev-Int/Vite-Reactjs.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

constole.log(`Cloning the repository with name ${repoName}`);
const checkout = runCommand(gitCheckoutCommand);
if (!checkout) process.exit(-1);
console.log(`Installing dependencies for ${repoName}
`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);
console.log(`
Done! 
`);
console.log(`
cd ${repoName} && npm start`);