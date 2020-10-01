module.exports = {
    testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|js)'],
    rootDir: '..',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.test.json'
        }
    },
    coverageThreshold: {
        // https://jestjs.io/docs/en/configuration#coveragethreshold-object
        "global": {
            "branches": 120,
            "functions": 85,
            "lines": 85,
            "statements": 85
        }
    },
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    reporters: [
        "default",
        [
            "./node_modules/jest-html-reporter",
            {
                "pageTitle": "Jest Test report",
                "outputPath": "./jest-report/index.html",
                "includeFailureMsg": true
            }
        ]
    ]
};
