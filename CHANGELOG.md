# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.3] - 2025-08-25

### Added
- Comprehensive Jest test suite with 87.57% code coverage
- GitHub Actions workflow for CI/CD and Codecov integration
- Complete test coverage for BadgeTable.mjs, config.mjs, and mixed.mjs
- Integration tests for end-to-end functionality
- Coverage reporting with HTML and LCOV formats

### Changed
- Updated package.json with repository URLs and metadata
- Improved .npmignore to properly exclude test files and include README.md
- Enhanced .gitignore with coverage and package files
- Updated README.md with new preset examples and documentation

### Fixed
- ES module compatibility with Node.js 22
- Jest configuration for proper ES module handling
- Badge generation for all preset types

### Technical
- Added 105+ comprehensive tests covering all public and private methods
- Implemented GitHub Actions workflow for automated testing
- Configured Codecov integration for coverage reporting
- Added support for Node.js 16+ in engines specification

## [1.2.2] - Previous Release
### Added
- Initial implementation of BadgeTable generator
- Multiple preset configurations for different use cases
- Support for npm, gem, and GitHub repository badges
- Comprehensive configuration system

## [1.0.0] - Initial Release
### Added
- Basic BadgeTable functionality
- Core preset system
- Markdown table generation
- Shields.io integration