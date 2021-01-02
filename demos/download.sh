#!/bin/bash

# Bail if any command fails
set -e
pushd `dirname "$0"`

sudo apt install unrar

# Originally from https://demos.hltv.org//demo/demofiles/demosection//ESEA-MDL-Season34-Australia-pc419-vs-chiefs-mirage.rar
curl 'https://demofiledemos.blob.core.windows.net/demoblobs/ESEA-MDL-Season34-Australia-pc419-vs-chiefs-mirage.rar' --output ESEA-MDL-Season34-Australia-pc419-vs-chiefs-mirage.rar

# Originally from https://demos.hltv.org//demo/demofiles/demosection//IEM-New-York-2020-Europe-vitality-vs-faze-bo3.rar
curl 'https://demofiledemos.blob.core.windows.net/demoblobs/IEM-New-York-2020-Europe-vitality-vs-faze-bo3.rar' --output IEM-New-York-2020-Europe-vitality-vs-faze-bo3.rar

# Downloaded over insecure http, so validate hashes
sha256sum -c SHA256SUMS

unrar x -y "*.rar"

# Clean up to reduce the size of the 'demos' directory
rm *.rar

popd
