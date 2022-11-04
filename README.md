# gRPC rust-server with JS front-end

This example shows how to serve gRPC-web using tonic-web, and consume streaming data using a JS/react front-end. 

## Start gRPC server

```bash
cd server
cargo run
```

## Start React Project

This command generates the protobuf service and types. (No need to run this, code has been committed).

```
cd client-js
OUT_DIR=$(pwd)/src
protoc -I=../proto streaming.proto  \
--js_out=import_style=commonjs:$OUT_DIR \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

npm run build
```

This command runs the UI.

```bash
cd client-js
npm start
```

## References
- gRPC-web docs: https://github.com/grpc/grpc-web


