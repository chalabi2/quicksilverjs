import { ProofOps, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ClaimType {
  /** ClaimTypeUndefined - Undefined action (per protobuf spec) */
  ClaimTypeUndefined = 0,
  ClaimTypeLiquidToken = 1,
  ClaimTypeOsmosisPool = 2,
  ClaimTypeCrescentPool = 3,
  ClaimTypeSifchainPool = 4,
  ClaimTypeUmeeToken = 5,
  UNRECOGNIZED = -1,
}
export const ClaimTypeSDKType = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "ClaimTypeUndefined":
      return ClaimType.ClaimTypeUndefined;
    case 1:
    case "ClaimTypeLiquidToken":
      return ClaimType.ClaimTypeLiquidToken;
    case 2:
    case "ClaimTypeOsmosisPool":
      return ClaimType.ClaimTypeOsmosisPool;
    case 3:
    case "ClaimTypeCrescentPool":
      return ClaimType.ClaimTypeCrescentPool;
    case 4:
    case "ClaimTypeSifchainPool":
      return ClaimType.ClaimTypeSifchainPool;
    case 5:
    case "ClaimTypeUmeeToken":
      return ClaimType.ClaimTypeUmeeToken;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.ClaimTypeUndefined:
      return "ClaimTypeUndefined";
    case ClaimType.ClaimTypeLiquidToken:
      return "ClaimTypeLiquidToken";
    case ClaimType.ClaimTypeOsmosisPool:
      return "ClaimTypeOsmosisPool";
    case ClaimType.ClaimTypeCrescentPool:
      return "ClaimTypeCrescentPool";
    case ClaimType.ClaimTypeSifchainPool:
      return "ClaimTypeSifchainPool";
    case ClaimType.ClaimTypeUmeeToken:
      return "ClaimTypeUmeeToken";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params holds parameters for the claimsmanager module. */
export interface Params {}
/** Params holds parameters for the claimsmanager module. */
export interface ParamsSDKType {}
/** Claim define the users claim for holding assets within a given zone. */
export interface Claim {
  userAddress: string;
  chainId: string;
  module: ClaimType;
  sourceChainId: string;
  amount: Long;
}
/** Claim define the users claim for holding assets within a given zone. */
export interface ClaimSDKType {
  user_address: string;
  chain_id: string;
  module: ClaimType;
  source_chain_id: string;
  amount: Long;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface Proof {
  key: Uint8Array;
  data: Uint8Array;
  proofOps?: ProofOps;
  height: Long;
  proofType: string;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface ProofSDKType {
  key: Uint8Array;
  data: Uint8Array;
  proof_ops?: ProofOpsSDKType;
  height: Long;
  proof_type: string;
}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  }
};
function createBaseClaim(): Claim {
  return {
    userAddress: "",
    chainId: "",
    module: 0,
    sourceChainId: "",
    amount: Long.UZERO
  };
}
export const Claim = {
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.module !== 0) {
      writer.uint32(24).int32(message.module);
    }
    if (message.sourceChainId !== "") {
      writer.uint32(34).string(message.sourceChainId);
    }
    if (!message.amount.isZero()) {
      writer.uint32(40).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.module = (reader.int32() as any);
          break;
        case 4:
          message.sourceChainId = reader.string();
          break;
        case 5:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Claim>): Claim {
    const message = createBaseClaim();
    message.userAddress = object.userAddress ?? "";
    message.chainId = object.chainId ?? "";
    message.module = object.module ?? 0;
    message.sourceChainId = object.sourceChainId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseProof(): Proof {
  return {
    key: new Uint8Array(),
    data: new Uint8Array(),
    proofOps: undefined,
    height: Long.ZERO,
    proofType: ""
  };
}
export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(26).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    if (message.proofType !== "") {
      writer.uint32(42).string(message.proofType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 4:
          message.height = (reader.int64() as Long);
          break;
        case 5:
          message.proofType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.proofType = object.proofType ?? "";
    return message;
  }
};