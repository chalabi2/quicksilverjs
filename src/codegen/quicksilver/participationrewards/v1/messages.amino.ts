import { claimTypeFromJSON } from "../../claimsmanager/v1/claimsmanager";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSubmitClaim } from "./messages";
import { MsgGovRemoveProtocolData } from "./proposals";
export interface MsgSubmitClaimAminoType extends AminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
  value: {
    user_address: string;
    zone: string;
    src_zone: string;
    claim_type: number;
    proofs: {
      key: Uint8Array;
      data: Uint8Array;
      proof_ops: {
        ops: {
          type: string;
          key: Uint8Array;
          data: Uint8Array;
        }[];
      };
      height: string;
      proof_type: string;
    }[];
  };
}
export interface MsgGovRemoveProtocolDataAminoType extends AminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData";
  value: {
    title: string;
    description: string;
    key: string;
    authority: string;
  };
}
export const AminoConverter = {
  "/quicksilver.participationrewards.v1.MsgSubmitClaim": {
    aminoType: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
    toAmino: ({
      userAddress,
      zone,
      srcZone,
      claimType,
      proofs
    }: MsgSubmitClaim): MsgSubmitClaimAminoType["value"] => {
      return {
        user_address: userAddress,
        zone,
        src_zone: srcZone,
        claim_type: claimType,
        proofs: proofs.map(el0 => ({
          key: el0.key,
          data: el0.data,
          proof_ops: {
            ops: el0.proofOps.ops.map(el1 => ({
              type: el1.type,
              key: el1.key,
              data: el1.data
            }))
          },
          height: el0.height.toString(),
          proof_type: el0.proofType
        }))
      };
    },
    fromAmino: ({
      user_address,
      zone,
      src_zone,
      claim_type,
      proofs
    }: MsgSubmitClaimAminoType["value"]): MsgSubmitClaim => {
      return {
        userAddress: user_address,
        zone,
        srcZone: src_zone,
        claimType: claimTypeFromJSON(claim_type),
        proofs: proofs.map(el0 => ({
          key: el0.key,
          data: el0.data,
          proofOps: {
            ops: el0.proof_ops.ops.map(el2 => ({
              type: el2.type,
              key: el2.key,
              data: el2.data
            }))
          },
          height: Long.fromString(el0.height),
          proofType: el0.proof_type
        }))
      };
    }
  },
  "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData": {
    aminoType: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
    toAmino: ({
      title,
      description,
      key,
      authority
    }: MsgGovRemoveProtocolData): MsgGovRemoveProtocolDataAminoType["value"] => {
      return {
        title,
        description,
        key,
        authority
      };
    },
    fromAmino: ({
      title,
      description,
      key,
      authority
    }: MsgGovRemoveProtocolDataAminoType["value"]): MsgGovRemoveProtocolData => {
      return {
        title,
        description,
        key,
        authority
      };
    }
  }
};