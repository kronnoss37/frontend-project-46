# Target: install dependencies
install:
	npm ci

#	Target: simulation of publishing a progect to npm catalog
publish:
	npm publish --dry-run

# Target: run file gendiff.js
gendiff:
	node bin/gendiff.js
