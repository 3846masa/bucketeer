// source: proto/feature/flag_trigger.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.bucketeer.feature.FlagTrigger', null, global);
goog.exportSymbol('proto.bucketeer.feature.FlagTrigger.Action', null, global);
goog.exportSymbol('proto.bucketeer.feature.FlagTrigger.Type', null, global);
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
proto.bucketeer.feature.FlagTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.feature.FlagTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.feature.FlagTrigger.displayName = 'proto.bucketeer.feature.FlagTrigger';
}



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
proto.bucketeer.feature.FlagTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.feature.FlagTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.feature.FlagTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.feature.FlagTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    featureId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    action: jspb.Message.getFieldWithDefault(msg, 5, 0),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    triggerTimes: jspb.Message.getFieldWithDefault(msg, 7, 0),
    lastTriggeredAt: jspb.Message.getFieldWithDefault(msg, 8, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    createdAt: jspb.Message.getFieldWithDefault(msg, 12, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.bucketeer.feature.FlagTrigger}
 */
proto.bucketeer.feature.FlagTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.feature.FlagTrigger;
  return proto.bucketeer.feature.FlagTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.feature.FlagTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.feature.FlagTrigger}
 */
proto.bucketeer.feature.FlagTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeatureId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 4:
      var value = /** @type {!proto.bucketeer.feature.FlagTrigger.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {!proto.bucketeer.feature.FlagTrigger.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTriggerTimes(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastTriggeredAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
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
proto.bucketeer.feature.FlagTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.feature.FlagTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.feature.FlagTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.feature.FlagTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeatureId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTriggerTimes();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getLastTriggeredAt();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bucketeer.feature.FlagTrigger.Type = {
  TYPE_UNKNOWN: 0,
  TYPE_WEBHOOK: 1
};

/**
 * @enum {number}
 */
proto.bucketeer.feature.FlagTrigger.Action = {
  ACTION_UNKNOWN: 0,
  ACTION_ON: 1,
  ACTION_OFF: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string feature_id = 2;
 * @return {string}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getFeatureId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setFeatureId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string environment_namespace = 3;
 * @return {string}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Type type = 4;
 * @return {!proto.bucketeer.feature.FlagTrigger.Type}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getType = function() {
  return /** @type {!proto.bucketeer.feature.FlagTrigger.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bucketeer.feature.FlagTrigger.Type} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Action action = 5;
 * @return {!proto.bucketeer.feature.FlagTrigger.Action}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getAction = function() {
  return /** @type {!proto.bucketeer.feature.FlagTrigger.Action} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bucketeer.feature.FlagTrigger.Action} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 trigger_times = 7;
 * @return {number}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getTriggerTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setTriggerTimes = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 last_triggered_at = 8;
 * @return {number}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getLastTriggeredAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setLastTriggeredAt = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string uuid = 9;
 * @return {string}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool disabled = 10;
 * @return {boolean}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool deleted = 11;
 * @return {boolean}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int64 created_at = 12;
 * @return {number}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 updated_at = 13;
 * @return {number}
 */
proto.bucketeer.feature.FlagTrigger.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.feature.FlagTrigger} returns this
 */
proto.bucketeer.feature.FlagTrigger.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


goog.object.extend(exports, proto.bucketeer.feature);
