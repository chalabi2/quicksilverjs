import * as _105 from "./applications/transfer/v1/genesis";
import * as _106 from "./applications/transfer/v1/query";
import * as _107 from "./applications/transfer/v1/transfer";
import * as _108 from "./applications/transfer/v1/tx";
import * as _109 from "./applications/transfer/v2/packet";
import * as _110 from "./core/channel/v1/channel";
import * as _111 from "./core/channel/v1/genesis";
import * as _112 from "./core/channel/v1/query";
import * as _113 from "./core/channel/v1/tx";
import * as _114 from "./core/client/v1/client";
import * as _115 from "./core/client/v1/genesis";
import * as _116 from "./core/client/v1/query";
import * as _117 from "./core/client/v1/tx";
import * as _118 from "./core/commitment/v1/commitment";
import * as _119 from "./core/connection/v1/connection";
import * as _120 from "./core/connection/v1/genesis";
import * as _121 from "./core/connection/v1/query";
import * as _122 from "./core/connection/v1/tx";
import * as _123 from "./core/port/v1/query";
import * as _124 from "./core/types/v1/genesis";
import * as _125 from "./lightclients/localhost/v1/localhost";
import * as _126 from "./lightclients/solomachine/v1/solomachine";
import * as _127 from "./lightclients/solomachine/v2/solomachine";
import * as _128 from "./lightclients/tendermint/v1/tendermint";
import * as _251 from "./applications/transfer/v1/tx.amino";
import * as _252 from "./core/channel/v1/tx.amino";
import * as _253 from "./core/client/v1/tx.amino";
import * as _254 from "./core/connection/v1/tx.amino";
import * as _255 from "./applications/transfer/v1/tx.registry";
import * as _256 from "./core/channel/v1/tx.registry";
import * as _257 from "./core/client/v1/tx.registry";
import * as _258 from "./core/connection/v1/tx.registry";
import * as _259 from "./applications/transfer/v1/query.lcd";
import * as _260 from "./core/channel/v1/query.lcd";
import * as _261 from "./core/client/v1/query.lcd";
import * as _262 from "./core/connection/v1/query.lcd";
import * as _263 from "./applications/transfer/v1/query.rpc.Query";
import * as _264 from "./core/channel/v1/query.rpc.Query";
import * as _265 from "./core/client/v1/query.rpc.Query";
import * as _266 from "./core/connection/v1/query.rpc.Query";
import * as _267 from "./core/port/v1/query.rpc.Query";
import * as _268 from "./applications/transfer/v1/tx.rpc.msg";
import * as _269 from "./core/channel/v1/tx.rpc.msg";
import * as _270 from "./core/client/v1/tx.rpc.msg";
import * as _271 from "./core/connection/v1/tx.rpc.msg";
import * as _304 from "./lcd";
import * as _305 from "./rpc.query";
import * as _306 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._251,
        ..._255,
        ..._259,
        ..._263,
        ..._268
      };
      export const v2 = {
        ..._109
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._252,
        ..._256,
        ..._260,
        ..._264,
        ..._269
      };
    }
    export namespace client {
      export const v1 = {
        ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._253,
        ..._257,
        ..._261,
        ..._265,
        ..._270
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._118
      };
    }
    export namespace connection {
      export const v1 = {
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._254,
        ..._258,
        ..._262,
        ..._266,
        ..._271
      };
    }
    export namespace port {
      export const v1 = {
        ..._123,
        ..._267
      };
    }
    export namespace types {
      export const v1 = {
        ..._124
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._125
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._126
      };
      export const v2 = {
        ..._127
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._128
      };
    }
  }
  export const ClientFactory = {
    ..._304,
    ..._305,
    ..._306
  };
}