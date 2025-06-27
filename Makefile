# Target: install dependencies
install:
	npm ci

#	Target: simulation of publishing a progect to npm catalog
publish:
	npm publish --dry-run

# Target: run file gendiff.js
gendiff:
	node bin/gendiff.js

#	Target: run eslint in all js files
lint:
	npx eslint .

#	Target: run all tests in project
test:
	npm test

#	Target: run test coverage in project
test-coverage:
	npm test -- --coverage

.PHONY: test
