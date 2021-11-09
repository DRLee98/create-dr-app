#! /usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx create-my-boilerplate my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const GIT_REPO = "https://github.com/DRLee98/DR-React";

if (projectName !== ".") {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(projectName);
      console.log(
        `The file ${projectName} already exist in the current directory, please give it another name.`
      );
    } else {
      console.log(error);
    }
    process.exit(1);
  }
}

async function main() {
  try {
    console.log("Downloading files...");
    execSync("cd project");
    execSync(`cp -r * ${projectPath}`);

    if (projectName !== ".") {
      process.chdir(projectPath); // cd입니다 clone을 마친 후 projectPath로 진입
    }

    console.log("Installing dependencies...");
    execSync("npm install"); // package.json에 있는 의존성 설치

    console.log("Removing useless files");
    execSync("npx rimraf ./.git"); // 이제 보일러플레이트 git과 관련된 내용 제거

    console.log("✨ The installation is done, this is ready to use ✨");
  } catch (error) {
    console.log(error);
  }
}

main();
