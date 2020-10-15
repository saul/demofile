#!/bin/bash

# Bail if any command fails
set -e

sudo apt install unrar

curl 'http://demos.hltv.org//demo/demofiles/demosection//ESEA-MDL-Season34-Australia-pc419-vs-chiefs-mirage.rar' --output ESEA-MDL-Season34-Australia-pc419-vs-chiefs-mirage.rar
curl 'http://demos.hltv.org//demo/demofiles/demosection//IEM-New-York-2020-Europe-vitality-vs-faze-bo3.rar' --output IEM-New-York-2020-Europe-vitality-vs-faze-bo3.rar

# Downloaded over insecure http, so validate hashes
sha256sum -c SHA256SUMS

unrar x -y "*.rar"
