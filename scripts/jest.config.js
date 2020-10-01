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
    }
};
