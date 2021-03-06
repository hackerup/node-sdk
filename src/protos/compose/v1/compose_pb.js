// source: compose/v1/compose.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.com.docker.api.protos.compose.v1.ComposeDownRequest', null, global);
goog.exportSymbol('proto.com.docker.api.protos.compose.v1.ComposeDownResponse', null, global);
goog.exportSymbol('proto.com.docker.api.protos.compose.v1.ComposeUpRequest', null, global);
goog.exportSymbol('proto.com.docker.api.protos.compose.v1.ComposeUpResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.docker.api.protos.compose.v1.ComposeUpRequest.repeatedFields_, null);
};
goog.inherits(proto.com.docker.api.protos.compose.v1.ComposeUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.docker.api.protos.compose.v1.ComposeUpRequest.displayName = 'proto.com.docker.api.protos.compose.v1.ComposeUpRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.docker.api.protos.compose.v1.ComposeUpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.docker.api.protos.compose.v1.ComposeUpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.docker.api.protos.compose.v1.ComposeUpResponse.displayName = 'proto.com.docker.api.protos.compose.v1.ComposeUpResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.docker.api.protos.compose.v1.ComposeDownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.docker.api.protos.compose.v1.ComposeDownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.docker.api.protos.compose.v1.ComposeDownRequest.displayName = 'proto.com.docker.api.protos.compose.v1.ComposeDownRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.docker.api.protos.compose.v1.ComposeDownResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.docker.api.protos.compose.v1.ComposeDownResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.docker.api.protos.compose.v1.ComposeDownResponse.displayName = 'proto.com.docker.api.protos.compose.v1.ComposeDownResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.docker.api.protos.compose.v1.ComposeUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workdir: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.docker.api.protos.compose.v1.ComposeUpRequest;
  return proto.com.docker.api.protos.compose.v1.ComposeUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkdir(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.docker.api.protos.compose.v1.ComposeUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkdir();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string projectName = 1;
 * @return {string}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.getProjectname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} returns this
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.setProjectname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workDir = 2;
 * @return {string}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.getWorkdir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} returns this
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.setWorkdir = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string files = 3;
 * @return {!Array<string>}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.getFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} returns this
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.setFilesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} returns this
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.addFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpRequest} returns this
 */
proto.com.docker.api.protos.compose.v1.ComposeUpRequest.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.docker.api.protos.compose.v1.ComposeUpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeUpResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeUpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpResponse}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.docker.api.protos.compose.v1.ComposeUpResponse;
  return proto.com.docker.api.protos.compose.v1.ComposeUpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeUpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeUpResponse}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.docker.api.protos.compose.v1.ComposeUpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.docker.api.protos.compose.v1.ComposeUpResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeUpResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeUpResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.docker.api.protos.compose.v1.ComposeDownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeDownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeDownRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeDownRequest}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.docker.api.protos.compose.v1.ComposeDownRequest;
  return proto.com.docker.api.protos.compose.v1.ComposeDownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeDownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeDownRequest}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.docker.api.protos.compose.v1.ComposeDownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeDownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeDownRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.docker.api.protos.compose.v1.ComposeDownResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeDownResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeDownResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeDownResponse}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.docker.api.protos.compose.v1.ComposeDownResponse;
  return proto.com.docker.api.protos.compose.v1.ComposeDownResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeDownResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.docker.api.protos.compose.v1.ComposeDownResponse}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.docker.api.protos.compose.v1.ComposeDownResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.docker.api.protos.compose.v1.ComposeDownResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.docker.api.protos.compose.v1.ComposeDownResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.docker.api.protos.compose.v1.ComposeDownResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.com.docker.api.protos.compose.v1);
