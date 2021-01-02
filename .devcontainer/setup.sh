#!/bin/bash

# Bail if any command fails
set -e

npm install
npm run build

./demos/download.sh
