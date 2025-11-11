SHELL := /bin/bash

start:
	cd frontend && npm.cmd run dev & \
	cd backend && go run ./cmd/server

test:
	cd backend && gotest -tags=mockitems ./...
	cd frontend && npm.cmd run test

setup:
	cd frontend && npm.cmd install
	cd backend && go mod download
