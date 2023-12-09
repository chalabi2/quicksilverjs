import { LsmCaps, LsmCapsSDKType } from "./interchainstaking";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RegisterZoneProposal {
  title: string;
  description: string;
  connectionId: string;
  baseDenom: string;
  localDenom: string;
  accountPrefix: string;
  /** deprecated */
  multiSend: boolean;
  liquidityModule: boolean;
  messagesPerTx: Long;
  returnToSender: boolean;
  depositsEnabled: boolean;
  unbondingEnabled: boolean;
  decimals: Long;
  is118: boolean;
}
export interface RegisterZoneProposalSDKType {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  messages_per_tx: Long;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: Long;
  is_118: boolean;
}
export interface RegisterZoneProposalWithDeposit {
  title: string;
  description: string;
  connectionId: string;
  baseDenom: string;
  localDenom: string;
  accountPrefix: string;
  multiSend: boolean;
  liquidityModule: boolean;
  deposit: string;
  messagesPerTx: Long;
  returnToSender: boolean;
  depositsEnabled: boolean;
  unbondingEnabled: boolean;
  decimals: Long;
  is118: boolean;
}
export interface RegisterZoneProposalWithDepositSDKType {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  deposit: string;
  messages_per_tx: Long;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: Long;
  is_118: boolean;
}
export interface UpdateZoneProposal {
  title: string;
  description: string;
  chainId: string;
  changes: UpdateZoneValue[];
}
export interface UpdateZoneProposalSDKType {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueSDKType[];
}
export interface UpdateZoneProposalWithDeposit {
  title: string;
  description: string;
  chainId: string;
  changes: UpdateZoneValue[];
  deposit: string;
}
export interface UpdateZoneProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueSDKType[];
  deposit: string;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValue {
  key: string;
  value: string;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValueSDKType {
  key: string;
  value: string;
}
export interface MsgGovReopenChannel {
  title: string;
  description: string;
  connectionId: string;
  portId: string;
  authority: string;
}
export interface MsgGovReopenChannelSDKType {
  title: string;
  description: string;
  connection_id: string;
  port_id: string;
  authority: string;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponse {}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseSDKType {}
export interface MsgGovCloseChannel {
  title: string;
  description: string;
  channelId: string;
  portId: string;
  authority: string;
}
export interface MsgGovCloseChannelSDKType {
  title: string;
  description: string;
  channel_id: string;
  port_id: string;
  authority: string;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponse {}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseSDKType {}
export interface MsgGovSetLsmCaps {
  title: string;
  description: string;
  chainId: string;
  caps?: LsmCaps;
  authority: string;
}
export interface MsgGovSetLsmCapsSDKType {
  title: string;
  description: string;
  chain_id: string;
  caps?: LsmCapsSDKType;
  authority: string;
}
export interface MsgGovSetLsmCapsResponse {}
export interface MsgGovSetLsmCapsResponseSDKType {}
function createBaseRegisterZoneProposal(): RegisterZoneProposal {
  return {
    title: "",
    description: "",
    connectionId: "",
    baseDenom: "",
    localDenom: "",
    accountPrefix: "",
    multiSend: false,
    liquidityModule: false,
    messagesPerTx: Long.ZERO,
    returnToSender: false,
    depositsEnabled: false,
    unbondingEnabled: false,
    decimals: Long.ZERO,
    is118: false
  };
}
export const RegisterZoneProposal = {
  encode(message: RegisterZoneProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    if (message.localDenom !== "") {
      writer.uint32(42).string(message.localDenom);
    }
    if (message.accountPrefix !== "") {
      writer.uint32(50).string(message.accountPrefix);
    }
    if (message.multiSend === true) {
      writer.uint32(56).bool(message.multiSend);
    }
    if (message.liquidityModule === true) {
      writer.uint32(64).bool(message.liquidityModule);
    }
    if (!message.messagesPerTx.isZero()) {
      writer.uint32(72).int64(message.messagesPerTx);
    }
    if (message.returnToSender === true) {
      writer.uint32(80).bool(message.returnToSender);
    }
    if (message.depositsEnabled === true) {
      writer.uint32(88).bool(message.depositsEnabled);
    }
    if (message.unbondingEnabled === true) {
      writer.uint32(96).bool(message.unbondingEnabled);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(104).int64(message.decimals);
    }
    if (message.is118 === true) {
      writer.uint32(112).bool(message.is118);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterZoneProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.baseDenom = reader.string();
          break;
        case 5:
          message.localDenom = reader.string();
          break;
        case 6:
          message.accountPrefix = reader.string();
          break;
        case 7:
          message.multiSend = reader.bool();
          break;
        case 8:
          message.liquidityModule = reader.bool();
          break;
        case 9:
          message.messagesPerTx = (reader.int64() as Long);
          break;
        case 10:
          message.returnToSender = reader.bool();
          break;
        case 11:
          message.depositsEnabled = reader.bool();
          break;
        case 12:
          message.unbondingEnabled = reader.bool();
          break;
        case 13:
          message.decimals = (reader.int64() as Long);
          break;
        case 14:
          message.is118 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterZoneProposal>): RegisterZoneProposal {
    const message = createBaseRegisterZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connectionId = object.connectionId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.localDenom = object.localDenom ?? "";
    message.accountPrefix = object.accountPrefix ?? "";
    message.multiSend = object.multiSend ?? false;
    message.liquidityModule = object.liquidityModule ?? false;
    message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? Long.fromValue(object.messagesPerTx) : Long.ZERO;
    message.returnToSender = object.returnToSender ?? false;
    message.depositsEnabled = object.depositsEnabled ?? false;
    message.unbondingEnabled = object.unbondingEnabled ?? false;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    message.is118 = object.is118 ?? false;
    return message;
  }
};
function createBaseRegisterZoneProposalWithDeposit(): RegisterZoneProposalWithDeposit {
  return {
    title: "",
    description: "",
    connectionId: "",
    baseDenom: "",
    localDenom: "",
    accountPrefix: "",
    multiSend: false,
    liquidityModule: false,
    deposit: "",
    messagesPerTx: Long.ZERO,
    returnToSender: false,
    depositsEnabled: false,
    unbondingEnabled: false,
    decimals: Long.ZERO,
    is118: false
  };
}
export const RegisterZoneProposalWithDeposit = {
  encode(message: RegisterZoneProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    if (message.localDenom !== "") {
      writer.uint32(42).string(message.localDenom);
    }
    if (message.accountPrefix !== "") {
      writer.uint32(50).string(message.accountPrefix);
    }
    if (message.multiSend === true) {
      writer.uint32(56).bool(message.multiSend);
    }
    if (message.liquidityModule === true) {
      writer.uint32(64).bool(message.liquidityModule);
    }
    if (message.deposit !== "") {
      writer.uint32(74).string(message.deposit);
    }
    if (!message.messagesPerTx.isZero()) {
      writer.uint32(80).int64(message.messagesPerTx);
    }
    if (message.returnToSender === true) {
      writer.uint32(88).bool(message.returnToSender);
    }
    if (message.depositsEnabled === true) {
      writer.uint32(96).bool(message.depositsEnabled);
    }
    if (message.unbondingEnabled === true) {
      writer.uint32(104).bool(message.unbondingEnabled);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(112).int64(message.decimals);
    }
    if (message.is118 === true) {
      writer.uint32(120).bool(message.is118);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterZoneProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.baseDenom = reader.string();
          break;
        case 5:
          message.localDenom = reader.string();
          break;
        case 6:
          message.accountPrefix = reader.string();
          break;
        case 7:
          message.multiSend = reader.bool();
          break;
        case 8:
          message.liquidityModule = reader.bool();
          break;
        case 9:
          message.deposit = reader.string();
          break;
        case 10:
          message.messagesPerTx = (reader.int64() as Long);
          break;
        case 11:
          message.returnToSender = reader.bool();
          break;
        case 12:
          message.depositsEnabled = reader.bool();
          break;
        case 13:
          message.unbondingEnabled = reader.bool();
          break;
        case 14:
          message.decimals = (reader.int64() as Long);
          break;
        case 15:
          message.is118 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterZoneProposalWithDeposit>): RegisterZoneProposalWithDeposit {
    const message = createBaseRegisterZoneProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connectionId = object.connectionId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.localDenom = object.localDenom ?? "";
    message.accountPrefix = object.accountPrefix ?? "";
    message.multiSend = object.multiSend ?? false;
    message.liquidityModule = object.liquidityModule ?? false;
    message.deposit = object.deposit ?? "";
    message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? Long.fromValue(object.messagesPerTx) : Long.ZERO;
    message.returnToSender = object.returnToSender ?? false;
    message.depositsEnabled = object.depositsEnabled ?? false;
    message.unbondingEnabled = object.unbondingEnabled ?? false;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    message.is118 = object.is118 ?? false;
    return message;
  }
};
function createBaseUpdateZoneProposal(): UpdateZoneProposal {
  return {
    title: "",
    description: "",
    chainId: "",
    changes: []
  };
}
export const UpdateZoneProposal = {
  encode(message: UpdateZoneProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    for (const v of message.changes) {
      UpdateZoneValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateZoneProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.changes.push(UpdateZoneValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateZoneProposal>): UpdateZoneProposal {
    const message = createBaseUpdateZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
    return message;
  }
};
function createBaseUpdateZoneProposalWithDeposit(): UpdateZoneProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainId: "",
    changes: [],
    deposit: ""
  };
}
export const UpdateZoneProposalWithDeposit = {
  encode(message: UpdateZoneProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    for (const v of message.changes) {
      UpdateZoneValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateZoneProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.changes.push(UpdateZoneValue.decode(reader, reader.uint32()));
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateZoneProposalWithDeposit>): UpdateZoneProposalWithDeposit {
    const message = createBaseUpdateZoneProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
    message.deposit = object.deposit ?? "";
    return message;
  }
};
function createBaseUpdateZoneValue(): UpdateZoneValue {
  return {
    key: "",
    value: ""
  };
}
export const UpdateZoneValue = {
  encode(message: UpdateZoneValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateZoneValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateZoneValue>): UpdateZoneValue {
    const message = createBaseUpdateZoneValue();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseMsgGovReopenChannel(): MsgGovReopenChannel {
  return {
    title: "",
    description: "",
    connectionId: "",
    portId: "",
    authority: ""
  };
}
export const MsgGovReopenChannel = {
  encode(message: MsgGovReopenChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovReopenChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovReopenChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.portId = reader.string();
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgGovReopenChannel>): MsgGovReopenChannel {
    const message = createBaseMsgGovReopenChannel();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseMsgGovReopenChannelResponse(): MsgGovReopenChannelResponse {
  return {};
}
export const MsgGovReopenChannelResponse = {
  encode(_: MsgGovReopenChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovReopenChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovReopenChannelResponse();
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
  fromPartial(_: DeepPartial<MsgGovReopenChannelResponse>): MsgGovReopenChannelResponse {
    const message = createBaseMsgGovReopenChannelResponse();
    return message;
  }
};
function createBaseMsgGovCloseChannel(): MsgGovCloseChannel {
  return {
    title: "",
    description: "",
    channelId: "",
    portId: "",
    authority: ""
  };
}
export const MsgGovCloseChannel = {
  encode(message: MsgGovCloseChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovCloseChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.portId = reader.string();
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgGovCloseChannel>): MsgGovCloseChannel {
    const message = createBaseMsgGovCloseChannel();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseMsgGovCloseChannelResponse(): MsgGovCloseChannelResponse {
  return {};
}
export const MsgGovCloseChannelResponse = {
  encode(_: MsgGovCloseChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovCloseChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovCloseChannelResponse();
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
  fromPartial(_: DeepPartial<MsgGovCloseChannelResponse>): MsgGovCloseChannelResponse {
    const message = createBaseMsgGovCloseChannelResponse();
    return message;
  }
};
function createBaseMsgGovSetLsmCaps(): MsgGovSetLsmCaps {
  return {
    title: "",
    description: "",
    chainId: "",
    caps: undefined,
    authority: ""
  };
}
export const MsgGovSetLsmCaps = {
  encode(message: MsgGovSetLsmCaps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.caps !== undefined) {
      LsmCaps.encode(message.caps, writer.uint32(34).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovSetLsmCaps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetLsmCaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.caps = LsmCaps.decode(reader, reader.uint32());
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgGovSetLsmCaps>): MsgGovSetLsmCaps {
    const message = createBaseMsgGovSetLsmCaps();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.caps = object.caps !== undefined && object.caps !== null ? LsmCaps.fromPartial(object.caps) : undefined;
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseMsgGovSetLsmCapsResponse(): MsgGovSetLsmCapsResponse {
  return {};
}
export const MsgGovSetLsmCapsResponse = {
  encode(_: MsgGovSetLsmCapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovSetLsmCapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetLsmCapsResponse();
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
  fromPartial(_: DeepPartial<MsgGovSetLsmCapsResponse>): MsgGovSetLsmCapsResponse {
    const message = createBaseMsgGovSetLsmCapsResponse();
    return message;
  }
};