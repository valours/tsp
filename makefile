format:
	deno fmt

documentation: 
	deno doc --json

lint:
	deno lint --json

test:
	deno test

test_dev:
	deno test --watch