
# BDD Framework Demo

This is a simple demo of a BDD framework using **Cucumber**, **Playwright**, **TypeScript**, and the **Chai assertion library**.

> **Note**: The `.env` files are included as examples for demonstration purposes.

---

## Commands to Run Tests

### Run All Tests
```bash
npm run test
```
- Runs all the tests and provides a summary in the console.

### Run Tests with Report
```bash
npm run testWithReport
```
- Executes all the tests and generates a JSON report (`generated-report/cucumber_report.json`) that can be used to create an HTML report.

### Generate HTML Test Report
```bash
npx ts-node setup/generate-report.ts
```
- Generates an HTML report from the JSON report with details of all executed tests.

### Run Tests with Tags
#### Single Tag
```bash
npm run test -- --tags "@tagName"
```
- Executes all tests under a specific tag.

#### Multiple Tags (AND Condition)
```bash
npm run test -- --tags "@tagName and @tagName"
```
- Filters scenarios that match all specified tags.

#### Multiple Tags (OR Condition)
```bash
npm run test -- --tags "@tagName or @tagName"
```
- Includes tests from multiple tags.

#### Exclude Tags
```bash
npm run test -- --tags "@tagName and not @tagName"
```
- Runs tests with a specific tag while excluding others.

---

## Installing Required Packages

To install all the dependencies for this project, use the following command:

```bash
npm install
npm install playwright chai@4.3.7 prettier @cucumber/cucumber cucumber-html-reporter @types/chai @types/prettier ts-node typescript --save-dev
```

---

## Framework Overview

This framework combines Behavior-Driven Development (BDD) concepts with robust tools like:
- **Cucumber**: For writing human-readable test scenarios.
- **Playwright**: For browser automation.
- **TypeScript**: For modern, type-safe JavaScript.
- **Chai**: For assertions and validations.

Feel free to explore and modify the code to suit your testing needs!
