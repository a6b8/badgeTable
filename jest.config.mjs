export default {
    testEnvironment: 'node',
    testMatch: [ 
        '**/tests/jest/**/*.test.mjs',
        '**/tests/jest/**/*.spec.mjs'
    ],
    collectCoverageFrom: [
        'src/**/*.mjs',
        '!src/**/*.test.mjs',
        '!src/**/*.spec.mjs',
        '!tests/**'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    coverageDirectory: 'coverage',
    coverageReporters: [ 'text', 'lcov', 'html', 'json' ],
    verbose: true,
    testTimeout: 10000
}