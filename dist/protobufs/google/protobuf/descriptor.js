"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.MethodOptions_IdempotencyLevel = exports.FieldOptions_JSType = exports.FieldOptions_CType = exports.FileOptions_OptimizeMode = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto_Type = exports.protobufPackage = void 0;
/* tslint:disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const baseFileDescriptorSet = {};
const baseFileDescriptorProto = {
    name: "",
    package: "",
    dependency: "",
    publicDependency: 0,
    weakDependency: 0,
    syntax: ""
};
const baseDescriptorProto = {
    name: "",
    reservedName: ""
};
const baseDescriptorProto_ExtensionRange = {
    start: 0,
    end: 0
};
const baseDescriptorProto_ReservedRange = {
    start: 0,
    end: 0
};
const baseExtensionRangeOptions = {};
const baseFieldDescriptorProto = {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    proto3Optional: false
};
const baseOneofDescriptorProto = {
    name: ""
};
const baseEnumDescriptorProto = {
    name: "",
    reservedName: ""
};
const baseEnumDescriptorProto_EnumReservedRange = {
    start: 0,
    end: 0
};
const baseEnumValueDescriptorProto = {
    name: "",
    number: 0
};
const baseServiceDescriptorProto = {
    name: ""
};
const baseMethodDescriptorProto = {
    name: "",
    inputType: "",
    outputType: "",
    clientStreaming: false,
    serverStreaming: false
};
const baseFileOptions = {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: ""
};
const baseMessageOptions = {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false
};
const baseFieldOptions = {
    ctype: 0,
    packed: false,
    jstype: 0,
    lazy: false,
    deprecated: false,
    weak: false
};
const baseOneofOptions = {};
const baseEnumOptions = {
    allowAlias: false,
    deprecated: false
};
const baseEnumValueOptions = {
    deprecated: false
};
const baseServiceOptions = {
    deprecated: false
};
const baseMethodOptions = {
    deprecated: false,
    idempotencyLevel: 0
};
const baseUninterpretedOption = {
    identifierValue: "",
    positiveIntValue: Long.UZERO,
    negativeIntValue: Long.ZERO,
    doubleValue: 0,
    aggregateValue: ""
};
const baseUninterpretedOption_NamePart = {
    namePart: "",
    isExtension: false
};
const baseSourceCodeInfo = {};
const baseSourceCodeInfo_Location = {
    path: 0,
    span: 0,
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: ""
};
const baseGeneratedCodeInfo = {};
const baseGeneratedCodeInfo_Annotation = {
    path: 0,
    sourceFile: "",
    begin: 0,
    end: 0
};
exports.protobufPackage = "google.protobuf";
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /** TYPE_DOUBLE -  0 is reserved for errors.
     Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /** TYPE_INT64 -  Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /** TYPE_INT32 -  Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /** TYPE_GROUP -  Tag-delimited aggregate.
     Group type is deprecated and not supported in proto3. However, Proto3
     implementations should still be able to parse the group wire format and
     treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE -  Length-delimited aggregate.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES -  New in version 2.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 -  Uses ZigZag encoding.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 -  Uses ZigZag encoding.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
})(FieldDescriptorProto_Type = exports.FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = {}));
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL -  0 is reserved for errors
     */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
})(FieldDescriptorProto_Label = exports.FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = {}));
/**  Generated classes can be optimized for speed or code size.
 */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED -  Generate complete code for parsing, serialization,
     */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE -  etc.
     */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME -  Generate code using MessageLite and the lite runtime.
     */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
})(FileOptions_OptimizeMode = exports.FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = {}));
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING -  Default mode.
     */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
})(FieldOptions_CType = exports.FieldOptions_CType || (exports.FieldOptions_CType = {}));
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL -  Use the default type.
     */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING -  Use JavaScript strings.
     */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER -  Use JavaScript numbers.
     */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
})(FieldOptions_JSType = exports.FieldOptions_JSType || (exports.FieldOptions_JSType = {}));
/**  Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 or neither? HTTP based RPC implementation may choose GET verb for safe
 methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS -  implies idempotent
     */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT -  idempotent, but may have side effects
     */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
})(MethodOptions_IdempotencyLevel = exports.MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = {}));
exports.FileDescriptorSet = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.file) {
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFileDescriptorSet };
        message.file = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.FileDescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).string(message.package);
        for (const v of message.dependency) {
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (const v of message.publicDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (const v of message.weakDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.messageType) {
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.service) {
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined && message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined &&
            message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        writer.uint32(98).string(message.syntax);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFileDescriptorProto };
        message.dependency = [];
        message.publicDependency = [];
        message.weakDependency = [];
        message.messageType = [];
        message.enumType = [];
        message.service = [];
        message.extension = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.package = reader.string();
                    break;
                case 3:
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.publicDependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.weakDependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.DescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        for (const v of message.field) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.nestedType) {
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.extensionRange) {
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.oneofDecl) {
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined && message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescriptorProto };
        message.field = [];
        message.extension = [];
        message.nestedType = [];
        message.enumType = [];
        message.extensionRange = [];
        message.oneofDecl = [];
        message.reservedRange = [];
        message.reservedName = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.DescriptorProto_ExtensionRange = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.start);
        writer.uint32(16).int32(message.end);
        if (message.options !== undefined && message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDescriptorProto_ExtensionRange
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.DescriptorProto_ReservedRange = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.start);
        writer.uint32(16).int32(message.end);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDescriptorProto_ReservedRange
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.ExtensionRangeOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExtensionRangeOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.FieldDescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(24).int32(message.number);
        writer.uint32(32).int32(message.label);
        writer.uint32(40).int32(message.type);
        writer.uint32(50).string(message.typeName);
        writer.uint32(18).string(message.extendee);
        writer.uint32(58).string(message.defaultValue);
        writer.uint32(72).int32(message.oneofIndex);
        writer.uint32(82).string(message.jsonName);
        if (message.options !== undefined && message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        writer.uint32(136).bool(message.proto3Optional);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFieldDescriptorProto };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.proto3Optional = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.OneofDescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        if (message.options !== undefined && message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneofDescriptorProto };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.EnumDescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        for (const v of message.value) {
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined && message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnumDescriptorProto };
        message.value = [];
        message.reservedRange = [];
        message.reservedName = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.EnumDescriptorProto_EnumReservedRange = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.start);
        writer.uint32(16).int32(message.end);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEnumDescriptorProto_EnumReservedRange
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.EnumValueDescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(16).int32(message.number);
        if (message.options !== undefined && message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEnumValueDescriptorProto
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.ServiceDescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        for (const v of message.method) {
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined && message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServiceDescriptorProto };
        message.method = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.MethodDescriptorProto = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(18).string(message.inputType);
        writer.uint32(26).string(message.outputType);
        if (message.options !== undefined && message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(40).bool(message.clientStreaming);
        writer.uint32(48).bool(message.serverStreaming);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMethodDescriptorProto };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.FileOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.javaPackage);
        writer.uint32(66).string(message.javaOuterClassname);
        writer.uint32(80).bool(message.javaMultipleFiles);
        writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        writer.uint32(216).bool(message.javaStringCheckUtf8);
        writer.uint32(72).int32(message.optimizeFor);
        writer.uint32(90).string(message.goPackage);
        writer.uint32(128).bool(message.ccGenericServices);
        writer.uint32(136).bool(message.javaGenericServices);
        writer.uint32(144).bool(message.pyGenericServices);
        writer.uint32(336).bool(message.phpGenericServices);
        writer.uint32(184).bool(message.deprecated);
        writer.uint32(248).bool(message.ccEnableArenas);
        writer.uint32(290).string(message.objcClassPrefix);
        writer.uint32(298).string(message.csharpNamespace);
        writer.uint32(314).string(message.swiftPrefix);
        writer.uint32(322).string(message.phpClassPrefix);
        writer.uint32(330).string(message.phpNamespace);
        writer.uint32(354).string(message.phpMetadataNamespace);
        writer.uint32(362).string(message.rubyPackage);
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFileOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 42:
                    message.phpGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 39:
                    message.swiftPrefix = reader.string();
                    break;
                case 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case 41:
                    message.phpNamespace = reader.string();
                    break;
                case 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case 45:
                    message.rubyPackage = reader.string();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.MessageOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.messageSetWireFormat);
        writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        writer.uint32(24).bool(message.deprecated);
        writer.uint32(56).bool(message.mapEntry);
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.FieldOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).int32(message.ctype);
        writer.uint32(16).bool(message.packed);
        writer.uint32(48).int32(message.jstype);
        writer.uint32(40).bool(message.lazy);
        writer.uint32(24).bool(message.deprecated);
        writer.uint32(80).bool(message.weak);
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFieldOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.OneofOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneofOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.EnumOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(16).bool(message.allowAlias);
        writer.uint32(24).bool(message.deprecated);
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnumOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.EnumValueOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(8).bool(message.deprecated);
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnumValueOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.ServiceOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(264).bool(message.deprecated);
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServiceOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.MethodOptions = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(264).bool(message.deprecated);
        writer.uint32(272).int32(message.idempotencyLevel);
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMethodOptions };
        message.uninterpretedOption = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.UninterpretedOption = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.name) {
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).string(message.identifierValue);
        writer.uint32(32).uint64(message.positiveIntValue);
        writer.uint32(40).int64(message.negativeIntValue);
        writer.uint32(49).double(message.doubleValue);
        writer.uint32(58).bytes(message.stringValue);
        writer.uint32(66).string(message.aggregateValue);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUninterpretedOption };
        message.name = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = reader.uint64();
                    break;
                case 5:
                    message.negativeIntValue = reader.int64();
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.UninterpretedOption_NamePart = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).string(message.namePart);
        writer.uint32(16).bool(message.isExtension);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUninterpretedOption_NamePart
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.namePart = reader.string();
                    break;
                case 2:
                    message.isExtension = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.SourceCodeInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.location) {
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSourceCodeInfo };
        message.location = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.SourceCodeInfo_Location = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.span) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(26).string(message.leadingComments);
        writer.uint32(34).string(message.trailingComments);
        for (const v of message.leadingDetachedComments) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSourceCodeInfo_Location
        };
        message.path = [];
        message.span = [];
        message.leadingDetachedComments = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                    }
                    else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leadingComments = reader.string();
                    break;
                case 4:
                    message.trailingComments = reader.string();
                    break;
                case 6:
                    message.leadingDetachedComments.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.GeneratedCodeInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.annotation) {
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGeneratedCodeInfo };
        message.annotation = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
exports.GeneratedCodeInfo_Annotation = {
    encode(message, writer = minimal_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).string(message.sourceFile);
        writer.uint32(24).int32(message.begin);
        writer.uint32(32).int32(message.end);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGeneratedCodeInfo_Annotation
        };
        message.path = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.sourceFile = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }
};
//# sourceMappingURL=descriptor.js.map