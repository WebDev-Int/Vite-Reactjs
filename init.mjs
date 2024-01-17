#!/usr/bin/env node
/* eslint-disable */
// init.js content...
import { execSync } from 'child_process';
import { resolve } from 'path';
import { copySync } from 'fs-extra';

const currentFileUrl = import.meta.url;
const __filename = new URL(currentFileUrl).pathname;
const __dirname = resolve(__filename, '..');

const projectName = process.argv[2] || 'my-app';

// Check if project name is provided
if (!projectName) {
    console.error('Please provide a project name.');
    process.exit(1);
}

const templatePath = resolve(__dirname);
const projectPath = resolve(process.cwd(), projectName);

// Copy template files
copySync(templatePath, projectPath, { overwrite: true });

// Change to the project directory
process.chdir(projectPath);

// Install dependencies
execSync('npm install', { stdio: 'inherit' });

console.log(`Vite React project ${projectName} created successfully.`);
