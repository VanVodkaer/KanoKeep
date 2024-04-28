# KanoKeep

<div align="center">
  <img src="Logo.png" alt="KanoKeep Logo" width="100"/>
  <br>
  <span><a href="README.md">简体中文</a> | English</span>
  <br>
  KanoKeep: Your Simple Accounting Buddy ❤️
</div>

## Project Introduction

KanoKeep is a practice project I created as a beginner in software development. It is a simple accounting software that utilizes Vue and Electron to explore basic concepts of frontend and desktop application development.

## Technology Stack

- **Vue**: Used for building the frontend interface.
- **Electron**: Used for converting the web application into a desktop application.

## Development and Build Guide

### Building the Web Application Separately

To build the web application separately, please follow these steps:

1. Enter the Web directory:
   ```bash
   cd ./web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```

The files generated after the build will be located in the ./electron/dist directory.

### Building the Electron Application

Before building the Electron application, build the web application first, then continue with the following steps:

1. Enter the Electron directory:
   ```bash
   cd ./electron
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the application:
   ```bash
   npm run make
   ```

The application files will be stored in the ./electron/out directory.

### Building Both Web and Electron Together

If you want to build both the Web and Electron applications at once, run the following commands in the project root directory:

```bash
npm run init
npm run build
```
