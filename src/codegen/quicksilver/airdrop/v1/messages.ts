import { Proof, ProofSDKType } from "../../claimsmanager/v1/claimsmanager";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgClaim {
  chainId: string;
  action: Long;
  address: string;
  proofs: Proof[];
}
export interface MsgClaimSDKType {
  chain_id: string;
  action: Long;
  address: string;
  proofs: ProofSDKType[];
}
export interface MsgClaimResponse {
  amount: Long;
}
export interface MsgClaimResponseSDKType {
  amount: Long;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpend {
  authority: string;
  toAddress: string;
  amount: Coin[];
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpendSDKType {
  authority: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponse {}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponseSDKType {}
function createBaseMsgClaim(): MsgClaim {
  return {
    chainId: "",
    action: Long.ZERO,
    address: "",
    proofs: []
  };
}
export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.action.isZero()) {
      writer.uint32(16).int64(message.action);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    for (const v of message.proofs) {
      Proof.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.action = (reader.int64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.proofs.push(Proof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.chainId = object.chainId ?? "";
    message.action = object.action !== undefined && object.action !== null ? Long.fromValue(object.action) : Long.ZERO;
    message.address = object.address ?? "";
    message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    amount: Long.UZERO
  };
}
export const MsgClaimResponse = {
  encode(message: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseMsgIncentivePoolSpend(): MsgIncentivePoolSpend {
  return {
    authority: "",
    toAddress: "",
    amount: []
  };
}
export const MsgIncentivePoolSpend = {
  encode(message: MsgIncentivePoolSpend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncentivePoolSpend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivePoolSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgIncentivePoolSpend>): MsgIncentivePoolSpend {
    const message = createBaseMsgIncentivePoolSpend();
    message.authority = object.authority ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgIncentivePoolSpendResponse(): MsgIncentivePoolSpendResponse {
  return {};
}
export const MsgIncentivePoolSpendResponse = {
  encode(_: MsgIncentivePoolSpendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncentivePoolSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivePoolSpendResponse();
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
  fromPartial(_: DeepPartial<MsgIncentivePoolSpendResponse>): MsgIncentivePoolSpendResponse {
    const message = createBaseMsgIncentivePoolSpendResponse();
    return message;
  }
};