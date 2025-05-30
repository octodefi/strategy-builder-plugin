/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace PythStructs {
  export type PriceStruct = {
    price: BigNumberish;
    conf: BigNumberish;
    expo: BigNumberish;
    publishTime: BigNumberish;
  };

  export type PriceStructOutput = [
    price: bigint,
    conf: bigint,
    expo: bigint,
    publishTime: bigint
  ] & { price: bigint; conf: bigint; expo: bigint; publishTime: bigint };

  export type PriceFeedStruct = {
    id: BytesLike;
    price: PythStructs.PriceStruct;
    emaPrice: PythStructs.PriceStruct;
  };

  export type PriceFeedStructOutput = [
    id: string,
    price: PythStructs.PriceStructOutput,
    emaPrice: PythStructs.PriceStructOutput
  ] & {
    id: string;
    price: PythStructs.PriceStructOutput;
    emaPrice: PythStructs.PriceStructOutput;
  };
}

export interface IPythInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getEmaPriceNoOlderThan"
      | "getEmaPriceUnsafe"
      | "getPriceNoOlderThan"
      | "getPriceUnsafe"
      | "getUpdateFee"
      | "parsePriceFeedUpdates"
      | "parsePriceFeedUpdatesUnique"
      | "updatePriceFeeds"
      | "updatePriceFeedsIfNecessary"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "PriceFeedUpdate"): EventFragment;

  encodeFunctionData(
    functionFragment: "getEmaPriceNoOlderThan",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmaPriceUnsafe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceNoOlderThan",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceUnsafe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpdateFee",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "parsePriceFeedUpdates",
    values: [BytesLike[], BytesLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "parsePriceFeedUpdatesUnique",
    values: [BytesLike[], BytesLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeeds",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeedsIfNecessary",
    values: [BytesLike[], BytesLike[], BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEmaPriceNoOlderThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmaPriceUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceNoOlderThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpdateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parsePriceFeedUpdates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parsePriceFeedUpdatesUnique",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeedsIfNecessary",
    data: BytesLike
  ): Result;
}

export namespace PriceFeedUpdateEvent {
  export type InputTuple = [
    id: BytesLike,
    publishTime: BigNumberish,
    price: BigNumberish,
    conf: BigNumberish
  ];
  export type OutputTuple = [
    id: string,
    publishTime: bigint,
    price: bigint,
    conf: bigint
  ];
  export interface OutputObject {
    id: string;
    publishTime: bigint;
    price: bigint;
    conf: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPyth extends BaseContract {
  connect(runner?: ContractRunner | null): IPyth;
  waitForDeployment(): Promise<this>;

  interface: IPythInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getEmaPriceNoOlderThan: TypedContractMethod<
    [id: BytesLike, age: BigNumberish],
    [PythStructs.PriceStructOutput],
    "view"
  >;

  getEmaPriceUnsafe: TypedContractMethod<
    [id: BytesLike],
    [PythStructs.PriceStructOutput],
    "view"
  >;

  getPriceNoOlderThan: TypedContractMethod<
    [id: BytesLike, age: BigNumberish],
    [PythStructs.PriceStructOutput],
    "view"
  >;

  getPriceUnsafe: TypedContractMethod<
    [id: BytesLike],
    [PythStructs.PriceStructOutput],
    "view"
  >;

  getUpdateFee: TypedContractMethod<
    [updateData: BytesLike[]],
    [bigint],
    "view"
  >;

  parsePriceFeedUpdates: TypedContractMethod<
    [
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish
    ],
    [PythStructs.PriceFeedStructOutput[]],
    "payable"
  >;

  parsePriceFeedUpdatesUnique: TypedContractMethod<
    [
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish
    ],
    [PythStructs.PriceFeedStructOutput[]],
    "payable"
  >;

  updatePriceFeeds: TypedContractMethod<
    [updateData: BytesLike[]],
    [void],
    "payable"
  >;

  updatePriceFeedsIfNecessary: TypedContractMethod<
    [
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getEmaPriceNoOlderThan"
  ): TypedContractMethod<
    [id: BytesLike, age: BigNumberish],
    [PythStructs.PriceStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getEmaPriceUnsafe"
  ): TypedContractMethod<
    [id: BytesLike],
    [PythStructs.PriceStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriceNoOlderThan"
  ): TypedContractMethod<
    [id: BytesLike, age: BigNumberish],
    [PythStructs.PriceStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriceUnsafe"
  ): TypedContractMethod<
    [id: BytesLike],
    [PythStructs.PriceStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUpdateFee"
  ): TypedContractMethod<[updateData: BytesLike[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "parsePriceFeedUpdates"
  ): TypedContractMethod<
    [
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish
    ],
    [PythStructs.PriceFeedStructOutput[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "parsePriceFeedUpdatesUnique"
  ): TypedContractMethod<
    [
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish
    ],
    [PythStructs.PriceFeedStructOutput[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "updatePriceFeeds"
  ): TypedContractMethod<[updateData: BytesLike[]], [void], "payable">;
  getFunction(
    nameOrSignature: "updatePriceFeedsIfNecessary"
  ): TypedContractMethod<
    [
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  getEvent(
    key: "PriceFeedUpdate"
  ): TypedContractEvent<
    PriceFeedUpdateEvent.InputTuple,
    PriceFeedUpdateEvent.OutputTuple,
    PriceFeedUpdateEvent.OutputObject
  >;

  filters: {
    "PriceFeedUpdate(bytes32,uint64,int64,uint64)": TypedContractEvent<
      PriceFeedUpdateEvent.InputTuple,
      PriceFeedUpdateEvent.OutputTuple,
      PriceFeedUpdateEvent.OutputObject
    >;
    PriceFeedUpdate: TypedContractEvent<
      PriceFeedUpdateEvent.InputTuple,
      PriceFeedUpdateEvent.OutputTuple,
      PriceFeedUpdateEvent.OutputObject
    >;
  };
}
