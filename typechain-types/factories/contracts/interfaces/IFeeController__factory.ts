/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFeeController,
  IFeeControllerInterface,
} from "../../../contracts/interfaces/IFeeController";

const _abi = [
  {
    inputs: [],
    name: "FeePercentageExceedLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidArrayLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenWithPriceOfZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NoOracleExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressNotValid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "enum IFeeController.FeeType",
        name: "feeType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePercentage",
        type: "uint256",
      },
    ],
    name: "FeeConfigSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenGetter",
        type: "address",
      },
    ],
    name: "GlobalTokenGetterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum IFeeController.FeeType",
        name: "feeType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minFeeUSD",
        type: "uint256",
      },
    ],
    name: "MinFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenGetter",
        type: "address",
      },
    ],
    name: "TokenGetterSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
    ],
    name: "calculateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeInUSD",
        type: "uint256",
      },
    ],
    name: "calculateTokenAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "functionFeeConfig",
    outputs: [
      {
        components: [
          {
            internalType: "enum IFeeController.FeeType",
            name: "feeType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "feePercentage",
            type: "uint256",
          },
        ],
        internalType: "struct IFeeController.FeeConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "getTokenForAction",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "hasOracle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFeeController.FeeType",
        name: "feeType",
        type: "uint8",
      },
    ],
    name: "maxFeeLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFeeController.FeeType",
        name: "feeType",
        type: "uint8",
      },
    ],
    name: "minFeeInUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "enum IFeeController.FeeType",
        name: "feeType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "feePercentage",
        type: "uint256",
      },
    ],
    name: "setFunctionFeeConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "tokenGetter",
        type: "address",
      },
    ],
    name: "setGlobalTokenGetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "tokenGetter",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "setTokenGetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "tokenGetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IFeeController__factory {
  static readonly abi = _abi;
  static createInterface(): IFeeControllerInterface {
    return new Interface(_abi) as IFeeControllerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IFeeController {
    return new Contract(address, _abi, runner) as unknown as IFeeController;
  }
}
