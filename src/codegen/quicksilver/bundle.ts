import * as _129 from "./airdrop/v1/airdrop";
import * as _130 from "./airdrop/v1/genesis";
import * as _131 from "./airdrop/v1/messages";
import * as _132 from "./airdrop/v1/params";
import * as _133 from "./airdrop/v1/proposals";
import * as _134 from "./airdrop/v1/query";
import * as _135 from "./claimsmanager/v1/claimsmanager";
import * as _136 from "./claimsmanager/v1/genesis";
import * as _137 from "./claimsmanager/v1/messages";
import * as _138 from "./claimsmanager/v1/query";
import * as _139 from "./epochs/v1/genesis";
import * as _140 from "./epochs/v1/query";
import * as _141 from "./interchainquery/v1/genesis";
import * as _142 from "./interchainquery/v1/interchainquery";
import * as _143 from "./interchainquery/v1/messages";
import * as _144 from "./interchainquery/v1/query";
import * as _145 from "./interchainstaking/v1/genesis";
import * as _146 from "./interchainstaking/v1/interchainstaking";
import * as _147 from "./interchainstaking/v1/messages";
import * as _148 from "./interchainstaking/v1/proposals";
import * as _149 from "./interchainstaking/v1/query";
import * as _150 from "./mint/v1beta1/genesis";
import * as _151 from "./mint/v1beta1/mint";
import * as _152 from "./mint/v1beta1/query";
import * as _153 from "./participationrewards/v1/genesis";
import * as _154 from "./participationrewards/v1/messages";
import * as _155 from "./participationrewards/v1/participationrewards";
import * as _156 from "./participationrewards/v1/proposals";
import * as _157 from "./participationrewards/v1/query";
import * as _158 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _159 from "./tokenfactory/v1beta1/genesis";
import * as _160 from "./tokenfactory/v1beta1/params";
import * as _161 from "./tokenfactory/v1beta1/query";
import * as _162 from "./tokenfactory/v1beta1/tx";
import * as _272 from "./airdrop/v1/messages.amino";
import * as _273 from "./interchainquery/v1/messages.amino";
import * as _274 from "./interchainstaking/v1/messages.amino";
import * as _275 from "./participationrewards/v1/messages.amino";
import * as _276 from "./tokenfactory/v1beta1/tx.amino";
import * as _277 from "./airdrop/v1/messages.registry";
import * as _278 from "./interchainquery/v1/messages.registry";
import * as _279 from "./interchainstaking/v1/messages.registry";
import * as _280 from "./participationrewards/v1/messages.registry";
import * as _281 from "./tokenfactory/v1beta1/tx.registry";
import * as _282 from "./airdrop/v1/query.lcd";
import * as _283 from "./claimsmanager/v1/query.lcd";
import * as _284 from "./epochs/v1/query.lcd";
import * as _285 from "./interchainstaking/v1/query.lcd";
import * as _286 from "./mint/v1beta1/query.lcd";
import * as _287 from "./participationrewards/v1/query.lcd";
import * as _288 from "./tokenfactory/v1beta1/query.lcd";
import * as _289 from "./airdrop/v1/query.rpc.Query";
import * as _290 from "./claimsmanager/v1/query.rpc.Query";
import * as _291 from "./epochs/v1/query.rpc.Query";
import * as _292 from "./interchainstaking/v1/query.rpc.Query";
import * as _293 from "./mint/v1beta1/query.rpc.Query";
import * as _294 from "./participationrewards/v1/query.rpc.Query";
import * as _295 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _296 from "./airdrop/v1/messages.rpc.msg";
import * as _297 from "./interchainquery/v1/messages.rpc.msg";
import * as _298 from "./interchainstaking/v1/messages.rpc.msg";
import * as _299 from "./participationrewards/v1/messages.rpc.msg";
import * as _300 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _307 from "./lcd";
import * as _308 from "./rpc.query";
import * as _309 from "./rpc.tx";
export namespace quicksilver {
  export namespace airdrop {
    export const v1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._272,
      ..._277,
      ..._282,
      ..._289,
      ..._296
    };
  }
  export namespace claimsmanager {
    export const v1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._283,
      ..._290
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._139,
      ..._140,
      ..._284,
      ..._291
    };
  }
  export namespace interchainquery {
    export const v1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._273,
      ..._278,
      ..._297
    };
  }
  export namespace interchainstaking {
    export const v1 = {
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._274,
      ..._279,
      ..._285,
      ..._292,
      ..._298
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._286,
      ..._293
    };
  }
  export namespace participationrewards {
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._275,
      ..._280,
      ..._287,
      ..._294,
      ..._299
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._276,
      ..._281,
      ..._288,
      ..._295,
      ..._300
    };
  }
  export const ClientFactory = {
    ..._307,
    ..._308,
    ..._309
  };
}