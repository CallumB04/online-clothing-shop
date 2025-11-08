SHELL := /bin/bash

start:
	cd frontend && npm.cmd run dev & \
	cd backend && go run ./cmd/server

test:
	cd frontend && npm.cmd run test
	cd backend && go test ./...

setup:
	cd frontend && npm.cmd install
	cd backend && go mod download
