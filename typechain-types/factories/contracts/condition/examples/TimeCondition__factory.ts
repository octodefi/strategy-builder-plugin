/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  TimeCondition,
  TimeConditionInterface,
} from "../../../../contracts/condition/examples/TimeCondition";

const _abi = [
  {
    inputs: [],
    name: "ConditionAlreadyExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ConditionAlreadyInUseOfAutomation",
    type: "error",
  },
  {
    inputs: [],
    name: "ConditionAlreadyInUseOfStrategy",
    type: "error",
  },
  {
    inputs: [],
    name: "ConditionDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ConditionIsInUse",
    type: "error",
  },
  {
    inputs: [],
    name: "ConditionNotInUseOfAutomation",
    type: "error",
  },
  {
    inputs: [],
    name: "ConditionNotInUseOfStrategy",
    type: "error",
  },
  {
    inputs: [],
    name: "ConditionsIsNotUpdateable",
    type: "error",
  },
  {
    inputs: [],
    name: "DeltaNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "ExecutionTimeNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "automation",
        type: "uint32",
      },
    ],
    name: "AutomationAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "automation",
        type: "uint32",
      },
    ],
    name: "AutomationRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "execution",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delta",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "updateable",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct ITimeCondition.Condition",
        name: "condition",
        type: "tuple",
      },
    ],
    name: "ConditionAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
    ],
    name: "ConditionDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "ConditionDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newExecution",
        type: "uint256",
      },
    ],
    name: "ConditionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "strategy",
        type: "uint32",
      },
    ],
    name: "StrategyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "strategy",
        type: "uint32",
      },
    ],
    name: "StrategyRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "automation",
        type: "uint32",
      },
    ],
    name: "addAutomationToCondition",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_id",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "execution",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delta",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "updateable",
            type: "bool",
          },
        ],
        internalType: "struct ITimeCondition.Condition",
        name: "_condition",
        type: "tuple",
      },
    ],
    name: "addCondition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "strategy",
        type: "uint32",
      },
    ],
    name: "addStrategyToCondition",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
    ],
    name: "automations",
    outputs: [
      {
        internalType: "uint32[]",
        name: "",
        type: "uint32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_id",
        type: "uint32",
      },
    ],
    name: "checkCondition",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "automationId",
        type: "uint32",
      },
    ],
    name: "conditionInAutomation",
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
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "strategyId",
        type: "uint32",
      },
    ],
    name: "conditionInStrategy",
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
        internalType: "uint32",
        name: "_id",
        type: "uint32",
      },
    ],
    name: "deleteCondition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
    ],
    name: "isConditionActive",
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
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_id",
        type: "uint32",
      },
    ],
    name: "isUpdateable",
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
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "automation",
        type: "uint32",
      },
    ],
    name: "removeAutomationFromCondition",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "strategy",
        type: "uint32",
      },
    ],
    name: "removeStrategyFromCondition",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
    ],
    name: "strategies",
    outputs: [
      {
        internalType: "uint32[]",
        name: "",
        type: "uint32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_id",
        type: "uint32",
      },
    ],
    name: "updateCondition",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_id",
        type: "uint32",
      },
    ],
    name: "walletCondition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "execution",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delta",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "updateable",
            type: "bool",
          },
        ],
        internalType: "struct ITimeCondition.Condition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506114e98061001f6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806357182cae116100975780638a4914c2116100665780638a4914c2146102b3578063d8cd9c1b146102c6578063e5012fb4146102d9578063eec93dd0146102ec57600080fd5b806357182cae146102005780636f2b9aff146102445780638455c3d01461027b57806389a78a031461028e57600080fd5b80631245f298116100d35780631245f2981461017957806314b0af701461018c578063384c879d1461019f5780634fdcabb8146101bf57600080fd5b806301ffc9a714610105578063023ef5a91461013e57806303d049bb1461015157806310bdddc814610164575b600080fd5b610129610113366004611223565b6001600160e01b03191663732d321f60e01b1490565b60405190151581526020015b60405180910390f35b61012961014c366004611266565b6102ff565b61012961015f366004611299565b610478565b6101776101723660046112b4565b61058b565b005b610177610187366004611299565b61064d565b61012961019a366004611266565b6106ca565b6101b26101ad36600461130a565b610904565b6040516101359190611326565b6101296101cd36600461130a565b6001600160a01b038216600090815260046020908152604080832063ffffffff8516845290915290205460ff1692915050565b61012961020e36600461130a565b6001600160a01b038216600090815260056020908152604080832063ffffffff8516845290915290206002015460ff1692915050565b61025761025236600461130a565b6109ac565b60408051825181526020808401519082015291810151151590820152606001610135565b61012961028936600461136f565b610a2b565b6102a161029c36600461130a565b610b2c565b60405160ff9091168152602001610135565b6101296102c1366004611266565b610bad565b6101296102d436600461136f565b610dd4565b6101296102e7366004611266565b610ea0565b6101b26102fa36600461130a565b61100b565b33600090815260046020908152604080832063ffffffff86168452909152812054839060ff1661034257604051637c748e2960e01b815260040160405180910390fd5b828063ffffffff1660000361036a57604051637ae9080f60e11b815260040160405180910390fd5b610375338686610a2b565b156103935760405163433aca2960e01b815260040160405180910390fd5b33600090815260016020818152604080842063ffffffff8a8116808752918452918520805480860182558187529386206008850401805460079095166004026101000a80850219909516938b169490940292909217909255925290546103f991906113c8565b33600081815260036020908152604080832063ffffffff8b81168086529184528285208b821680875290855294839020805463ffffffff19169790911696909617909555519182527f64ed0b78fd4903b0c4a53da49298cec5f2ab5e723bbe6ba4602be84cc8c5fc6591015b60405180910390a3506001949350505050565b33600090815260056020908152604080832063ffffffff8516845282528083208151606081018352815480825260018301549482019490945260029091015460ff16151591810191909152904210156104e457604051637212a18360e11b815260040160405180910390fd5b6020810151815182906104f89083906113db565b90525033600081815260056020908152604080832063ffffffff8816808552908352928190208551808255868401516001830155868301516002909201805460ff1916921515929092179091558151938452918301939093528183015290517f4512841be653bcd6562897298746e2d671f964036bf8fc1342f86ecabe30d331916060908290030190a150600192915050565b8042813510156105ae5760405163326db01f60e11b815260040160405180910390fd5b610e10816020013510156105d5576040516336027a8f60e21b815260040160405180910390fd5b33600090815260056020908152604080832063ffffffff871684529091529020829061060182826113ff565b90505061060d83611088565b7fb426363a4b10243595274732519e5a718e5fd0cfbfc6d4adac581cff27b3c2d783338460405161064093929190611435565b60405180910390a1505050565b61065681611123565b33600081815260056020908152604080832063ffffffff861680855290835281842084815560018101949094556002909301805460ff191690558051928352908201929092527f9c33cb453d76063bb338c509094bd32900fe4a7e3ccbb52ef947618994a4a6c3910160405180910390a150565b33600090815260046020908152604080832063ffffffff86168452909152812054839060ff1661070d57604051637c748e2960e01b815260040160405180910390fd5b610718338585610dd4565b61073557604051630163c8ad60e71b815260040160405180910390fd5b3360008181526020818152604080832063ffffffff808a16808652918452828520958552600284528285209185529083528184208882168552909252822054835491169190610786906001906113c8565b90508163ffffffff16811461084c5760008382815481106107a9576107a9611487565b6000918252602080832060088304015433845260028252604080852063ffffffff8e8116875290845281862060079095166004026101000a9092048216808652939092529220805463ffffffff19169286169283179055855490925082918691811061081757610817611487565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550505b8280548061085c5761085c61149d565b6000828152602080822060086000199490940193840401805463ffffffff600460078716026101000a81021990911690915592909355338082526002845260408083208c8516808552908652818420948c1680855294865292819020805463ffffffff1916905551928352909290917fc29fe8f04eaa995e540803e6abbd839f149e3b6b8dc9d66f7b411e6ad92f1ebf91015b60405180910390a35060019695505050505050565b6001600160a01b038216600090815260016020908152604080832063ffffffff8516845282529182902080548351818402810184019094528084526060939283018282801561099e57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116109615790505b505050505090505b92915050565b6109d2604051806060016040528060008152602001600081526020016000151581525090565b506001600160a01b038216600090815260056020908152604080832063ffffffff851684528252918290208251606081018452815481526001820154928101929092526002015460ff1615159181019190915292915050565b6001600160a01b038316600081815260036020908152604080832063ffffffff8088168086529184528285208782168652845282852054958552600184528285209185529252822054919216901580610aad57506001600160a01b038516600090815260016020908152604080832063ffffffff881684529091529020548110155b15610abc576000915050610b25565b6001600160a01b038516600090815260016020908152604080832063ffffffff8881168552925290912080549185169183908110610afc57610afc611487565b6000918252602090912060088204015460079091166004026101000a900463ffffffff16149150505b9392505050565b6001600160a01b038216600090815260056020908152604080832063ffffffff8516845282528083208151606081018352815480825260018301549482019490945260029091015460ff16151591810191909152908203610b915760009150506109a6565b80514210610ba35760019150506109a6565b60009150506109a6565b33600090815260046020908152604080832063ffffffff86168452909152812054839060ff16610bf057604051637c748e2960e01b815260040160405180910390fd5b610bfb338585610a2b565b610c175760405162ede60b60e71b815260040160405180910390fd5b33600081815260016020818152604080842063ffffffff808b16808752918452828620968652600384528286209186529083528185208982168652909252832054845491169291610c67916113c8565b90508163ffffffff168114610d2d576000838281548110610c8a57610c8a611487565b6000918252602080832060088304015433845260038252604080852063ffffffff8e8116875290845281862060079095166004026101000a9092048216808652939092529220805463ffffffff191692861692831790558554909250829186918110610cf857610cf8611487565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550505b82805480610d3d57610d3d61149d565b6000828152602080822060086000199490940193840401805463ffffffff600460078716026101000a81021990911690915592909355338082526003845260408083208c8516808552908652818420948c1680855294865292819020805463ffffffff1916905551928352909290917f2be6cc3208d4434b357c0fdd8ae07d6e1f69605413b29b13d68bbd943a225dea91016108ef565b6001600160a01b038316600081815260026020908152604080832063ffffffff80881680865291845282852087821686528452828520549585528484528285209185529252822054919216901580610e5357506001600160a01b03851660009081526020818152604080832063ffffffff881684529091529020548110155b15610e62576000915050610b25565b6001600160a01b03851660009081526020818152604080832063ffffffff8881168552925290912080549185169183908110610afc57610afc611487565b33600090815260046020908152604080832063ffffffff86168452909152812054839060ff16610ee357604051637c748e2960e01b815260040160405180910390fd5b828063ffffffff16600003610f0b57604051637ae9080f60e11b815260040160405180910390fd5b610f16338686610dd4565b15610f3457604051630662978b60e51b815260040160405180910390fd5b3360009081526020818152604080832063ffffffff8981168086529184529184208054600180820183558287529486206008820401805460079092166004026101000a80860219909216948b1691909102939093179092559092529054610f9b91906113c8565b33600081815260026020908152604080832063ffffffff8b81168086529184528285208b821680875290855294839020805463ffffffff19169790911696909617909555519182527fe4fed7933c124d57c605c2c0c04bf0518034d885e739653e3cc6667526d65d169101610465565b6001600160a01b03821660009081526020818152604080832063ffffffff8516845282529182902080548351818402810184019094528084526060939283018282801561099e576000918252602091829020805463ffffffff16845290820283019290916004910180841161096157509498975050505050505050565b33600090815260046020908152604080832063ffffffff85168452909152902054819060ff16156110cc576040516303d0619f60e61b815260040160405180910390fd5b818063ffffffff166000036110f457604051637ae9080f60e11b815260040160405180910390fd5b505033600090815260046020908152604080832063ffffffff909416835292905220805460ff19166001179055565b33600090815260046020908152604080832063ffffffff85168452909152902054819060ff1661116657604051637c748e2960e01b815260040160405180910390fd5b33600090815260016020908152604080832063ffffffff861684529091529020541515806111b157503360009081526020818152604080832063ffffffff8616845290915290205415155b156111cf57604051637b28591360e01b815260040160405180910390fd5b33600081815260046020908152604080832063ffffffff87168085529252808320805460ff19169055519092917fb0f65a798e2cdda82f7d8ae7ab05d5c06b04d3f8470e4765ff56af507889d19c91a35050565b60006020828403121561123557600080fd5b81356001600160e01b031981168114610b2557600080fd5b803563ffffffff8116811461126157600080fd5b919050565b6000806040838503121561127957600080fd5b6112828361124d565b91506112906020840161124d565b90509250929050565b6000602082840312156112ab57600080fd5b610b258261124d565b60008082840360808112156112c857600080fd5b6112d18461124d565b92506060601f19820112156112e557600080fd5b506020830190509250929050565b80356001600160a01b038116811461126157600080fd5b6000806040838503121561131d57600080fd5b611282836112f3565b602080825282518282018190526000918401906040840190835b8181101561136457835163ffffffff16835260209384019390920191600101611340565b509095945050505050565b60008060006060848603121561138457600080fd5b61138d846112f3565b925061139b6020850161124d565b91506113a96040850161124d565b90509250925092565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a6576109a66113b2565b808201808211156109a6576109a66113b2565b80151581146113fc57600080fd5b50565b813581556020820135600182015560028101604083013561141f816113ee565b815490151560ff1660ff19919091161790555050565b63ffffffff841681526001600160a01b038316602080830191909152823560408084019190915290830135606083015260a0820190830135611476816113ee565b801515608084015250949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220e24f4a9452e3ca444dbdefb141e99cf69c95abc2e276710d9bc991dcdbc208e864736f6c634300081c0033";

type TimeConditionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeConditionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeCondition__factory extends ContractFactory {
  constructor(...args: TimeConditionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TimeCondition & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TimeCondition__factory {
    return super.connect(runner) as TimeCondition__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeConditionInterface {
    return new Interface(_abi) as TimeConditionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TimeCondition {
    return new Contract(address, _abi, runner) as unknown as TimeCondition;
  }
}
