/**
 * @fileoverview gRPC-Web generated client stub for streaming
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: streaming.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.streaming = require('./streaming_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.ShopClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.ShopPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.streaming.InventoryRequest,
 *   !proto.streaming.InventoryResponse>}
 */
const methodDescriptor_Shop_SubscribeInventory = new grpc.web.MethodDescriptor(
  '/streaming.Shop/SubscribeInventory',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.streaming.InventoryRequest,
  proto.streaming.InventoryResponse,
  /**
   * @param {!proto.streaming.InventoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.InventoryResponse.deserializeBinary
);


/**
 * @param {!proto.streaming.InventoryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.InventoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.ShopClient.prototype.subscribeInventory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.Shop/SubscribeInventory',
      request,
      metadata || {},
      methodDescriptor_Shop_SubscribeInventory);
};


/**
 * @param {!proto.streaming.InventoryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.InventoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.ShopPromiseClient.prototype.subscribeInventory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.Shop/SubscribeInventory',
      request,
      metadata || {},
      methodDescriptor_Shop_SubscribeInventory);
};


module.exports = proto.streaming;

