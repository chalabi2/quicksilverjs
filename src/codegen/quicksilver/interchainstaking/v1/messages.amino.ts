import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgRequestRedemption, MsgSignalIntent } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps } from "./proposals";
export interface MsgRequestRedemptionAminoType extends AminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgRequestRedemption";
  value: {
    value: {
      denom: string;
      amount: string;
    };
    destination_address: string;
    from_address: string;
  };
}
export interface MsgSignalIntentAminoType extends AminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgSignalIntent";
  value: {
    chain_id: string;
    intents: string;
    from_address: string;
  };
}
export interface MsgGovCloseChannelAminoType extends AminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel";
  value: {
    title: string;
    description: string;
    channel_id: string;
    port_id: string;
    authority: string;
  };
}
export interface MsgGovReopenChannelAminoType extends AminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel";
  value: {
    title: string;
    description: string;
    connection_id: string;
    port_id: string;
    authority: string;
  };
}
export interface MsgGovSetLsmCapsAminoType extends AminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps";
  value: {
    title: string;
    description: string;
    chain_id: string;
    caps: {
      validator_cap: string;
      validator_bond_cap: string;
      global_cap: string;
    };
    authority: string;
  };
}
export const AminoConverter = {
  "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
    toAmino: ({
      value,
      destinationAddress,
      fromAddress
    }: MsgRequestRedemption): MsgRequestRedemptionAminoType["value"] => {
      return {
        value: {
          denom: value.denom,
          amount: Long.fromValue(value.amount).toString()
        },
        destination_address: destinationAddress,
        from_address: fromAddress
      };
    },
    fromAmino: ({
      value,
      destination_address,
      from_address
    }: MsgRequestRedemptionAminoType["value"]): MsgRequestRedemption => {
      return {
        value: {
          denom: value.denom,
          amount: value.amount
        },
        destinationAddress: destination_address,
        fromAddress: from_address
      };
    }
  },
  "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
    toAmino: ({
      chainId,
      intents,
      fromAddress
    }: MsgSignalIntent): MsgSignalIntentAminoType["value"] => {
      return {
        chain_id: chainId,
        intents,
        from_address: fromAddress
      };
    },
    fromAmino: ({
      chain_id,
      intents,
      from_address
    }: MsgSignalIntentAminoType["value"]): MsgSignalIntent => {
      return {
        chainId: chain_id,
        intents,
        fromAddress: from_address
      };
    }
  },
  "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
    toAmino: ({
      title,
      description,
      channelId,
      portId,
      authority
    }: MsgGovCloseChannel): MsgGovCloseChannelAminoType["value"] => {
      return {
        title,
        description,
        channel_id: channelId,
        port_id: portId,
        authority
      };
    },
    fromAmino: ({
      title,
      description,
      channel_id,
      port_id,
      authority
    }: MsgGovCloseChannelAminoType["value"]): MsgGovCloseChannel => {
      return {
        title,
        description,
        channelId: channel_id,
        portId: port_id,
        authority
      };
    }
  },
  "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
    toAmino: ({
      title,
      description,
      connectionId,
      portId,
      authority
    }: MsgGovReopenChannel): MsgGovReopenChannelAminoType["value"] => {
      return {
        title,
        description,
        connection_id: connectionId,
        port_id: portId,
        authority
      };
    },
    fromAmino: ({
      title,
      description,
      connection_id,
      port_id,
      authority
    }: MsgGovReopenChannelAminoType["value"]): MsgGovReopenChannel => {
      return {
        title,
        description,
        connectionId: connection_id,
        portId: port_id,
        authority
      };
    }
  },
  "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
    toAmino: ({
      title,
      description,
      chainId,
      caps,
      authority
    }: MsgGovSetLsmCaps): MsgGovSetLsmCapsAminoType["value"] => {
      return {
        title,
        description,
        chain_id: chainId,
        caps: {
          validator_cap: caps.validatorCap,
          validator_bond_cap: caps.validatorBondCap,
          global_cap: caps.globalCap
        },
        authority
      };
    },
    fromAmino: ({
      title,
      description,
      chain_id,
      caps,
      authority
    }: MsgGovSetLsmCapsAminoType["value"]): MsgGovSetLsmCaps => {
      return {
        title,
        description,
        chainId: chain_id,
        caps: {
          validatorCap: caps.validator_cap,
          validatorBondCap: caps.validator_bond_cap,
          globalCap: caps.global_cap
        },
        authority
      };
    }
  }
};