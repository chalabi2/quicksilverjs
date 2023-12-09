import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgClaim, MsgIncentivePoolSpend } from "./messages";
export interface MsgClaimAminoType extends AminoMsg {
  type: "/quicksilver.airdrop.v1.MsgClaim";
  value: {
    chain_id: string;
    action: string;
    address: string;
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
export interface MsgIncentivePoolSpendAminoType extends AminoMsg {
  type: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend";
  value: {
    authority: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/quicksilver.airdrop.v1.MsgClaim": {
    aminoType: "/quicksilver.airdrop.v1.MsgClaim",
    toAmino: ({
      chainId,
      action,
      address,
      proofs
    }: MsgClaim): MsgClaimAminoType["value"] => {
      return {
        chain_id: chainId,
        action: action.toString(),
        address,
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
      chain_id,
      action,
      address,
      proofs
    }: MsgClaimAminoType["value"]): MsgClaim => {
      return {
        chainId: chain_id,
        action: Long.fromString(action),
        address,
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
  "/quicksilver.airdrop.v1.MsgIncentivePoolSpend": {
    aminoType: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
    toAmino: ({
      authority,
      toAddress,
      amount
    }: MsgIncentivePoolSpend): MsgIncentivePoolSpendAminoType["value"] => {
      return {
        authority,
        to_address: toAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      to_address,
      amount
    }: MsgIncentivePoolSpendAminoType["value"]): MsgIncentivePoolSpend => {
      return {
        authority,
        toAddress: to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};