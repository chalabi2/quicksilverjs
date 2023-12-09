import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRequestRedemption, MsgRequestRedemptionResponse, MsgSignalIntent, MsgSignalIntentResponse } from "./messages";
import { MsgGovCloseChannel, MsgGovCloseChannelResponse, MsgGovReopenChannel, MsgGovReopenChannelResponse, MsgGovSetLsmCaps, MsgGovSetLsmCapsResponse } from "./proposals";
/** Msg defines the interchainstaking Msg service. */
export interface Msg {
  /**
   * RequestRedemption defines a method for requesting burning of qAssets for
   * native assets.
   */
  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
  /**
   * SignalIntent defines a method for signalling voting intent for one or more
   * validators.
   */
  signalIntent(request: MsgSignalIntent): Promise<MsgSignalIntentResponse>;
  /**
   * SignalIntent defines a method for signalling voting intent for one or more
   * validators.
   */
  govCloseChannel(request: MsgGovCloseChannel): Promise<MsgGovCloseChannelResponse>;
  govReopenChannel(request: MsgGovReopenChannel): Promise<MsgGovReopenChannelResponse>;
  govSetLsmCaps(request: MsgGovSetLsmCaps): Promise<MsgGovSetLsmCapsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.requestRedemption = this.requestRedemption.bind(this);
    this.signalIntent = this.signalIntent.bind(this);
    this.govCloseChannel = this.govCloseChannel.bind(this);
    this.govReopenChannel = this.govReopenChannel.bind(this);
    this.govSetLsmCaps = this.govSetLsmCaps.bind(this);
  }
  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse> {
    const data = MsgRequestRedemption.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "RequestRedemption", data);
    return promise.then(data => MsgRequestRedemptionResponse.decode(new _m0.Reader(data)));
  }
  signalIntent(request: MsgSignalIntent): Promise<MsgSignalIntentResponse> {
    const data = MsgSignalIntent.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "SignalIntent", data);
    return promise.then(data => MsgSignalIntentResponse.decode(new _m0.Reader(data)));
  }
  govCloseChannel(request: MsgGovCloseChannel): Promise<MsgGovCloseChannelResponse> {
    const data = MsgGovCloseChannel.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovCloseChannel", data);
    return promise.then(data => MsgGovCloseChannelResponse.decode(new _m0.Reader(data)));
  }
  govReopenChannel(request: MsgGovReopenChannel): Promise<MsgGovReopenChannelResponse> {
    const data = MsgGovReopenChannel.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovReopenChannel", data);
    return promise.then(data => MsgGovReopenChannelResponse.decode(new _m0.Reader(data)));
  }
  govSetLsmCaps(request: MsgGovSetLsmCaps): Promise<MsgGovSetLsmCapsResponse> {
    const data = MsgGovSetLsmCaps.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovSetLsmCaps", data);
    return promise.then(data => MsgGovSetLsmCapsResponse.decode(new _m0.Reader(data)));
  }
}