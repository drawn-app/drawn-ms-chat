#!/bin/bash

echo "Generating typescript types from proto files..."
npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/generatedTypes proto/*.proto
echo "Done"