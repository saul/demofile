#!/bin/bash

# Bail if any command fails
set -e
pushd `dirname "$0"`

sudo apt-get install unzip

# Sources:
# 
# pc419-vs-chiefs-mirage.dem
# => from https://demos.hltv.org//demo/demofiles/demosection//ESEA-MDL-Season34-Australia-pc419-vs-chiefs-mirage.rar
#
# vitality-vs-faze-m1-mirage.dem
# => from https://demos.hltv.org//demo/demofiles/demosection//IEM-New-York-2020-Europe-vitality-vs-faze-bo3.rar
#
# testgamedeouf.dem
# => from https://drive.google.com/file/d/1KJkFq9vzIH-lBzVHaL6TQdk0Q9IJep_R/view?usp=sharing

curl 'https://pub-a8d637387e674410b0a08d82245e9d84.r2.dev/test-demos.zip' --output test-demos.zip

# Downloaded over insecure http, so validate hashes
sha256sum -c SHA256SUMS

unzip -o test-demos.zip

# Clean up to reduce the size of the 'demos' directory
rm test-demos.zip

popd
