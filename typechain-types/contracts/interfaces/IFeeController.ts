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
  AddressLike,
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

export declare namespace IFeeController {
  export type FeeConfigStruct = {
    feeType: BigNumberish;
    feePercentage: BigNumberish;
  };

  export type FeeConfigStructOutput = [
    feeType: bigint,
    feePercentage: bigint
  ] & { feeType: bigint; feePercentage: bigint };
}

export interface IFeeControllerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateFee"
      | "calculateTokenAmount"
      | "functionFeeConfig"
      | "getTokenForAction"
      | "hasOracle"
      | "maxFeeLimit"
      | "minFeeInUSD"
      | "priceOracle"
      | "setFunctionFeeConfig"
      | "setGlobalTokenGetter"
      | "setTokenGetter"
      | "tokenGetter"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FeeConfigSet"
      | "GlobalTokenGetterSet"
      | "MinFeeSet"
      | "TokenGetterSet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "calculateFee",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTokenAmount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "functionFeeConfig",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenForAction",
    values: [AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasOracle",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxFeeLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minFeeInUSD",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFunctionFeeConfig",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalTokenGetter",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenGetter",
    values: [BytesLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenGetter",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "functionFeeConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenForAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxFeeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minFeeInUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFunctionFeeConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalTokenGetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenGetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenGetter",
    data: BytesLike
  ): Result;
}

export namespace FeeConfigSetEvent {
  export type InputTuple = [
    selector: BytesLike,
    feeType: BigNumberish,
    feePercentage: BigNumberish
  ];
  export type OutputTuple = [
    selector: string,
    feeType: bigint,
    feePercentage: bigint
  ];
  export interface OutputObject {
    selector: string;
    feeType: bigint;
    feePercentage: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GlobalTokenGetterSetEvent {
  export type InputTuple = [selector: BytesLike, tokenGetter: AddressLike];
  export type OutputTuple = [selector: string, tokenGetter: string];
  export interface OutputObject {
    selector: string;
    tokenGetter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinFeeSetEvent {
  export type InputTuple = [feeType: BigNumberish, minFeeUSD: BigNumberish];
  export type OutputTuple = [feeType: bigint, minFeeUSD: bigint];
  export interface OutputObject {
    feeType: bigint;
    minFeeUSD: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenGetterSetEvent {
  export type InputTuple = [
    target: AddressLike,
    selector: BytesLike,
    tokenGetter: AddressLike
  ];
  export type OutputTuple = [
    target: string,
    selector: string,
    tokenGetter: string
  ];
  export interface OutputObject {
    target: string;
    selector: string;
    tokenGetter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IFeeController extends BaseContract {
  connect(runner?: ContractRunner | null): IFeeController;
  waitForDeployment(): Promise<this>;

  interface: IFeeControllerInterface;

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

  calculateFee: TypedContractMethod<
    [token: AddressLike, selector: BytesLike, volume: BigNumberish],
    [bigint],
    "view"
  >;

  calculateTokenAmount: TypedContractMethod<
    [token: AddressLike, feeInUSD: BigNumberish],
    [bigint],
    "view"
  >;

  functionFeeConfig: TypedContractMethod<
    [selector: BytesLike],
    [IFeeController.FeeConfigStructOutput],
    "view"
  >;

  getTokenForAction: TypedContractMethod<
    [target: AddressLike, selector: BytesLike, params: BytesLike],
    [[string, boolean]],
    "view"
  >;

  hasOracle: TypedContractMethod<[token: AddressLike], [boolean], "view">;

  maxFeeLimit: TypedContractMethod<[feeType: BigNumberish], [bigint], "view">;

  minFeeInUSD: TypedContractMethod<[feeType: BigNumberish], [bigint], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  setFunctionFeeConfig: TypedContractMethod<
    [selector: BytesLike, feeType: BigNumberish, feePercentage: BigNumberish],
    [void],
    "nonpayable"
  >;

  setGlobalTokenGetter: TypedContractMethod<
    [selector: BytesLike, tokenGetter: AddressLike],
    [void],
    "nonpayable"
  >;

  setTokenGetter: TypedContractMethod<
    [selector: BytesLike, tokenGetter: AddressLike, target: AddressLike],
    [void],
    "nonpayable"
  >;

  tokenGetter: TypedContractMethod<
    [target: AddressLike, selector: BytesLike],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateFee"
  ): TypedContractMethod<
    [token: AddressLike, selector: BytesLike, volume: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateTokenAmount"
  ): TypedContractMethod<
    [token: AddressLike, feeInUSD: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "functionFeeConfig"
  ): TypedContractMethod<
    [selector: BytesLike],
    [IFeeController.FeeConfigStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenForAction"
  ): TypedContractMethod<
    [target: AddressLike, selector: BytesLike, params: BytesLike],
    [[string, boolean]],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasOracle"
  ): TypedContractMethod<[token: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "maxFeeLimit"
  ): TypedContractMethod<[feeType: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "minFeeInUSD"
  ): TypedContractMethod<[feeType: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFunctionFeeConfig"
  ): TypedContractMethod<
    [selector: BytesLike, feeType: BigNumberish, feePercentage: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGlobalTokenGetter"
  ): TypedContractMethod<
    [selector: BytesLike, tokenGetter: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTokenGetter"
  ): TypedContractMethod<
    [selector: BytesLike, tokenGetter: AddressLike, target: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tokenGetter"
  ): TypedContractMethod<
    [target: AddressLike, selector: BytesLike],
    [string],
    "view"
  >;

  getEvent(
    key: "FeeConfigSet"
  ): TypedContractEvent<
    FeeConfigSetEvent.InputTuple,
    FeeConfigSetEvent.OutputTuple,
    FeeConfigSetEvent.OutputObject
  >;
  getEvent(
    key: "GlobalTokenGetterSet"
  ): TypedContractEvent<
    GlobalTokenGetterSetEvent.InputTuple,
    GlobalTokenGetterSetEvent.OutputTuple,
    GlobalTokenGetterSetEvent.OutputObject
  >;
  getEvent(
    key: "MinFeeSet"
  ): TypedContractEvent<
    MinFeeSetEvent.InputTuple,
    MinFeeSetEvent.OutputTuple,
    MinFeeSetEvent.OutputObject
  >;
  getEvent(
    key: "TokenGetterSet"
  ): TypedContractEvent<
    TokenGetterSetEvent.InputTuple,
    TokenGetterSetEvent.OutputTuple,
    TokenGetterSetEvent.OutputObject
  >;

  filters: {
    "FeeConfigSet(bytes4,uint8,uint256)": TypedContractEvent<
      FeeConfigSetEvent.InputTuple,
      FeeConfigSetEvent.OutputTuple,
      FeeConfigSetEvent.OutputObject
    >;
    FeeConfigSet: TypedContractEvent<
      FeeConfigSetEvent.InputTuple,
      FeeConfigSetEvent.OutputTuple,
      FeeConfigSetEvent.OutputObject
    >;

    "GlobalTokenGetterSet(bytes4,address)": TypedContractEvent<
      GlobalTokenGetterSetEvent.InputTuple,
      GlobalTokenGetterSetEvent.OutputTuple,
      GlobalTokenGetterSetEvent.OutputObject
    >;
    GlobalTokenGetterSet: TypedContractEvent<
      GlobalTokenGetterSetEvent.InputTuple,
      GlobalTokenGetterSetEvent.OutputTuple,
      GlobalTokenGetterSetEvent.OutputObject
    >;

    "MinFeeSet(uint8,uint256)": TypedContractEvent<
      MinFeeSetEvent.InputTuple,
      MinFeeSetEvent.OutputTuple,
      MinFeeSetEvent.OutputObject
    >;
    MinFeeSet: TypedContractEvent<
      MinFeeSetEvent.InputTuple,
      MinFeeSetEvent.OutputTuple,
      MinFeeSetEvent.OutputObject
    >;

    "TokenGetterSet(address,bytes4,address)": TypedContractEvent<
      TokenGetterSetEvent.InputTuple,
      TokenGetterSetEvent.OutputTuple,
      TokenGetterSetEvent.OutputObject
    >;
    TokenGetterSet: TypedContractEvent<
      TokenGetterSetEvent.InputTuple,
      TokenGetterSetEvent.OutputTuple,
      TokenGetterSetEvent.OutputObject
    >;
  };
}
