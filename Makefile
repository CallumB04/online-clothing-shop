SHELL := /bin/bash

dev:
	cd frontend && npm.cmd run dev & \
	cd backend && go run ./cmd/server

test:
	cd backend && gotest ./...
