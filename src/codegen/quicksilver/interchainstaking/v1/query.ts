import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Zone, ZoneSDKType, Validator, ValidatorSDKType, DelegatorIntent, DelegatorIntentSDKType, Delegation, DelegationSDKType, Receipt, ReceiptSDKType, WithdrawalRecord, WithdrawalRecordSDKType, UnbondingRecord, UnbondingRecordSDKType, RedelegationRecord, RedelegationRecordSDKType } from "./interchainstaking";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Statistics {
  chainId: string;
  deposited: Long;
  deposits: Long;
  depositors: Long;
  delegated: Long;
  supply: Long;
  distanceToTarget: string;
}
export interface StatisticsSDKType {
  chain_id: string;
  deposited: Long;
  deposits: Long;
  depositors: Long;
  delegated: Long;
  supply: Long;
  distance_to_target: string;
}
export interface QueryZonesRequest {
  pagination?: PageRequest;
}
export interface QueryZonesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryZonesResponse {
  zones: Zone[];
  stats: Statistics[];
  pagination?: PageResponse;
}
export interface QueryZonesResponseSDKType {
  zones: ZoneSDKType[];
  stats: StatisticsSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryZoneRequest {
  chainId: string;
}
export interface QueryZoneRequestSDKType {
  chain_id: string;
}
export interface QueryZoneResponse {
  zone?: Zone;
  stats?: Statistics;
}
export interface QueryZoneResponseSDKType {
  zone?: ZoneSDKType;
  stats?: StatisticsSDKType;
}
export interface QueryZoneValidatorsRequest {
  chainId: string;
  status: string;
  pagination?: PageRequest;
}
export interface QueryZoneValidatorsRequestSDKType {
  chain_id: string;
  status: string;
  pagination?: PageRequestSDKType;
}
export interface QueryZoneValidatorsResponse {
  validators: Validator[];
  pagination?: PageResponse;
}
export interface QueryZoneValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequest {
  chainId: string;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequestSDKType {
  chain_id: string;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponse {
  depositAccountAddress: string;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponseSDKType {
  deposit_account_address: string;
}
export interface QueryDelegatorIntentRequest {
  chainId: string;
  delegatorAddress: string;
}
export interface QueryDelegatorIntentRequestSDKType {
  chain_id: string;
  delegator_address: string;
}
export interface QueryDelegatorIntentResponse {
  intent?: DelegatorIntent;
}
export interface QueryDelegatorIntentResponseSDKType {
  intent?: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsRequest {
  delegatorAddress: string;
}
export interface QueryDelegatorIntentsRequestSDKType {
  delegator_address: string;
}
export interface DelegatorIntentsResponse {
  chainId: string;
  intent?: DelegatorIntent;
}
export interface DelegatorIntentsResponseSDKType {
  chain_id: string;
  intent?: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsResponse {
  intents: DelegatorIntentsResponse[];
}
export interface QueryDelegatorIntentsResponseSDKType {
  intents: DelegatorIntentsResponseSDKType[];
}
export interface QueryDelegationsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryDelegationsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryDelegationsResponse {
  delegations: Delegation[];
  tvl: Long;
  pagination?: PageResponse;
}
export interface QueryDelegationsResponseSDKType {
  delegations: DelegationSDKType[];
  tvl: Long;
  pagination?: PageResponseSDKType;
}
export interface QueryReceiptsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryReceiptsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryReceiptsResponse {
  receipts: Receipt[];
  pagination?: PageResponse;
}
export interface QueryReceiptsResponseSDKType {
  receipts: ReceiptSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryTxStatusRequest {
  chainId: string;
  txHash: string;
}
export interface QueryTxStatusRequestSDKType {
  chain_id: string;
  tx_hash: string;
}
export interface QueryTxStatusResponse {
  receipt?: Receipt;
}
export interface QueryTxStatusResponseSDKType {
  receipt?: ReceiptSDKType;
}
export interface QueryWithdrawalRecordsRequest {
  chainId: string;
  delegatorAddress: string;
  pagination?: PageRequest;
}
export interface QueryWithdrawalRecordsRequestSDKType {
  chain_id: string;
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryWithdrawalRecordsResponse {
  withdrawals: WithdrawalRecord[];
  pagination?: PageResponse;
}
export interface QueryWithdrawalRecordsResponseSDKType {
  withdrawals: WithdrawalRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryUserWithdrawalRecordsRequest {
  userAddress: string;
  pagination?: PageRequest;
}
export interface QueryUserWithdrawalRecordsRequestSDKType {
  user_address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryUnbondingRecordsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryUnbondingRecordsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryUnbondingRecordsResponse {
  unbondings: UnbondingRecord[];
  pagination?: PageResponse;
}
export interface QueryUnbondingRecordsResponseSDKType {
  unbondings: UnbondingRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryRedelegationRecordsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryRedelegationRecordsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryRedelegationRecordsResponse {
  redelegations: RedelegationRecord[];
  pagination?: PageResponse;
}
export interface QueryRedelegationRecordsResponseSDKType {
  redelegations: RedelegationRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryMappedAccountsRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryMappedAccountsRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntry {
  key: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse {
  RemoteAddressMap: {
    [key: string]: Uint8Array;
  };
  pagination?: PageResponse;
}
export interface QueryMappedAccountsResponseSDKType {
  RemoteAddressMap: {
    [key: string]: Uint8Array;
  };
  pagination?: PageResponseSDKType;
}
function createBaseStatistics(): Statistics {
  return {
    chainId: "",
    deposited: Long.ZERO,
    deposits: Long.ZERO,
    depositors: Long.ZERO,
    delegated: Long.ZERO,
    supply: Long.ZERO,
    distanceToTarget: ""
  };
}
export const Statistics = {
  encode(message: Statistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.deposited.isZero()) {
      writer.uint32(16).int64(message.deposited);
    }
    if (!message.deposits.isZero()) {
      writer.uint32(24).int64(message.deposits);
    }
    if (!message.depositors.isZero()) {
      writer.uint32(32).int64(message.depositors);
    }
    if (!message.delegated.isZero()) {
      writer.uint32(40).int64(message.delegated);
    }
    if (!message.supply.isZero()) {
      writer.uint32(48).int64(message.supply);
    }
    if (message.distanceToTarget !== "") {
      writer.uint32(58).string(message.distanceToTarget);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Statistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.deposited = (reader.int64() as Long);
          break;
        case 3:
          message.deposits = (reader.int64() as Long);
          break;
        case 4:
          message.depositors = (reader.int64() as Long);
          break;
        case 5:
          message.delegated = (reader.int64() as Long);
          break;
        case 6:
          message.supply = (reader.int64() as Long);
          break;
        case 7:
          message.distanceToTarget = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Statistics>): Statistics {
    const message = createBaseStatistics();
    message.chainId = object.chainId ?? "";
    message.deposited = object.deposited !== undefined && object.deposited !== null ? Long.fromValue(object.deposited) : Long.ZERO;
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Long.fromValue(object.deposits) : Long.ZERO;
    message.depositors = object.depositors !== undefined && object.depositors !== null ? Long.fromValue(object.depositors) : Long.ZERO;
    message.delegated = object.delegated !== undefined && object.delegated !== null ? Long.fromValue(object.delegated) : Long.ZERO;
    message.supply = object.supply !== undefined && object.supply !== null ? Long.fromValue(object.supply) : Long.ZERO;
    message.distanceToTarget = object.distanceToTarget ?? "";
    return message;
  }
};
function createBaseQueryZonesRequest(): QueryZonesRequest {
  return {
    pagination: undefined
  };
}
export const QueryZonesRequest = {
  encode(message: QueryZonesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZonesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZonesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryZonesRequest>): QueryZonesRequest {
    const message = createBaseQueryZonesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryZonesResponse(): QueryZonesResponse {
  return {
    zones: [],
    stats: [],
    pagination: undefined
  };
}
export const QueryZonesResponse = {
  encode(message: QueryZonesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.zones) {
      Zone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stats) {
      Statistics.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZonesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZonesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zones.push(Zone.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stats.push(Statistics.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryZonesResponse>): QueryZonesResponse {
    const message = createBaseQueryZonesResponse();
    message.zones = object.zones?.map(e => Zone.fromPartial(e)) || [];
    message.stats = object.stats?.map(e => Statistics.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryZoneRequest(): QueryZoneRequest {
  return {
    chainId: ""
  };
}
export const QueryZoneRequest = {
  encode(message: QueryZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryZoneRequest>): QueryZoneRequest {
    const message = createBaseQueryZoneRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBaseQueryZoneResponse(): QueryZoneResponse {
  return {
    zone: undefined,
    stats: undefined
  };
}
export const QueryZoneResponse = {
  encode(message: QueryZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zone !== undefined) {
      Zone.encode(message.zone, writer.uint32(10).fork()).ldelim();
    }
    if (message.stats !== undefined) {
      Statistics.encode(message.stats, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zone = Zone.decode(reader, reader.uint32());
          break;
        case 2:
          message.stats = Statistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryZoneResponse>): QueryZoneResponse {
    const message = createBaseQueryZoneResponse();
    message.zone = object.zone !== undefined && object.zone !== null ? Zone.fromPartial(object.zone) : undefined;
    message.stats = object.stats !== undefined && object.stats !== null ? Statistics.fromPartial(object.stats) : undefined;
    return message;
  }
};
function createBaseQueryZoneValidatorsRequest(): QueryZoneValidatorsRequest {
  return {
    chainId: "",
    status: "",
    pagination: undefined
  };
}
export const QueryZoneValidatorsRequest = {
  encode(message: QueryZoneValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryZoneValidatorsRequest>): QueryZoneValidatorsRequest {
    const message = createBaseQueryZoneValidatorsRequest();
    message.chainId = object.chainId ?? "";
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryZoneValidatorsResponse(): QueryZoneValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryZoneValidatorsResponse = {
  encode(message: QueryZoneValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryZoneValidatorsResponse>): QueryZoneValidatorsResponse {
    const message = createBaseQueryZoneValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDepositAccountForChainRequest(): QueryDepositAccountForChainRequest {
  return {
    chainId: ""
  };
}
export const QueryDepositAccountForChainRequest = {
  encode(message: QueryDepositAccountForChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositAccountForChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositAccountForChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositAccountForChainRequest>): QueryDepositAccountForChainRequest {
    const message = createBaseQueryDepositAccountForChainRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBaseQueryDepositAccountForChainResponse(): QueryDepositAccountForChainResponse {
  return {
    depositAccountAddress: ""
  };
}
export const QueryDepositAccountForChainResponse = {
  encode(message: QueryDepositAccountForChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAccountAddress !== "") {
      writer.uint32(10).string(message.depositAccountAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositAccountForChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositAccountForChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositAccountForChainResponse>): QueryDepositAccountForChainResponse {
    const message = createBaseQueryDepositAccountForChainResponse();
    message.depositAccountAddress = object.depositAccountAddress ?? "";
    return message;
  }
};
function createBaseQueryDelegatorIntentRequest(): QueryDelegatorIntentRequest {
  return {
    chainId: "",
    delegatorAddress: ""
  };
}
export const QueryDelegatorIntentRequest = {
  encode(message: QueryDelegatorIntentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentRequest>): QueryDelegatorIntentRequest {
    const message = createBaseQueryDelegatorIntentRequest();
    message.chainId = object.chainId ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  }
};
function createBaseQueryDelegatorIntentResponse(): QueryDelegatorIntentResponse {
  return {
    intent: undefined
  };
}
export const QueryDelegatorIntentResponse = {
  encode(message: QueryDelegatorIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.intent !== undefined) {
      DelegatorIntent.encode(message.intent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intent = DelegatorIntent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentResponse>): QueryDelegatorIntentResponse {
    const message = createBaseQueryDelegatorIntentResponse();
    message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorIntentsRequest(): QueryDelegatorIntentsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorIntentsRequest = {
  encode(message: QueryDelegatorIntentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentsRequest>): QueryDelegatorIntentsRequest {
    const message = createBaseQueryDelegatorIntentsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  }
};
function createBaseDelegatorIntentsResponse(): DelegatorIntentsResponse {
  return {
    chainId: "",
    intent: undefined
  };
}
export const DelegatorIntentsResponse = {
  encode(message: DelegatorIntentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.intent !== undefined) {
      DelegatorIntent.encode(message.intent, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorIntentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorIntentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.intent = DelegatorIntent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DelegatorIntentsResponse>): DelegatorIntentsResponse {
    const message = createBaseDelegatorIntentsResponse();
    message.chainId = object.chainId ?? "";
    message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorIntentsResponse(): QueryDelegatorIntentsResponse {
  return {
    intents: []
  };
}
export const QueryDelegatorIntentsResponse = {
  encode(message: QueryDelegatorIntentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.intents) {
      DelegatorIntentsResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intents.push(DelegatorIntentsResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentsResponse>): QueryDelegatorIntentsResponse {
    const message = createBaseQueryDelegatorIntentsResponse();
    message.intents = object.intents?.map(e => DelegatorIntentsResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryDelegationsRequest(): QueryDelegationsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryDelegationsRequest = {
  encode(message: QueryDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationsRequest>): QueryDelegationsRequest {
    const message = createBaseQueryDelegationsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegationsResponse(): QueryDelegationsResponse {
  return {
    delegations: [],
    tvl: Long.ZERO,
    pagination: undefined
  };
}
export const QueryDelegationsResponse = {
  encode(message: QueryDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.tvl.isZero()) {
      writer.uint32(16).int64(message.tvl);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tvl = (reader.int64() as Long);
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationsResponse>): QueryDelegationsResponse {
    const message = createBaseQueryDelegationsResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.tvl = object.tvl !== undefined && object.tvl !== null ? Long.fromValue(object.tvl) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryReceiptsRequest(): QueryReceiptsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryReceiptsRequest = {
  encode(message: QueryReceiptsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReceiptsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceiptsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReceiptsRequest>): QueryReceiptsRequest {
    const message = createBaseQueryReceiptsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryReceiptsResponse(): QueryReceiptsResponse {
  return {
    receipts: [],
    pagination: undefined
  };
}
export const QueryReceiptsResponse = {
  encode(message: QueryReceiptsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReceiptsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceiptsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receipts.push(Receipt.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReceiptsResponse>): QueryReceiptsResponse {
    const message = createBaseQueryReceiptsResponse();
    message.receipts = object.receipts?.map(e => Receipt.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryTxStatusRequest(): QueryTxStatusRequest {
  return {
    chainId: "",
    txHash: ""
  };
}
export const QueryTxStatusRequest = {
  encode(message: QueryTxStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTxStatusRequest>): QueryTxStatusRequest {
    const message = createBaseQueryTxStatusRequest();
    message.chainId = object.chainId ?? "";
    message.txHash = object.txHash ?? "";
    return message;
  }
};
function createBaseQueryTxStatusResponse(): QueryTxStatusResponse {
  return {
    receipt: undefined
  };
}
export const QueryTxStatusResponse = {
  encode(message: QueryTxStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receipt !== undefined) {
      Receipt.encode(message.receipt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receipt = Receipt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTxStatusResponse>): QueryTxStatusResponse {
    const message = createBaseQueryTxStatusResponse();
    message.receipt = object.receipt !== undefined && object.receipt !== null ? Receipt.fromPartial(object.receipt) : undefined;
    return message;
  }
};
function createBaseQueryWithdrawalRecordsRequest(): QueryWithdrawalRecordsRequest {
  return {
    chainId: "",
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryWithdrawalRecordsRequest = {
  encode(message: QueryWithdrawalRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawalRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWithdrawalRecordsRequest>): QueryWithdrawalRecordsRequest {
    const message = createBaseQueryWithdrawalRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryWithdrawalRecordsResponse(): QueryWithdrawalRecordsResponse {
  return {
    withdrawals: [],
    pagination: undefined
  };
}
export const QueryWithdrawalRecordsResponse = {
  encode(message: QueryWithdrawalRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawals) {
      WithdrawalRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawalRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawals.push(WithdrawalRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWithdrawalRecordsResponse>): QueryWithdrawalRecordsResponse {
    const message = createBaseQueryWithdrawalRecordsResponse();
    message.withdrawals = object.withdrawals?.map(e => WithdrawalRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryUserWithdrawalRecordsRequest(): QueryUserWithdrawalRecordsRequest {
  return {
    userAddress: "",
    pagination: undefined
  };
}
export const QueryUserWithdrawalRecordsRequest = {
  encode(message: QueryUserWithdrawalRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserWithdrawalRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserWithdrawalRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserWithdrawalRecordsRequest>): QueryUserWithdrawalRecordsRequest {
    const message = createBaseQueryUserWithdrawalRecordsRequest();
    message.userAddress = object.userAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryUnbondingRecordsRequest(): QueryUnbondingRecordsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryUnbondingRecordsRequest = {
  encode(message: QueryUnbondingRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest {
    const message = createBaseQueryUnbondingRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryUnbondingRecordsResponse(): QueryUnbondingRecordsResponse {
  return {
    unbondings: [],
    pagination: undefined
  };
}
export const QueryUnbondingRecordsResponse = {
  encode(message: QueryUnbondingRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(UnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRedelegationRecordsRequest(): QueryRedelegationRecordsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryRedelegationRecordsRequest = {
  encode(message: QueryRedelegationRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRedelegationRecordsRequest>): QueryRedelegationRecordsRequest {
    const message = createBaseQueryRedelegationRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRedelegationRecordsResponse(): QueryRedelegationRecordsResponse {
  return {
    redelegations: [],
    pagination: undefined
  };
}
export const QueryRedelegationRecordsResponse = {
  encode(message: QueryRedelegationRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegations) {
      RedelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegations.push(RedelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRedelegationRecordsResponse>): QueryRedelegationRecordsResponse {
    const message = createBaseQueryRedelegationRecordsResponse();
    message.redelegations = object.redelegations?.map(e => RedelegationRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryMappedAccountsRequest(): QueryMappedAccountsRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryMappedAccountsRequest = {
  encode(message: QueryMappedAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMappedAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMappedAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMappedAccountsRequest>): QueryMappedAccountsRequest {
    const message = createBaseQueryMappedAccountsRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry(): QueryMappedAccountsResponse_RemoteAddressMapEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const QueryMappedAccountsResponse_RemoteAddressMapEntry = {
  encode(message: QueryMappedAccountsResponse_RemoteAddressMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMappedAccountsResponse_RemoteAddressMapEntry>): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryMappedAccountsResponse(): QueryMappedAccountsResponse {
  return {
    RemoteAddressMap: {},
    pagination: undefined
  };
}
export const QueryMappedAccountsResponse = {
  encode(message: QueryMappedAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.RemoteAddressMap).forEach(([key, value]) => {
      QueryMappedAccountsResponse_RemoteAddressMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMappedAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMappedAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.RemoteAddressMap[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMappedAccountsResponse>): QueryMappedAccountsResponse {
    const message = createBaseQueryMappedAccountsResponse();
    message.RemoteAddressMap = Object.entries(object.RemoteAddressMap ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};