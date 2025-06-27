export default {
  // Указывает, какие файлы включать в покрытие кода
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  // Какие файлы включать в анализ покрытия
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!node_modules/**',
  ],
  // Указывает, какие файлы считать тестовыми
  testMatch: ['**/*.test.js'],
}
