#!/bin/bash

# Bail if any command fails
set -e

sudo apt install unrar

npx ts-node latest-demo.ts

unrar x -y "latest.rar"

# Grab the first file from the archive
LATEST_FILE=$(unrar lb latest.rar | head -n1)
mv $LATEST_FILE latest.dem

rm latest.rar
