#!/bin/sh

# Immediately exit shell exit if a command exits with a non-zero exit code
set -e

# Install dependencies
yarn install

# Run dev server
yarn dev