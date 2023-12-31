import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export interface MsgCreateDenomAminoType extends AminoMsg {
  type: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom";
  value: {
    sender: string;
    subdenom: string;
  };
}
export interface MsgMintAminoType extends AminoMsg {
  type: "/quicksilver.tokenfactory.v1beta1.MsgMint";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBurnAminoType extends AminoMsg {
  type: "/quicksilver.tokenfactory.v1beta1.MsgBurn";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgChangeAdminAminoType extends AminoMsg {
  type: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin";
  value: {
    sender: string;
    denom: string;
    new_admin: string;
  };
}
export interface MsgSetDenomMetadataAminoType extends AminoMsg {
  type: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata";
  value: {
    sender: string;
    metadata: {
      description: string;
      denom_units: {
        denom: string;
        exponent: number;
        aliases: string[];
      }[];
      base: string;
      display: string;
      name: string;
      symbol: string;
      uri: string;
      uri_hash: string;
    };
  };
}
export const AminoConverter = {
  "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): MsgCreateDenomAminoType["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: MsgCreateDenomAminoType["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom
      };
    }
  },
  "/quicksilver.tokenfactory.v1beta1.MsgMint": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgMint",
    toAmino: ({
      sender,
      amount
    }: MsgMint): MsgMintAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: MsgMintAminoType["value"]): MsgMint => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/quicksilver.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
    toAmino: ({
      sender,
      amount
    }: MsgBurn): MsgBurnAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: MsgBurnAminoType["value"]): MsgBurn => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
    toAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeAdmin): MsgChangeAdminAminoType["value"] => {
      return {
        sender,
        denom,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      sender,
      denom,
      new_admin
    }: MsgChangeAdminAminoType["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin: new_admin
      };
    }
  },
  "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
    toAmino: ({
      sender,
      metadata
    }: MsgSetDenomMetadata): MsgSetDenomMetadataAminoType["value"] => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denom_units: metadata.denomUnits.map(el0 => ({
            denom: el0.denom,
            exponent: el0.exponent,
            aliases: el0.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uri_hash: metadata.uriHash
        }
      };
    },
    fromAmino: ({
      sender,
      metadata
    }: MsgSetDenomMetadataAminoType["value"]): MsgSetDenomMetadata => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denomUnits: metadata.denom_units.map(el1 => ({
            denom: el1.denom,
            exponent: el1.exponent,
            aliases: el1.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uriHash: metadata.uri_hash
        }
      };
    }
  }
};