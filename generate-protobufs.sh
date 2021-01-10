#!/bin/bash

# Bail if any command fails
set -e
pushd `dirname "$0"`

rm -r .protoc || true
mkdir .protoc
curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.14.0/protoc-3.14.0-linux-x86_64.zip -o .protoc/protoc.zip
unzip .protoc/protoc.zip -d .protoc
rm -r src/protobufs/*.{ts,proto}
cp GameTracking-CSGO/Protobufs/*.proto src/protobufs
.protoc/bin/protoc --plugin=node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=src/protobufs --ts_proto_opt=outputJsonMethods=false,forceLong=long,unrecognizedEnum=false -I.protoc/include -Isrc/protobufs src/protobufs/cstrike15_usermessages.proto src/protobufs/netmessages.proto

find src/protobufs -type f -name '*.ts' -exec sed -i '1s|.*|/* tslint:disable */|' {} +

popd
