import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestRedemption, MsgSignalIntent } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps } from "./proposals";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/quicksilver.interchainstaking.v1.MsgRequestRedemption", MsgRequestRedemption], ["/quicksilver.interchainstaking.v1.MsgSignalIntent", MsgSignalIntent], ["/quicksilver.interchainstaking.v1.MsgGovCloseChannel", MsgGovCloseChannel], ["/quicksilver.interchainstaking.v1.MsgGovReopenChannel", MsgGovReopenChannel], ["/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps", MsgGovSetLsmCaps]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value: MsgRequestRedemption.encode(value).finish()
      };
    },
    signalIntent(value: MsgSignalIntent) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
        value: MsgSignalIntent.encode(value).finish()
      };
    },
    govCloseChannel(value: MsgGovCloseChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        value: MsgGovCloseChannel.encode(value).finish()
      };
    },
    govReopenChannel(value: MsgGovReopenChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        value: MsgGovReopenChannel.encode(value).finish()
      };
    },
    govSetLsmCaps(value: MsgGovSetLsmCaps) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        value: MsgGovSetLsmCaps.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value
      };
    },
    signalIntent(value: MsgSignalIntent) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
        value
      };
    },
    govCloseChannel(value: MsgGovCloseChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        value
      };
    },
    govReopenChannel(value: MsgGovReopenChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        value
      };
    },
    govSetLsmCaps(value: MsgGovSetLsmCaps) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        value
      };
    }
  },
  fromPartial: {
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value: MsgRequestRedemption.fromPartial(value)
      };
    },
    signalIntent(value: MsgSignalIntent) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
        value: MsgSignalIntent.fromPartial(value)
      };
    },
    govCloseChannel(value: MsgGovCloseChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        value: MsgGovCloseChannel.fromPartial(value)
      };
    },
    govReopenChannel(value: MsgGovReopenChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        value: MsgGovReopenChannel.fromPartial(value)
      };
    },
    govSetLsmCaps(value: MsgGovSetLsmCaps) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        value: MsgGovSetLsmCaps.fromPartial(value)
      };
    }
  }
};