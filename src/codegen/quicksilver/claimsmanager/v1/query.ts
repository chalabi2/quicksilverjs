import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Claim, ClaimSDKType } from "./claimsmanager";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
  chainId: string;
  address: string;
  pagination?: PageRequest;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestSDKType {
  chain_id: string;
  address: string;
  pagination?: PageRequestSDKType;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponse {
  claims: Claim[];
  pagination?: PageResponse;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponseSDKType {
  claims: ClaimSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryClaimsRequest(): QueryClaimsRequest {
  return {
    chainId: "",
    address: "",
    pagination: undefined
  };
}
export const QueryClaimsRequest = {
  encode(message: QueryClaimsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<QueryClaimsRequest>): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    pagination: undefined
  };
}
export const QueryClaimsResponse = {
  encode(message: QueryClaimsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(Claim.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryClaimsResponse>): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};