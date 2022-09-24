const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        'App Version': '2.0.0',
        'Test Environment': 'STAGING',
        Browser: 'Chrome 84.0',
        Platform: 'Window10'

    },
}

reporter.generate(options)