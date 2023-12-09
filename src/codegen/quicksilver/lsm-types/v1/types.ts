import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export enum TokenizeShareLockStatus {
  /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
  TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED = 0,
  /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_LOCKED = 1,
  /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED = 2,
  /**
   * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
   * will be able to tokenize shortly (after 1 unbonding period)
   */
  TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING = 3,
  UNRECOGNIZED = -1,
}
export const TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
export function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenizeShareLockStatus.UNRECOGNIZED;
  }
}
export function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string {
  switch (object) {
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    case TokenizeShareLockStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordReward {
  recordId: Long;
  reward: DecCoin[];
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordRewardSDKType {
  record_id: Long;
  reward: DecCoinSDKType[];
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
  ownerAddress: string;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequestSDKType {
  owner_address: string;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: TokenizeShareRecordReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseSDKType {
  rewards: TokenizeShareRecordRewardSDKType[];
  total: DecCoinSDKType[];
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordReward {
  ownerAddress: string;
  recordId: Long;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardSDKType {
  owner_address: string;
  record_id: Long;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
  ownerAddress: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardSDKType {
  owner_address: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  id: Long;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestSDKType {
  id: Long;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record?: TokenizeShareRecord;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseSDKType {
  record?: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record?: TokenizeShareRecord;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseSDKType {
  record?: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestSDKType {
  owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseSDKType {
  records: TokenizeShareRecordSDKType[];
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseSDKType {
  records: TokenizeShareRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  id: Long;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseSDKType {
  id: Long;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value?: Coin;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseSDKType {
  value?: CoinSDKType;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  tokens: string;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseSDKType {
  tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  address: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoSDKType {
  address: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expirationTime: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseSDKType {
  status: string;
  expiration_time: string;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecord {
  id: Long;
  owner: string;
  /** module account take the role of delegator */
  moduleAccount: string;
  /** validator delegated to for tokenize share record creation */
  validator: string;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecordSDKType {
  id: Long;
  owner: string;
  module_account: string;
  validator: string;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizations {
  addresses: string[];
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizationsSDKType {
  addresses: string[];
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidator {
  validatorAddress: string;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidatorSDKType {
  validator_address: string;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponse {}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseSDKType {}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
  tokenizedShareOwner: string;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesSDKType {
  delegator_address: string;
  validator_address: string;
  amount?: CoinSDKType;
  tokenized_share_owner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
  amount?: Coin;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
  amount?: CoinSDKType;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
  delegatorAddress: string;
  amount?: Coin;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesSDKType {
  delegator_address: string;
  amount?: CoinSDKType;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
  amount?: Coin;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseSDKType {
  amount?: CoinSDKType;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
  tokenizeShareRecordId: Long;
  sender: string;
  newOwner: string;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordSDKType {
  tokenize_share_record_id: Long;
  sender: string;
  new_owner: string;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponse {}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseSDKType {}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
  delegatorAddress: string;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
  delegatorAddress: string;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
  completionTime?: Date;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseSDKType {
  completion_time?: Date;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBond {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBondSDKType {
  delegator_address: string;
  validator_address: string;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponse {}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {}
function createBaseTokenizeShareRecordReward(): TokenizeShareRecordReward {
  return {
    recordId: Long.UZERO,
    reward: []
  };
}
export const TokenizeShareRecordReward = {
  encode(message: TokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.recordId.isZero()) {
      writer.uint32(8).uint64(message.recordId);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = (reader.uint64() as Long);
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenizeShareRecordReward>): TokenizeShareRecordReward {
    const message = createBaseTokenizeShareRecordReward();
    message.recordId = object.recordId !== undefined && object.recordId !== null ? Long.fromValue(object.recordId) : Long.UZERO;
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTokenizeShareRecordRewardRequest(): QueryTokenizeShareRecordRewardRequest {
  return {
    ownerAddress: ""
  };
}
export const QueryTokenizeShareRecordRewardRequest = {
  encode(message: QueryTokenizeShareRecordRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  }
};
function createBaseQueryTokenizeShareRecordRewardResponse(): QueryTokenizeShareRecordRewardResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryTokenizeShareRecordRewardResponse = {
  encode(message: QueryTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(TokenizeShareRecordReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgWithdrawTokenizeShareRecordReward(): MsgWithdrawTokenizeShareRecordReward {
  return {
    ownerAddress: "",
    recordId: Long.UZERO
  };
}
export const MsgWithdrawTokenizeShareRecordReward = {
  encode(message: MsgWithdrawTokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (!message.recordId.isZero()) {
      writer.uint32(16).uint64(message.recordId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.recordId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? Long.fromValue(object.recordId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse(): MsgWithdrawTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawTokenizeShareRecordRewardResponse = {
  encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordReward(): MsgWithdrawAllTokenizeShareRecordReward {
  return {
    ownerAddress: ""
  };
}
export const MsgWithdrawAllTokenizeShareRecordReward = {
  encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse(): MsgWithdrawAllTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  }
};
function createBaseQueryTokenizeShareRecordByIdRequest(): QueryTokenizeShareRecordByIdRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryTokenizeShareRecordByIdRequest = {
  encode(message: QueryTokenizeShareRecordByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTokenizeShareRecordByIdResponse(): QueryTokenizeShareRecordByIdResponse {
  return {
    record: undefined
  };
}
export const QueryTokenizeShareRecordByIdResponse = {
  encode(message: QueryTokenizeShareRecordByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  }
};
function createBaseQueryTokenizeShareRecordByDenomRequest(): QueryTokenizeShareRecordByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTokenizeShareRecordByDenomRequest = {
  encode(message: QueryTokenizeShareRecordByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryTokenizeShareRecordByDenomResponse(): QueryTokenizeShareRecordByDenomResponse {
  return {
    record: undefined
  };
}
export const QueryTokenizeShareRecordByDenomResponse = {
  encode(message: QueryTokenizeShareRecordByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  }
};
function createBaseQueryTokenizeShareRecordsOwnedRequest(): QueryTokenizeShareRecordsOwnedRequest {
  return {
    owner: ""
  };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
  encode(message: QueryTokenizeShareRecordsOwnedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseQueryTokenizeShareRecordsOwnedResponse(): QueryTokenizeShareRecordsOwnedResponse {
  return {
    records: []
  };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
  encode(message: QueryTokenizeShareRecordsOwnedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAllTokenizeShareRecordsRequest(): QueryAllTokenizeShareRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsRequest = {
  encode(message: QueryAllTokenizeShareRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
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
  fromPartial(object: DeepPartial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllTokenizeShareRecordsResponse(): QueryAllTokenizeShareRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsResponse = {
  encode(message: QueryAllTokenizeShareRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryLastTokenizeShareRecordIdRequest(): QueryLastTokenizeShareRecordIdRequest {
  return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
  encode(_: QueryLastTokenizeShareRecordIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
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
  fromPartial(_: DeepPartial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  }
};
function createBaseQueryLastTokenizeShareRecordIdResponse(): QueryLastTokenizeShareRecordIdResponse {
  return {
    id: Long.UZERO
  };
}
export const QueryLastTokenizeShareRecordIdResponse = {
  encode(message: QueryLastTokenizeShareRecordIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTotalTokenizeSharedAssetsRequest(): QueryTotalTokenizeSharedAssetsRequest {
  return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
  encode(_: QueryTotalTokenizeSharedAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
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
  fromPartial(_: DeepPartial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  }
};
function createBaseQueryTotalTokenizeSharedAssetsResponse(): QueryTotalTokenizeSharedAssetsResponse {
  return {
    value: undefined
  };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
  encode(message: QueryTotalTokenizeSharedAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseQueryTotalLiquidStaked(): QueryTotalLiquidStaked {
  return {};
}
export const QueryTotalLiquidStaked = {
  encode(_: QueryTotalLiquidStaked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidStaked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStaked();
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
  fromPartial(_: DeepPartial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  }
};
function createBaseQueryTotalLiquidStakedResponse(): QueryTotalLiquidStakedResponse {
  return {
    tokens: ""
  };
}
export const QueryTotalLiquidStakedResponse = {
  encode(message: QueryTotalLiquidStakedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidStakedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  }
};
function createBaseQueryTokenizeShareLockInfo(): QueryTokenizeShareLockInfo {
  return {
    address: ""
  };
}
export const QueryTokenizeShareLockInfo = {
  encode(message: QueryTokenizeShareLockInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareLockInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryTokenizeShareLockInfoResponse(): QueryTokenizeShareLockInfoResponse {
  return {
    status: "",
    expirationTime: ""
  };
}
export const QueryTokenizeShareLockInfoResponse = {
  encode(message: QueryTokenizeShareLockInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  }
};
function createBaseTokenizeShareRecord(): TokenizeShareRecord {
  return {
    id: Long.UZERO,
    owner: "",
    moduleAccount: "",
    validator: ""
  };
}
export const TokenizeShareRecord = {
  encode(message: TokenizeShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.moduleAccount !== "") {
      writer.uint32(26).string(message.moduleAccount);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.moduleAccount = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenizeShareRecord>): TokenizeShareRecord {
    const message = createBaseTokenizeShareRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.moduleAccount = object.moduleAccount ?? "";
    message.validator = object.validator ?? "";
    return message;
  }
};
function createBasePendingTokenizeShareAuthorizations(): PendingTokenizeShareAuthorizations {
  return {
    addresses: []
  };
}
export const PendingTokenizeShareAuthorizations = {
  encode(message: PendingTokenizeShareAuthorizations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PendingTokenizeShareAuthorizations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenizeShareAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgUnbondValidator(): MsgUnbondValidator {
  return {
    validatorAddress: ""
  };
}
export const MsgUnbondValidator = {
  encode(message: MsgUnbondValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnbondValidator>): MsgUnbondValidator {
    const message = createBaseMsgUnbondValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBaseMsgUnbondValidatorResponse(): MsgUnbondValidatorResponse {
  return {};
}
export const MsgUnbondValidatorResponse = {
  encode(_: MsgUnbondValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidatorResponse();
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
  fromPartial(_: DeepPartial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  }
};
function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined,
    tokenizedShareOwner: ""
  };
}
export const MsgTokenizeShares = {
  encode(message: MsgTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenizedShareOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
    return message;
  }
};
function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: undefined
  };
}
export const MsgTokenizeSharesResponse = {
  encode(message: MsgTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegatorAddress: "",
    amount: undefined
  };
}
export const MsgRedeemTokensForShares = {
  encode(message: MsgRedeemTokensForShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: undefined
  };
}
export const MsgRedeemTokensForSharesResponse = {
  encode(message: MsgRedeemTokensForSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgTransferTokenizeShareRecord(): MsgTransferTokenizeShareRecord {
  return {
    tokenizeShareRecordId: Long.UZERO,
    sender: "",
    newOwner: ""
  };
}
export const MsgTransferTokenizeShareRecord = {
  encode(message: MsgTransferTokenizeShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tokenizeShareRecordId.isZero()) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenizeShareRecordId = (reader.uint64() as Long);
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    message.tokenizeShareRecordId = object.tokenizeShareRecordId !== undefined && object.tokenizeShareRecordId !== null ? Long.fromValue(object.tokenizeShareRecordId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  }
};
function createBaseMsgTransferTokenizeShareRecordResponse(): MsgTransferTokenizeShareRecordResponse {
  return {};
}
export const MsgTransferTokenizeShareRecordResponse = {
  encode(_: MsgTransferTokenizeShareRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
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
  fromPartial(_: DeepPartial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  }
};
function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgDisableTokenizeShares = {
  encode(message: MsgDisableTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();
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
  fromPartial(object: DeepPartial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  }
};
function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}
export const MsgDisableTokenizeSharesResponse = {
  encode(_: MsgDisableTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();
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
  fromPartial(_: DeepPartial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  }
};
function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgEnableTokenizeShares = {
  encode(message: MsgEnableTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();
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
  fromPartial(object: DeepPartial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  }
};
function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completionTime: undefined
  };
}
export const MsgEnableTokenizeSharesResponse = {
  encode(message: MsgEnableTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }
};
function createBaseMsgValidatorBond(): MsgValidatorBond {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgValidatorBond = {
  encode(message: MsgValidatorBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgValidatorBond>): MsgValidatorBond {
    const message = createBaseMsgValidatorBond();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBaseMsgValidatorBondResponse(): MsgValidatorBondResponse {
  return {};
}
export const MsgValidatorBondResponse = {
  encode(_: MsgValidatorBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBondResponse();
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
  fromPartial(_: DeepPartial<MsgValidatorBondResponse>): MsgValidatorBondResponse {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  }
};