---
draft: true
date: 2024-1-26
authors:
  - justenstall
categories:
  - General
---

# Migrating from Makefile to Taskfile

[Taskfile](https://taskfile.dev/) is a newer alternative to GNU Make.

## Generated code in build pipelines

One of the most interesting features of Go is the `go generate` directive. The Go compiler obeys special comments in Go files called [Compiler Directives](https://pkg.go.dev/cmd/compile#hdr-Compiler_Directives). The `go generate` directive instructs the compiler to run a command. are obeyed by`//go:generate` directive.

<!-- Talk about build pipelines and the importance of treating all build dependencies as source code -->
<!-- Generated docs, etc -->
<!-- Compare what is developer tasks vs what is build pipeline tasks -->