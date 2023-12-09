import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Zone {
  connectionId: string;
  chainId: string;
  depositAddress?: ICAAccount;
  withdrawalAddress?: ICAAccount;
  performanceAddress?: ICAAccount;
  delegationAddress?: ICAAccount;
  accountPrefix: string;
  localDenom: string;
  baseDenom: string;
  redemptionRate: string;
  lastRedemptionRate: string;
  validators: Validator[];
  aggregateIntent: ValidatorIntent[];
  /** deprecated */
  multiSend: boolean;
  liquidityModule: boolean;
  withdrawalWaitgroup: number;
  ibcNextValidatorsHash: Uint8Array;
  validatorSelectionAllocation: Long;
  holdingsAllocation: Long;
  /** deprecated */
  lastEpochHeight: Long;
  tvl: string;
  unbondingPeriod: Long;
  messagesPerTx: Long;
  decimals: Long;
  unbondingEnabled: boolean;
  depositsEnabled: boolean;
  returnToSender: boolean;
  is118: boolean;
  subzoneInfo?: SubzoneInfo;
}
export interface ZoneSDKType {
  connection_id: string;
  chain_id: string;
  deposit_address?: ICAAccountSDKType;
  withdrawal_address?: ICAAccountSDKType;
  performance_address?: ICAAccountSDKType;
  delegation_address?: ICAAccountSDKType;
  account_prefix: string;
  local_denom: string;
  base_denom: string;
  redemption_rate: string;
  last_redemption_rate: string;
  validators: ValidatorSDKType[];
  aggregate_intent: ValidatorIntentSDKType[];
  multi_send: boolean;
  liquidity_module: boolean;
  withdrawal_waitgroup: number;
  ibc_next_validators_hash: Uint8Array;
  validator_selection_allocation: Long;
  holdings_allocation: Long;
  last_epoch_height: Long;
  tvl: string;
  unbonding_period: Long;
  messages_per_tx: Long;
  decimals: Long;
  unbonding_enabled: boolean;
  deposits_enabled: boolean;
  return_to_sender: boolean;
  is_118: boolean;
  subzoneInfo?: SubzoneInfoSDKType;
}
export interface SubzoneInfo {
  authority: string;
  baseChainID: string;
}
export interface SubzoneInfoSDKType {
  authority: string;
  base_chainID: string;
}
export interface LsmCaps {
  validatorCap: string;
  validatorBondCap: string;
  globalCap: string;
}
export interface LsmCapsSDKType {
  validator_cap: string;
  validator_bond_cap: string;
  global_cap: string;
}
export interface ICAAccount {
  address: string;
  /** balance defines the different coins this balance holds. */
  balance: Coin[];
  portName: string;
  withdrawalAddress: string;
  balanceWaitgroup: number;
}
export interface ICAAccountSDKType {
  address: string;
  balance: CoinSDKType[];
  port_name: string;
  withdrawal_address: string;
  balance_waitgroup: number;
}
export interface Distribution {
  valoper: string;
  amount: Long;
}
export interface DistributionSDKType {
  valoper: string;
  amount: Long;
}
export interface WithdrawalRecord {
  chainId: string;
  delegator: string;
  distribution: Distribution[];
  recipient: string;
  amount: Coin[];
  burnAmount?: Coin;
  txhash: string;
  status: number;
  completionTime?: Date;
  requeued: boolean;
  acknowledged: boolean;
  epochNumber: Long;
}
export interface WithdrawalRecordSDKType {
  chain_id: string;
  delegator: string;
  distribution: DistributionSDKType[];
  recipient: string;
  amount: CoinSDKType[];
  burn_amount?: CoinSDKType;
  txhash: string;
  status: number;
  completion_time?: Date;
  requeued: boolean;
  acknowledged: boolean;
  epoch_number: Long;
}
export interface UnbondingRecord {
  chainId: string;
  epochNumber: Long;
  validator: string;
  relatedTxhash: string[];
}
export interface UnbondingRecordSDKType {
  chain_id: string;
  epoch_number: Long;
  validator: string;
  related_txhash: string[];
}
export interface RedelegationRecord {
  chainId: string;
  epochNumber: Long;
  source: string;
  destination: string;
  amount: Long;
  completionTime?: Date;
}
export interface RedelegationRecordSDKType {
  chain_id: string;
  epoch_number: Long;
  source: string;
  destination: string;
  amount: Long;
  completion_time?: Date;
}
export interface TransferRecord {
  sender: string;
  recipient: string;
  amount?: Coin;
}
export interface TransferRecordSDKType {
  sender: string;
  recipient: string;
  amount?: CoinSDKType;
}
export interface Validator {
  valoperAddress: string;
  commissionRate: string;
  delegatorShares: string;
  votingPower: string;
  score: string;
  status: string;
  jailed: boolean;
  tombstoned: boolean;
  jailedSince?: Date;
  /** Number of shares self bonded from the validator */
  validatorBondShares: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquidShares: string;
}
export interface ValidatorSDKType {
  valoper_address: string;
  commission_rate: string;
  delegator_shares: string;
  voting_power: string;
  score: string;
  status: string;
  jailed: boolean;
  tombstoned: boolean;
  jailed_since?: Date;
  validator_bond_shares: string;
  liquid_shares: string;
}
export interface DelegatorIntent {
  delegator: string;
  intents: ValidatorIntent[];
}
export interface DelegatorIntentSDKType {
  delegator: string;
  intents: ValidatorIntentSDKType[];
}
export interface ValidatorIntent {
  valoperAddress: string;
  weight: string;
}
export interface ValidatorIntentSDKType {
  valoper_address: string;
  weight: string;
}
export interface Delegation {
  delegationAddress: string;
  validatorAddress: string;
  amount?: Coin;
  height: Long;
  redelegationEnd: Long;
}
export interface DelegationSDKType {
  delegation_address: string;
  validator_address: string;
  amount?: CoinSDKType;
  height: Long;
  redelegation_end: Long;
}
export interface PortConnectionTuple {
  connectionId: string;
  portId: string;
}
export interface PortConnectionTupleSDKType {
  connection_id: string;
  port_id: string;
}
export interface Receipt {
  chainId: string;
  sender: string;
  txhash: string;
  amount: Coin[];
  firstSeen?: Date;
  completed?: Date;
}
export interface ReceiptSDKType {
  chain_id: string;
  sender: string;
  txhash: string;
  amount: CoinSDKType[];
  first_seen?: Date;
  completed?: Date;
}
function createBaseZone(): Zone {
  return {
    connectionId: "",
    chainId: "",
    depositAddress: undefined,
    withdrawalAddress: undefined,
    performanceAddress: undefined,
    delegationAddress: undefined,
    accountPrefix: "",
    localDenom: "",
    baseDenom: "",
    redemptionRate: "",
    lastRedemptionRate: "",
    validators: [],
    aggregateIntent: [],
    multiSend: false,
    liquidityModule: false,
    withdrawalWaitgroup: 0,
    ibcNextValidatorsHash: new Uint8Array(),
    validatorSelectionAllocation: Long.UZERO,
    holdingsAllocation: Long.UZERO,
    lastEpochHeight: Long.ZERO,
    tvl: "",
    unbondingPeriod: Long.ZERO,
    messagesPerTx: Long.ZERO,
    decimals: Long.ZERO,
    unbondingEnabled: false,
    depositsEnabled: false,
    returnToSender: false,
    is118: false,
    subzoneInfo: undefined
  };
}
export const Zone = {
  encode(message: Zone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.depositAddress !== undefined) {
      ICAAccount.encode(message.depositAddress, writer.uint32(26).fork()).ldelim();
    }
    if (message.withdrawalAddress !== undefined) {
      ICAAccount.encode(message.withdrawalAddress, writer.uint32(34).fork()).ldelim();
    }
    if (message.performanceAddress !== undefined) {
      ICAAccount.encode(message.performanceAddress, writer.uint32(42).fork()).ldelim();
    }
    if (message.delegationAddress !== undefined) {
      ICAAccount.encode(message.delegationAddress, writer.uint32(50).fork()).ldelim();
    }
    if (message.accountPrefix !== "") {
      writer.uint32(58).string(message.accountPrefix);
    }
    if (message.localDenom !== "") {
      writer.uint32(66).string(message.localDenom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(74).string(message.baseDenom);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(82).string(message.redemptionRate);
    }
    if (message.lastRedemptionRate !== "") {
      writer.uint32(90).string(message.lastRedemptionRate);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.aggregateIntent) {
      ValidatorIntent.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.multiSend === true) {
      writer.uint32(112).bool(message.multiSend);
    }
    if (message.liquidityModule === true) {
      writer.uint32(120).bool(message.liquidityModule);
    }
    if (message.withdrawalWaitgroup !== 0) {
      writer.uint32(128).uint32(message.withdrawalWaitgroup);
    }
    if (message.ibcNextValidatorsHash.length !== 0) {
      writer.uint32(138).bytes(message.ibcNextValidatorsHash);
    }
    if (!message.validatorSelectionAllocation.isZero()) {
      writer.uint32(144).uint64(message.validatorSelectionAllocation);
    }
    if (!message.holdingsAllocation.isZero()) {
      writer.uint32(152).uint64(message.holdingsAllocation);
    }
    if (!message.lastEpochHeight.isZero()) {
      writer.uint32(160).int64(message.lastEpochHeight);
    }
    if (message.tvl !== "") {
      writer.uint32(170).string(message.tvl);
    }
    if (!message.unbondingPeriod.isZero()) {
      writer.uint32(176).int64(message.unbondingPeriod);
    }
    if (!message.messagesPerTx.isZero()) {
      writer.uint32(184).int64(message.messagesPerTx);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(192).int64(message.decimals);
    }
    if (message.unbondingEnabled === true) {
      writer.uint32(200).bool(message.unbondingEnabled);
    }
    if (message.depositsEnabled === true) {
      writer.uint32(208).bool(message.depositsEnabled);
    }
    if (message.returnToSender === true) {
      writer.uint32(216).bool(message.returnToSender);
    }
    if (message.is118 === true) {
      writer.uint32(224).bool(message.is118);
    }
    if (message.subzoneInfo !== undefined) {
      SubzoneInfo.encode(message.subzoneInfo, writer.uint32(234).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Zone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.depositAddress = ICAAccount.decode(reader, reader.uint32());
          break;
        case 4:
          message.withdrawalAddress = ICAAccount.decode(reader, reader.uint32());
          break;
        case 5:
          message.performanceAddress = ICAAccount.decode(reader, reader.uint32());
          break;
        case 6:
          message.delegationAddress = ICAAccount.decode(reader, reader.uint32());
          break;
        case 7:
          message.accountPrefix = reader.string();
          break;
        case 8:
          message.localDenom = reader.string();
          break;
        case 9:
          message.baseDenom = reader.string();
          break;
        case 10:
          message.redemptionRate = reader.string();
          break;
        case 11:
          message.lastRedemptionRate = reader.string();
          break;
        case 12:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 13:
          message.aggregateIntent.push(ValidatorIntent.decode(reader, reader.uint32()));
          break;
        case 14:
          message.multiSend = reader.bool();
          break;
        case 15:
          message.liquidityModule = reader.bool();
          break;
        case 16:
          message.withdrawalWaitgroup = reader.uint32();
          break;
        case 17:
          message.ibcNextValidatorsHash = reader.bytes();
          break;
        case 18:
          message.validatorSelectionAllocation = (reader.uint64() as Long);
          break;
        case 19:
          message.holdingsAllocation = (reader.uint64() as Long);
          break;
        case 20:
          message.lastEpochHeight = (reader.int64() as Long);
          break;
        case 21:
          message.tvl = reader.string();
          break;
        case 22:
          message.unbondingPeriod = (reader.int64() as Long);
          break;
        case 23:
          message.messagesPerTx = (reader.int64() as Long);
          break;
        case 24:
          message.decimals = (reader.int64() as Long);
          break;
        case 25:
          message.unbondingEnabled = reader.bool();
          break;
        case 26:
          message.depositsEnabled = reader.bool();
          break;
        case 27:
          message.returnToSender = reader.bool();
          break;
        case 28:
          message.is118 = reader.bool();
          break;
        case 29:
          message.subzoneInfo = SubzoneInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Zone>): Zone {
    const message = createBaseZone();
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.depositAddress = object.depositAddress !== undefined && object.depositAddress !== null ? ICAAccount.fromPartial(object.depositAddress) : undefined;
    message.withdrawalAddress = object.withdrawalAddress !== undefined && object.withdrawalAddress !== null ? ICAAccount.fromPartial(object.withdrawalAddress) : undefined;
    message.performanceAddress = object.performanceAddress !== undefined && object.performanceAddress !== null ? ICAAccount.fromPartial(object.performanceAddress) : undefined;
    message.delegationAddress = object.delegationAddress !== undefined && object.delegationAddress !== null ? ICAAccount.fromPartial(object.delegationAddress) : undefined;
    message.accountPrefix = object.accountPrefix ?? "";
    message.localDenom = object.localDenom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.aggregateIntent = object.aggregateIntent?.map(e => ValidatorIntent.fromPartial(e)) || [];
    message.multiSend = object.multiSend ?? false;
    message.liquidityModule = object.liquidityModule ?? false;
    message.withdrawalWaitgroup = object.withdrawalWaitgroup ?? 0;
    message.ibcNextValidatorsHash = object.ibcNextValidatorsHash ?? new Uint8Array();
    message.validatorSelectionAllocation = object.validatorSelectionAllocation !== undefined && object.validatorSelectionAllocation !== null ? Long.fromValue(object.validatorSelectionAllocation) : Long.UZERO;
    message.holdingsAllocation = object.holdingsAllocation !== undefined && object.holdingsAllocation !== null ? Long.fromValue(object.holdingsAllocation) : Long.UZERO;
    message.lastEpochHeight = object.lastEpochHeight !== undefined && object.lastEpochHeight !== null ? Long.fromValue(object.lastEpochHeight) : Long.ZERO;
    message.tvl = object.tvl ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Long.fromValue(object.unbondingPeriod) : Long.ZERO;
    message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? Long.fromValue(object.messagesPerTx) : Long.ZERO;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    message.unbondingEnabled = object.unbondingEnabled ?? false;
    message.depositsEnabled = object.depositsEnabled ?? false;
    message.returnToSender = object.returnToSender ?? false;
    message.is118 = object.is118 ?? false;
    message.subzoneInfo = object.subzoneInfo !== undefined && object.subzoneInfo !== null ? SubzoneInfo.fromPartial(object.subzoneInfo) : undefined;
    return message;
  }
};
function createBaseSubzoneInfo(): SubzoneInfo {
  return {
    authority: "",
    baseChainID: ""
  };
}
export const SubzoneInfo = {
  encode(message: SubzoneInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseChainID !== "") {
      writer.uint32(18).string(message.baseChainID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SubzoneInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubzoneInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.baseChainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubzoneInfo>): SubzoneInfo {
    const message = createBaseSubzoneInfo();
    message.authority = object.authority ?? "";
    message.baseChainID = object.baseChainID ?? "";
    return message;
  }
};
function createBaseLsmCaps(): LsmCaps {
  return {
    validatorCap: "",
    validatorBondCap: "",
    globalCap: ""
  };
}
export const LsmCaps = {
  encode(message: LsmCaps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorCap !== "") {
      writer.uint32(10).string(message.validatorCap);
    }
    if (message.validatorBondCap !== "") {
      writer.uint32(18).string(message.validatorBondCap);
    }
    if (message.globalCap !== "") {
      writer.uint32(26).string(message.globalCap);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LsmCaps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLsmCaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorCap = reader.string();
          break;
        case 2:
          message.validatorBondCap = reader.string();
          break;
        case 3:
          message.globalCap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LsmCaps>): LsmCaps {
    const message = createBaseLsmCaps();
    message.validatorCap = object.validatorCap ?? "";
    message.validatorBondCap = object.validatorBondCap ?? "";
    message.globalCap = object.globalCap ?? "";
    return message;
  }
};
function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    balance: [],
    portName: "",
    withdrawalAddress: "",
    balanceWaitgroup: 0
  };
}
export const ICAAccount = {
  encode(message: ICAAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.portName !== "") {
      writer.uint32(26).string(message.portName);
    }
    if (message.withdrawalAddress !== "") {
      writer.uint32(34).string(message.withdrawalAddress);
    }
    if (message.balanceWaitgroup !== 0) {
      writer.uint32(40).uint32(message.balanceWaitgroup);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.portName = reader.string();
          break;
        case 4:
          message.withdrawalAddress = reader.string();
          break;
        case 5:
          message.balanceWaitgroup = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.portName = object.portName ?? "";
    message.withdrawalAddress = object.withdrawalAddress ?? "";
    message.balanceWaitgroup = object.balanceWaitgroup ?? 0;
    return message;
  }
};
function createBaseDistribution(): Distribution {
  return {
    valoper: "",
    amount: Long.UZERO
  };
}
export const Distribution = {
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoper !== "") {
      writer.uint32(10).string(message.valoper);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoper = reader.string();
          break;
        case 2:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.valoper = object.valoper ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseWithdrawalRecord(): WithdrawalRecord {
  return {
    chainId: "",
    delegator: "",
    distribution: [],
    recipient: "",
    amount: [],
    burnAmount: undefined,
    txhash: "",
    status: 0,
    completionTime: undefined,
    requeued: false,
    acknowledged: false,
    epochNumber: Long.ZERO
  };
}
export const WithdrawalRecord = {
  encode(message: WithdrawalRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    for (const v of message.distribution) {
      Distribution.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.burnAmount !== undefined) {
      Coin.encode(message.burnAmount, writer.uint32(50).fork()).ldelim();
    }
    if (message.txhash !== "") {
      writer.uint32(58).string(message.txhash);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.requeued === true) {
      writer.uint32(80).bool(message.requeued);
    }
    if (message.acknowledged === true) {
      writer.uint32(88).bool(message.acknowledged);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(96).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.delegator = reader.string();
          break;
        case 3:
          message.distribution.push(Distribution.decode(reader, reader.uint32()));
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.burnAmount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.txhash = reader.string();
          break;
        case 8:
          message.status = reader.int32();
          break;
        case 9:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.requeued = reader.bool();
          break;
        case 11:
          message.acknowledged = reader.bool();
          break;
        case 12:
          message.epochNumber = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WithdrawalRecord>): WithdrawalRecord {
    const message = createBaseWithdrawalRecord();
    message.chainId = object.chainId ?? "";
    message.delegator = object.delegator ?? "";
    message.distribution = object.distribution?.map(e => Distribution.fromPartial(e)) || [];
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.burnAmount = object.burnAmount !== undefined && object.burnAmount !== null ? Coin.fromPartial(object.burnAmount) : undefined;
    message.txhash = object.txhash ?? "";
    message.status = object.status ?? 0;
    message.completionTime = object.completionTime ?? undefined;
    message.requeued = object.requeued ?? false;
    message.acknowledged = object.acknowledged ?? false;
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    return message;
  }
};
function createBaseUnbondingRecord(): UnbondingRecord {
  return {
    chainId: "",
    epochNumber: Long.ZERO,
    validator: "",
    relatedTxhash: []
  };
}
export const UnbondingRecord = {
  encode(message: UnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    for (const v of message.relatedTxhash) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = (reader.int64() as Long);
          break;
        case 3:
          message.validator = reader.string();
          break;
        case 4:
          message.relatedTxhash.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnbondingRecord>): UnbondingRecord {
    const message = createBaseUnbondingRecord();
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    message.validator = object.validator ?? "";
    message.relatedTxhash = object.relatedTxhash?.map(e => e) || [];
    return message;
  }
};
function createBaseRedelegationRecord(): RedelegationRecord {
  return {
    chainId: "",
    epochNumber: Long.ZERO,
    source: "",
    destination: "",
    amount: Long.ZERO,
    completionTime: undefined
  };
}
export const RedelegationRecord = {
  encode(message: RedelegationRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(34).string(message.destination);
    }
    if (!message.amount.isZero()) {
      writer.uint32(40).int64(message.amount);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = (reader.int64() as Long);
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.destination = reader.string();
          break;
        case 5:
          message.amount = (reader.int64() as Long);
          break;
        case 6:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RedelegationRecord>): RedelegationRecord {
    const message = createBaseRedelegationRecord();
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }
};
function createBaseTransferRecord(): TransferRecord {
  return {
    sender: "",
    recipient: "",
    amount: undefined
  };
}
export const TransferRecord = {
  encode(message: TransferRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransferRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferRecord>): TransferRecord {
    const message = createBaseTransferRecord();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseValidator(): Validator {
  return {
    valoperAddress: "",
    commissionRate: "",
    delegatorShares: "",
    votingPower: "",
    score: "",
    status: "",
    jailed: false,
    tombstoned: false,
    jailedSince: undefined,
    validatorBondShares: "",
    liquidShares: ""
  };
}
export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(18).string(message.commissionRate);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(26).string(message.delegatorShares);
    }
    if (message.votingPower !== "") {
      writer.uint32(34).string(message.votingPower);
    }
    if (message.score !== "") {
      writer.uint32(42).string(message.score);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.jailed === true) {
      writer.uint32(56).bool(message.jailed);
    }
    if (message.tombstoned === true) {
      writer.uint32(64).bool(message.tombstoned);
    }
    if (message.jailedSince !== undefined) {
      Timestamp.encode(toTimestamp(message.jailedSince), writer.uint32(74).fork()).ldelim();
    }
    if (message.validatorBondShares !== "") {
      writer.uint32(82).string(message.validatorBondShares);
    }
    if (message.liquidShares !== "") {
      writer.uint32(90).string(message.liquidShares);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoperAddress = reader.string();
          break;
        case 2:
          message.commissionRate = reader.string();
          break;
        case 3:
          message.delegatorShares = reader.string();
          break;
        case 4:
          message.votingPower = reader.string();
          break;
        case 5:
          message.score = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.jailed = reader.bool();
          break;
        case 8:
          message.tombstoned = reader.bool();
          break;
        case 9:
          message.jailedSince = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validatorBondShares = reader.string();
          break;
        case 11:
          message.liquidShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.valoperAddress = object.valoperAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.votingPower = object.votingPower ?? "";
    message.score = object.score ?? "";
    message.status = object.status ?? "";
    message.jailed = object.jailed ?? false;
    message.tombstoned = object.tombstoned ?? false;
    message.jailedSince = object.jailedSince ?? undefined;
    message.validatorBondShares = object.validatorBondShares ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  }
};
function createBaseDelegatorIntent(): DelegatorIntent {
  return {
    delegator: "",
    intents: []
  };
}
export const DelegatorIntent = {
  encode(message: DelegatorIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.intents) {
      ValidatorIntent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorIntent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.intents.push(ValidatorIntent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DelegatorIntent>): DelegatorIntent {
    const message = createBaseDelegatorIntent();
    message.delegator = object.delegator ?? "";
    message.intents = object.intents?.map(e => ValidatorIntent.fromPartial(e)) || [];
    return message;
  }
};
function createBaseValidatorIntent(): ValidatorIntent {
  return {
    valoperAddress: "",
    weight: ""
  };
}
export const ValidatorIntent = {
  encode(message: ValidatorIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorIntent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoperAddress = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorIntent>): ValidatorIntent {
    const message = createBaseValidatorIntent();
    message.valoperAddress = object.valoperAddress ?? "";
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBaseDelegation(): Delegation {
  return {
    delegationAddress: "",
    validatorAddress: "",
    amount: undefined,
    height: Long.ZERO,
    redelegationEnd: Long.ZERO
  };
}
export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationAddress !== "") {
      writer.uint32(10).string(message.delegationAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    if (!message.redelegationEnd.isZero()) {
      writer.uint32(40).int64(message.redelegationEnd);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.height = (reader.int64() as Long);
          break;
        case 5:
          message.redelegationEnd = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegationAddress = object.delegationAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.redelegationEnd = object.redelegationEnd !== undefined && object.redelegationEnd !== null ? Long.fromValue(object.redelegationEnd) : Long.ZERO;
    return message;
  }
};
function createBasePortConnectionTuple(): PortConnectionTuple {
  return {
    connectionId: "",
    portId: ""
  };
}
export const PortConnectionTuple = {
  encode(message: PortConnectionTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PortConnectionTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortConnectionTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PortConnectionTuple>): PortConnectionTuple {
    const message = createBasePortConnectionTuple();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    return message;
  }
};
function createBaseReceipt(): Receipt {
  return {
    chainId: "",
    sender: "",
    txhash: "",
    amount: [],
    firstSeen: undefined,
    completed: undefined
  };
}
export const Receipt = {
  encode(message: Receipt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.txhash !== "") {
      writer.uint32(26).string(message.txhash);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.firstSeen !== undefined) {
      Timestamp.encode(toTimestamp(message.firstSeen), writer.uint32(42).fork()).ldelim();
    }
    if (message.completed !== undefined) {
      Timestamp.encode(toTimestamp(message.completed), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Receipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.txhash = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.firstSeen = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.completed = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Receipt>): Receipt {
    const message = createBaseReceipt();
    message.chainId = object.chainId ?? "";
    message.sender = object.sender ?? "";
    message.txhash = object.txhash ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.firstSeen = object.firstSeen ?? undefined;
    message.completed = object.completed ?? undefined;
    return message;
  }
};