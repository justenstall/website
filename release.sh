#!/usr/bin/env bash

export ver=$1

# Update VERSION file
echo "$ver" >VERSION

# Update pyproject.toml file
poetry version "$ver"
