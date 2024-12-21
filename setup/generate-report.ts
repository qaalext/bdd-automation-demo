import * as reporter from 'cucumber-html-reporter';
import * as path from 'path';

const options = {
    jsonFile: path.resolve(__dirname, '../generated-report/cucumber_report.json'),
    output: path.resolve(__dirname, '../generated-report/report.html'),
    theme: 'bootstrap' as const, // Ensure it's treated as a valid literal
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome 91.0.4472.124",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
