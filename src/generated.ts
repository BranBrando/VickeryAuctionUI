import {
  useContractRead,
  UseContractReadConfig,
  useContractEvent,
  UseContractEventConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressABI = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BasicTransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const basicTransparentUpgradeableProxyABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: '_admin', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidAdmin',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'ProxyDeniedAdminAccess' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967ProxyABI = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Utils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UtilsABI = [
  {
    type: 'error',
    inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidAdmin',
  },
  {
    type: 'error',
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidBeacon',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBeaconABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1822Proxiable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1822ProxiableABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1967
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1967ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3ABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTransparentUpgradeableProxyABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableABI = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathABI = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_decimals', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyABI = [
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProxyAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAdminABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract ITransparentUpgradeableProxy',
        type: 'address',
      },
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeAndCall',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testErc20ABI = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testErc721ABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenizedVickeryAuction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenizedVickeryAuctionABI = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'auctions',
    outputs: [
      { name: 'seller', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfBiddingPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'numUnrevealedBids', internalType: 'uint64', type: 'uint64' },
      { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'highestBidder', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint64', type: 'uint64' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'bids',
    outputs: [
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'collateral', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'erc20Tokens', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'commitBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'bidPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'revealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'createAuction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'endAuction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAuction',
    outputs: [
      {
        name: 'auction',
        internalType: 'struct TokenizedVickeryAuction.Auction',
        type: 'tuple',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numUnrevealedBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'bidValue', internalType: 'uint96', type: 'uint96' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealBid',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'testNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'auctionIndex', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'withdrawCollateral',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenizedVickeryAuctionV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenizedVickeryAuctionV2ABI = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'auctions',
    outputs: [
      { name: 'seller', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfBiddingPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'numUnrevealedBids', internalType: 'uint64', type: 'uint64' },
      { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
      { name: 'highestBidder', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint64', type: 'uint64' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'bids',
    outputs: [
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'collateral', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'seller', internalType: 'address', type: 'address' }],
    name: 'blackList',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'commitment', internalType: 'bytes20', type: 'bytes20' },
      { name: 'erc20Tokens', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'commitBid',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'erc20Token', internalType: 'address', type: 'address' },
      { name: 'startTime', internalType: 'uint32', type: 'uint32' },
      { name: 'bidPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'revealPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'reservePrice', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'createAuction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'endAuction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAuction',
    outputs: [
      {
        name: 'auction',
        internalType: 'struct TokenizedVickeryAuction.Auction',
        type: 'tuple',
        components: [
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'startTime', internalType: 'uint32', type: 'uint32' },
          {
            name: 'endOfBiddingPeriod',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'endOfRevealPeriod', internalType: 'uint32', type: 'uint32' },
          { name: 'numUnrevealedBids', internalType: 'uint64', type: 'uint64' },
          { name: 'highestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'secondHighestBid', internalType: 'uint96', type: 'uint96' },
          { name: 'highestBidder', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint64', type: 'uint64' },
          { name: 'erc20Token', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'seller', internalType: 'address', type: 'address' }],
    name: 'getBlacklistStatus',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isBlacklisted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'seller', internalType: 'address', type: 'address' }],
    name: 'removeFromBlacklist',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'bidValue', internalType: 'uint96', type: 'uint96' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealBid',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'testNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'auctionIndex', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'withdrawCollateral',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransparentProxyDeployer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transparentProxyDeployerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_implementation', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxy',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransparentUpdateProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transparentUpdateProxyABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transparentUpgradeableProxyABI = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: 'initialOwner', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidAdmin',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'ProxyDeniedAdminAccess' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UUPSUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uupsUpgradeableABI = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link basicTransparentUpgradeableProxyABI}__.
 */
export function useBasicTransparentUpgradeableProxyRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof basicTransparentUpgradeableProxyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof basicTransparentUpgradeableProxyABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: basicTransparentUpgradeableProxyABI,
    ...config,
  } as UseContractReadConfig<
    typeof basicTransparentUpgradeableProxyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link basicTransparentUpgradeableProxyABI}__ and `functionName` set to `"getAdmin"`.
 */
export function useBasicTransparentUpgradeableProxyGetAdmin<
  TFunctionName extends 'getAdmin',
  TSelectData = ReadContractResult<
    typeof basicTransparentUpgradeableProxyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof basicTransparentUpgradeableProxyABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: basicTransparentUpgradeableProxyABI,
    functionName: 'getAdmin',
    ...config,
  } as UseContractReadConfig<
    typeof basicTransparentUpgradeableProxyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link basicTransparentUpgradeableProxyABI}__.
 */
export function useBasicTransparentUpgradeableProxyEvent<
  TEventName extends string,
>(
  config: Omit<
    UseContractEventConfig<
      typeof basicTransparentUpgradeableProxyABI,
      TEventName
    >,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: basicTransparentUpgradeableProxyABI,
    ...config,
  } as UseContractEventConfig<
    typeof basicTransparentUpgradeableProxyABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link basicTransparentUpgradeableProxyABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useBasicTransparentUpgradeableProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof basicTransparentUpgradeableProxyABI,
      'AdminChanged'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: basicTransparentUpgradeableProxyABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<
    typeof basicTransparentUpgradeableProxyABI,
    'AdminChanged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link basicTransparentUpgradeableProxyABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useBasicTransparentUpgradeableProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof basicTransparentUpgradeableProxyABI,
      'Upgraded'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: basicTransparentUpgradeableProxyABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<
    typeof basicTransparentUpgradeableProxyABI,
    'Upgraded'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"number"`.
 */
export function useCounterNumber<
  TFunctionName extends 'number',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    functionName: 'number',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function useCounterIncrement<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'increment'
        >['request']['abi'],
        'increment',
        TMode
      > & { functionName?: 'increment' }
    : UseContractWriteConfig<typeof counterABI, 'increment', TMode> & {
        abi?: never
        functionName?: 'increment'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'increment', TMode>({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function useCounterSetNumber<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'setNumber'
        >['request']['abi'],
        'setNumber',
        TMode
      > & { functionName?: 'setNumber' }
    : UseContractWriteConfig<typeof counterABI, 'setNumber', TMode> & {
        abi?: never
        functionName?: 'setNumber'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'setNumber', TMode>({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function usePrepareCounterIncrement(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'increment'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'increment'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function usePrepareCounterSetNumber(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__.
 */
export function useErc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc165ABI, ...config } as UseContractReadConfig<
    typeof erc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967ProxyABI}__.
 */
export function useErc1967ProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc1967ProxyABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967ProxyABI,
    ...config,
  } as UseContractEventConfig<typeof erc1967ProxyABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967ProxyABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useErc1967ProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967ProxyABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967ProxyABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof erc1967ProxyABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UtilsABI}__.
 */
export function useErc1967UtilsEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc1967UtilsABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UtilsABI,
    ...config,
  } as UseContractEventConfig<typeof erc1967UtilsABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UtilsABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useErc1967UtilsAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967UtilsABI, 'AdminChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UtilsABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof erc1967UtilsABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UtilsABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useErc1967UtilsBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967UtilsABI, 'BeaconUpgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UtilsABI,
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof erc1967UtilsABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc1967UtilsABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useErc1967UtilsUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc1967UtilsABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc1967UtilsABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof erc1967UtilsABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({
    abi: erc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, TFunctionName, TMode>({
    abi: erc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'approve', TMode>({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'safeTransferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'setApprovalForAll', TMode>({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'transferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iBeaconABI}__.
 */
export function useIBeaconRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iBeaconABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iBeaconABI,
    ...config,
  } as UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iBeaconABI}__ and `functionName` set to `"implementation"`.
 */
export function useIBeaconImplementation<
  TFunctionName extends 'implementation',
  TSelectData = ReadContractResult<typeof iBeaconABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iBeaconABI,
    functionName: 'implementation',
    ...config,
  } as UseContractReadConfig<typeof iBeaconABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function useIerc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1822ProxiableABI}__.
 */
export function useIerc1822ProxiableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc1822ProxiableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc1822ProxiableABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1822ProxiableABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc1822ProxiableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc1822ProxiableABI}__ and `functionName` set to `"proxiableUUID"`.
 */
export function useIerc1822ProxiableProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<typeof ierc1822ProxiableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc1822ProxiableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc1822ProxiableABI,
    functionName: 'proxiableUUID',
    ...config,
  } as UseContractReadConfig<
    typeof ierc1822ProxiableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1967ABI}__.
 */
export function useIerc1967Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc1967ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc1967ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc1967ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1967ABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useIerc1967AdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc1967ABI, 'AdminChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc1967ABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof ierc1967ABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1967ABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useIerc1967BeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc1967ABI, 'BeaconUpgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc1967ABI,
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof ierc1967ABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc1967ABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useIerc1967UpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc1967ABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc1967ABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof ierc1967ABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: ierc20ABI, ...config } as UseContractReadConfig<
    typeof ierc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, TFunctionName, TMode>({
    abi: ierc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'approve', TMode>({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof ierc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'transfer', TMode>({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'transferFrom', TMode>({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function usePrepareIerc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20MetadataAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20MetadataBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"decimals"`.
 */
export function useIerc20MetadataDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"name"`.
 */
export function useIerc20MetadataName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc20MetadataSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc20MetadataTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20MetadataABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, TFunctionName, TMode>({
    abi: ierc20MetadataABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20MetadataApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc20MetadataABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'approve', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20MetadataTransfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof ierc20MetadataABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'transfer', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20MetadataTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc20MetadataABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'transferFrom', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function usePrepareIerc20MetadataWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20MetadataApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20MetadataTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20MetadataTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20MetadataApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20MetadataTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, TFunctionName, TMode>({
    abi: ierc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'approve', TMode>({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'safeTransferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'setApprovalForAll', TMode>({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'transferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function usePrepareIerc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721MetadataBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721MetadataGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721MetadataIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"name"`.
 */
export function useIerc721MetadataName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721MetadataOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721MetadataSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc721MetadataSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useIerc721MetadataTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, TFunctionName, TMode>({
    abi: ierc721MetadataABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721MetadataApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721MetadataABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'approve', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721MetadataSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'safeTransferFrom', TMode>(
    {
      abi: ierc721MetadataABI,
      functionName: 'safeTransferFrom',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721MetadataSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721MetadataABI,
    'setApprovalForAll',
    TMode
  >({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721MetadataTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'transferFrom', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function usePrepareIerc721MetadataWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721MetadataApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721MetadataSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721MetadataSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721MetadataTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721MetadataApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721MetadataApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721MetadataTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function useIerc721ReceiverWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, TFunctionName, TMode>({
    abi: ierc721ReceiverABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useIerc721ReceiverOnErc721Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          'onERC721Received'
        >['request']['abi'],
        'onERC721Received',
        TMode
      > & { functionName?: 'onERC721Received' }
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        'onERC721Received',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC721Received'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, 'onERC721Received', TMode>(
    {
      abi: ierc721ReceiverABI,
      functionName: 'onERC721Received',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function usePrepareIerc721ReceiverWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareIerc721ReceiverOnErc721Received(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721ReceiverABI,
      'onERC721Received'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721ReceiverABI,
    'onERC721Received'
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__.
 */
export function useIerc721TokenReceiverWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721TokenReceiverABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721TokenReceiverABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721TokenReceiverABI, TFunctionName, TMode>(
    { abi: ierc721TokenReceiverABI, ...config } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useIerc721TokenReceiverOnErc721Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721TokenReceiverABI,
          'onERC721Received'
        >['request']['abi'],
        'onERC721Received',
        TMode
      > & { functionName?: 'onERC721Received' }
    : UseContractWriteConfig<
        typeof ierc721TokenReceiverABI,
        'onERC721Received',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC721Received'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721TokenReceiverABI,
    'onERC721Received',
    TMode
  >({
    abi: ierc721TokenReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__.
 */
export function usePrepareIerc721TokenReceiverWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721TokenReceiverABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721TokenReceiverABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721TokenReceiverABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721TokenReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareIerc721TokenReceiverOnErc721Received(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721TokenReceiverABI,
      'onERC721Received'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721TokenReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721TokenReceiverABI,
    'onERC721Received'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function useIMulticall3Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBasefee"`.
 */
export function useIMulticall3GetBasefee<
  TFunctionName extends 'getBasefee',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBasefee',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBlockHash"`.
 */
export function useIMulticall3GetBlockHash<
  TFunctionName extends 'getBlockHash',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBlockHash',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBlockNumber"`.
 */
export function useIMulticall3GetBlockNumber<
  TFunctionName extends 'getBlockNumber',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBlockNumber',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getChainId"`.
 */
export function useIMulticall3GetChainId<
  TFunctionName extends 'getChainId',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getChainId',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockCoinbase"`.
 */
export function useIMulticall3GetCurrentBlockCoinbase<
  TFunctionName extends 'getCurrentBlockCoinbase',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockCoinbase',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockDifficulty"`.
 */
export function useIMulticall3GetCurrentBlockDifficulty<
  TFunctionName extends 'getCurrentBlockDifficulty',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockDifficulty',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockGasLimit"`.
 */
export function useIMulticall3GetCurrentBlockGasLimit<
  TFunctionName extends 'getCurrentBlockGasLimit',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockGasLimit',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockTimestamp"`.
 */
export function useIMulticall3GetCurrentBlockTimestamp<
  TFunctionName extends 'getCurrentBlockTimestamp',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockTimestamp',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getEthBalance"`.
 */
export function useIMulticall3GetEthBalance<
  TFunctionName extends 'getEthBalance',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getEthBalance',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getLastBlockHash"`.
 */
export function useIMulticall3GetLastBlockHash<
  TFunctionName extends 'getLastBlockHash',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getLastBlockHash',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function useIMulticall3Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iMulticall3ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, TFunctionName, TMode>({
    abi: iMulticall3ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate"`.
 */
export function useIMulticall3Aggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate'
        >['request']['abi'],
        'aggregate',
        TMode
      > & { functionName?: 'aggregate' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'aggregate', TMode> & {
        abi?: never
        functionName?: 'aggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3"`.
 */
export function useIMulticall3Aggregate3<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate3'
        >['request']['abi'],
        'aggregate3',
        TMode
      > & { functionName?: 'aggregate3' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'aggregate3', TMode> & {
        abi?: never
        functionName?: 'aggregate3'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate3', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate3',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3Value"`.
 */
export function useIMulticall3Aggregate3Value<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate3Value'
        >['request']['abi'],
        'aggregate3Value',
        TMode
      > & { functionName?: 'aggregate3Value' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'aggregate3Value',
        TMode
      > & {
        abi?: never
        functionName?: 'aggregate3Value'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate3Value', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate3Value',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"blockAndAggregate"`.
 */
export function useIMulticall3BlockAndAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'blockAndAggregate'
        >['request']['abi'],
        'blockAndAggregate',
        TMode
      > & { functionName?: 'blockAndAggregate' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'blockAndAggregate',
        TMode
      > & {
        abi?: never
        functionName?: 'blockAndAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'blockAndAggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'blockAndAggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryAggregate"`.
 */
export function useIMulticall3TryAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'tryAggregate'
        >['request']['abi'],
        'tryAggregate',
        TMode
      > & { functionName?: 'tryAggregate' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate', TMode> & {
        abi?: never
        functionName?: 'tryAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'tryAggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'tryAggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryBlockAndAggregate"`.
 */
export function useIMulticall3TryBlockAndAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'tryBlockAndAggregate'
        >['request']['abi'],
        'tryBlockAndAggregate',
        TMode
      > & { functionName?: 'tryBlockAndAggregate' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'tryBlockAndAggregate',
        TMode
      > & {
        abi?: never
        functionName?: 'tryBlockAndAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'tryBlockAndAggregate', TMode>(
    {
      abi: iMulticall3ABI,
      functionName: 'tryBlockAndAggregate',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function usePrepareIMulticall3Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate"`.
 */
export function usePrepareIMulticall3Aggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3"`.
 */
export function usePrepareIMulticall3Aggregate3(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate3',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3Value"`.
 */
export function usePrepareIMulticall3Aggregate3Value(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3Value'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate3Value',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3Value'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"blockAndAggregate"`.
 */
export function usePrepareIMulticall3BlockAndAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'blockAndAggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'blockAndAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iMulticall3ABI,
    'blockAndAggregate'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryAggregate"`.
 */
export function usePrepareIMulticall3TryAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'tryAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryBlockAndAggregate"`.
 */
export function usePrepareIMulticall3TryBlockAndAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iMulticall3ABI,
      'tryBlockAndAggregate'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'tryBlockAndAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iMulticall3ABI,
    'tryBlockAndAggregate'
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__.
 */
export function useITransparentUpgradeableProxyWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iTransparentUpgradeableProxyABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof iTransparentUpgradeableProxyABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof iTransparentUpgradeableProxyABI,
    TFunctionName,
    TMode
  >({ abi: iTransparentUpgradeableProxyABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useITransparentUpgradeableProxyUpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iTransparentUpgradeableProxyABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & { functionName?: 'upgradeToAndCall' }
    : UseContractWriteConfig<
        typeof iTransparentUpgradeableProxyABI,
        'upgradeToAndCall',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  return useContractWrite<
    typeof iTransparentUpgradeableProxyABI,
    'upgradeToAndCall',
    TMode
  >({
    abi: iTransparentUpgradeableProxyABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__.
 */
export function usePrepareITransparentUpgradeableProxyWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iTransparentUpgradeableProxyABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iTransparentUpgradeableProxyABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iTransparentUpgradeableProxyABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareITransparentUpgradeableProxyUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iTransparentUpgradeableProxyABI,
      'upgradeToAndCall'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iTransparentUpgradeableProxyABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iTransparentUpgradeableProxyABI,
    'upgradeToAndCall'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__.
 */
export function useITransparentUpgradeableProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof iTransparentUpgradeableProxyABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: iTransparentUpgradeableProxyABI,
    ...config,
  } as UseContractEventConfig<
    typeof iTransparentUpgradeableProxyABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useITransparentUpgradeableProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof iTransparentUpgradeableProxyABI,
      'AdminChanged'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iTransparentUpgradeableProxyABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<
    typeof iTransparentUpgradeableProxyABI,
    'AdminChanged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useITransparentUpgradeableProxyBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof iTransparentUpgradeableProxyABI,
      'BeaconUpgraded'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iTransparentUpgradeableProxyABI,
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<
    typeof iTransparentUpgradeableProxyABI,
    'BeaconUpgraded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useITransparentUpgradeableProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof iTransparentUpgradeableProxyABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iTransparentUpgradeableProxyABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<
    typeof iTransparentUpgradeableProxyABI,
    'Upgraded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link initializableABI}__.
 */
export function useInitializableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof initializableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: initializableABI,
    ...config,
  } as UseContractEventConfig<typeof initializableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link initializableABI}__ and `eventName` set to `"Initialized"`.
 */
export function useInitializableInitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof initializableABI, 'Initialized'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: initializableABI,
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<typeof initializableABI, 'Initialized'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"DOMAIN_SEPARATOR"`.
 */
export function useMockErc20DomainSeparator<
  TFunctionName extends 'DOMAIN_SEPARATOR',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'DOMAIN_SEPARATOR',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useMockErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMockErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useMockErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"name"`.
 */
export function useMockErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"nonces"`.
 */
export function useMockErc20Nonces<
  TFunctionName extends 'nonces',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'nonces',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useMockErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useMockErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mockErc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, TFunctionName, TMode>({
    abi: mockErc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useMockErc20Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'approve', TMode>({
    abi: mockErc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"initialize"`.
 */
export function useMockErc20Initialize<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'initialize', TMode> & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'initialize', TMode>({
    abi: mockErc20ABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"permit"`.
 */
export function useMockErc20Permit<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'permit'
        >['request']['abi'],
        'permit',
        TMode
      > & { functionName?: 'permit' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'permit', TMode> & {
        abi?: never
        functionName?: 'permit'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'permit', TMode>({
    abi: mockErc20ABI,
    functionName: 'permit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useMockErc20Transfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'transfer', TMode>({
    abi: mockErc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof mockErc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, 'transferFrom', TMode>({
    abi: mockErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function usePrepareMockErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareMockErc20Initialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'initialize'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"permit"`.
 */
export function usePrepareMockErc20Permit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'permit'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'permit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'permit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareMockErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof mockErc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc20ABI,
    ...config,
  } as UseContractEventConfig<typeof mockErc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof mockErc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof mockErc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function useMockErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMockErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useMockErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useMockErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"name"`.
 */
export function useMockErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useMockErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useMockErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useMockErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useMockErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof mockErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockErc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof mockErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function useMockErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mockErc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, TFunctionName, TMode>({
    abi: mockErc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useMockErc721Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof mockErc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'approve', TMode>({
    abi: mockErc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"initialize"`.
 */
export function useMockErc721Initialize<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<typeof mockErc721ABI, 'initialize', TMode> & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'initialize', TMode>({
    abi: mockErc721ABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useMockErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof mockErc721ABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'safeTransferFrom', TMode>({
    abi: mockErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useMockErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof mockErc721ABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'setApprovalForAll', TMode>({
    abi: mockErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockErc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof mockErc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockErc721ABI, 'transferFrom', TMode>({
    abi: mockErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function usePrepareMockErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareMockErc721Initialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'initialize'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareMockErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareMockErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockErc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__.
 */
export function useMockErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useMockErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof mockErc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockErc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof mockErc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnableOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownableABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, TFunctionName, TMode>({
    abi: ownableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnableRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'renounceOwnership', TMode>({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnableTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'transferOwnership', TMode>({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function usePrepareOwnableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnableRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnableTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    ...config,
  } as UseContractEventConfig<typeof ownableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnableOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function useProxyAdminRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof proxyAdminABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: proxyAdminABI,
    ...config,
  } as UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`.
 */
export function useProxyAdminUpgradeInterfaceVersion<
  TFunctionName extends 'UPGRADE_INTERFACE_VERSION',
  TSelectData = ReadContractResult<typeof proxyAdminABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: proxyAdminABI,
    functionName: 'UPGRADE_INTERFACE_VERSION',
    ...config,
  } as UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"owner"`.
 */
export function useProxyAdminOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof proxyAdminABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: proxyAdminABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof proxyAdminABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function useProxyAdminWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof proxyAdminABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, TFunctionName, TMode>({
    abi: proxyAdminABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useProxyAdminRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof proxyAdminABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'renounceOwnership', TMode>({
    abi: proxyAdminABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useProxyAdminTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof proxyAdminABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'transferOwnership', TMode>({
    abi: proxyAdminABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"upgradeAndCall"`.
 */
export function useProxyAdminUpgradeAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof proxyAdminABI,
          'upgradeAndCall'
        >['request']['abi'],
        'upgradeAndCall',
        TMode
      > & { functionName?: 'upgradeAndCall' }
    : UseContractWriteConfig<typeof proxyAdminABI, 'upgradeAndCall', TMode> & {
        abi?: never
        functionName?: 'upgradeAndCall'
      } = {} as any,
) {
  return useContractWrite<typeof proxyAdminABI, 'upgradeAndCall', TMode>({
    abi: proxyAdminABI,
    functionName: 'upgradeAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function usePrepareProxyAdminWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareProxyAdminRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareProxyAdminTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link proxyAdminABI}__ and `functionName` set to `"upgradeAndCall"`.
 */
export function usePrepareProxyAdminUpgradeAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof proxyAdminABI, 'upgradeAndCall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: proxyAdminABI,
    functionName: 'upgradeAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof proxyAdminABI, 'upgradeAndCall'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link proxyAdminABI}__.
 */
export function useProxyAdminEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof proxyAdminABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: proxyAdminABI,
    ...config,
  } as UseContractEventConfig<typeof proxyAdminABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link proxyAdminABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useProxyAdminOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof proxyAdminABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: proxyAdminABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof proxyAdminABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function useTestErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc20ABI,
    ...config,
  } as UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useTestErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useTestErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useTestErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"name"`.
 */
export function useTestErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useTestErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useTestErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof testErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof testErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function useTestErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc20ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof testErc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, TFunctionName, TMode>({
    abi: testErc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useTestErc20Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof testErc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'approve', TMode>({
    abi: testErc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function useTestErc20Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc20ABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof testErc20ABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'mint', TMode>({
    abi: testErc20ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useTestErc20Transfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof testErc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'transfer', TMode>({
    abi: testErc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useTestErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof testErc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof testErc20ABI, 'transferFrom', TMode>({
    abi: testErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function usePrepareTestErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareTestErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareTestErc20Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc20ABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareTestErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareTestErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc20ABI}__.
 */
export function useTestErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof testErc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: testErc20ABI,
    ...config,
  } as UseContractEventConfig<typeof testErc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useTestErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof testErc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testErc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof testErc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useTestErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof testErc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testErc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof testErc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__.
 */
export function useTestErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useTestErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useTestErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useTestErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"name"`.
 */
export function useTestErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useTestErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useTestErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useTestErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useTestErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof testErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testErc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof testErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc721ABI}__.
 */
export function useTestErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc721ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof testErc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof testErc721ABI, TFunctionName, TMode>({
    abi: testErc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useTestErc721Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof testErc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof testErc721ABI, 'approve', TMode>({
    abi: testErc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"mint"`.
 */
export function useTestErc721Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc721ABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof testErc721ABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof testErc721ABI, 'mint', TMode>({
    abi: testErc721ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useTestErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof testErc721ABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof testErc721ABI, 'safeTransferFrom', TMode>({
    abi: testErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useTestErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof testErc721ABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof testErc721ABI, 'setApprovalForAll', TMode>({
    abi: testErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useTestErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof testErc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof testErc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof testErc721ABI, 'transferFrom', TMode>({
    abi: testErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc721ABI}__.
 */
export function usePrepareTestErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareTestErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareTestErc721Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc721ABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc721ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc721ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareTestErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareTestErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareTestErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testErc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testErc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc721ABI}__.
 */
export function useTestErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof testErc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: testErc721ABI,
    ...config,
  } as UseContractEventConfig<typeof testErc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useTestErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof testErc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testErc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof testErc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useTestErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof testErc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testErc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof testErc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testErc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useTestErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof testErc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testErc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof testErc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function useTokenizedVickeryAuctionRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`.
 */
export function useTokenizedVickeryAuctionUpgradeInterfaceVersion<
  TFunctionName extends 'UPGRADE_INTERFACE_VERSION',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'UPGRADE_INTERFACE_VERSION',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"auctions"`.
 */
export function useTokenizedVickeryAuctionAuctions<
  TFunctionName extends 'auctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'auctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"bids"`.
 */
export function useTokenizedVickeryAuctionBids<
  TFunctionName extends 'bids',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'bids',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"getAuction"`.
 */
export function useTokenizedVickeryAuctionGetAuction<
  TFunctionName extends 'getAuction',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'getAuction',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"proxiableUUID"`.
 */
export function useTokenizedVickeryAuctionProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'proxiableUUID',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"testNumber"`.
 */
export function useTokenizedVickeryAuctionTestNumber<
  TFunctionName extends 'testNumber',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'testNumber',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function useTokenizedVickeryAuctionWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName,
    TMode
  >({ abi: tokenizedVickeryAuctionABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"commitBid"`.
 */
export function useTokenizedVickeryAuctionCommitBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'commitBid'
        >['request']['abi'],
        'commitBid',
        TMode
      > & { functionName?: 'commitBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'commitBid',
        TMode
      > & {
        abi?: never
        functionName?: 'commitBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'commitBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'commitBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"createAuction"`.
 */
export function useTokenizedVickeryAuctionCreateAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'createAuction'
        >['request']['abi'],
        'createAuction',
        TMode
      > & { functionName?: 'createAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'createAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'createAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'createAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'createAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"endAuction"`.
 */
export function useTokenizedVickeryAuctionEndAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'endAuction'
        >['request']['abi'],
        'endAuction',
        TMode
      > & { functionName?: 'endAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'endAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'endAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'endAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'endAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"initialize"`.
 */
export function useTokenizedVickeryAuctionInitialize<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'initialize',
        TMode
      > & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'initialize',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"revealBid"`.
 */
export function useTokenizedVickeryAuctionRevealBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'revealBid'
        >['request']['abi'],
        'revealBid',
        TMode
      > & { functionName?: 'revealBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'revealBid',
        TMode
      > & {
        abi?: never
        functionName?: 'revealBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'revealBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'revealBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useTokenizedVickeryAuctionUpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & { functionName?: 'upgradeToAndCall' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'upgradeToAndCall',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'upgradeToAndCall',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function useTokenizedVickeryAuctionWithdrawCollateral<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionABI,
          'withdrawCollateral'
        >['request']['abi'],
        'withdrawCollateral',
        TMode
      > & { functionName?: 'withdrawCollateral' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionABI,
        'withdrawCollateral',
        TMode
      > & {
        abi?: never
        functionName?: 'withdrawCollateral'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionABI,
    'withdrawCollateral',
    TMode
  >({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function usePrepareTokenizedVickeryAuctionWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"commitBid"`.
 */
export function usePrepareTokenizedVickeryAuctionCommitBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'commitBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'commitBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'commitBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"createAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionCreateAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'createAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'createAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'createAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"endAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionEndAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'endAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'endAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'endAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareTokenizedVickeryAuctionInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'initialize'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'initialize'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"revealBid"`.
 */
export function usePrepareTokenizedVickeryAuctionRevealBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'revealBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'revealBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'revealBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareTokenizedVickeryAuctionUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'upgradeToAndCall'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'upgradeToAndCall'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function usePrepareTokenizedVickeryAuctionWithdrawCollateral(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionABI,
      'withdrawCollateral'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionABI,
    'withdrawCollateral'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__.
 */
export function useTokenizedVickeryAuctionEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionABI,
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `eventName` set to `"Initialized"`.
 */
export function useTokenizedVickeryAuctionInitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionABI, 'Initialized'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionABI,
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionABI, 'Initialized'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useTokenizedVickeryAuctionUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function useTokenizedVickeryAuctionV2Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`.
 */
export function useTokenizedVickeryAuctionV2UpgradeInterfaceVersion<
  TFunctionName extends 'UPGRADE_INTERFACE_VERSION',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'UPGRADE_INTERFACE_VERSION',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"auctions"`.
 */
export function useTokenizedVickeryAuctionV2Auctions<
  TFunctionName extends 'auctions',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'auctions',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"bids"`.
 */
export function useTokenizedVickeryAuctionV2Bids<
  TFunctionName extends 'bids',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'bids',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"getAuction"`.
 */
export function useTokenizedVickeryAuctionV2GetAuction<
  TFunctionName extends 'getAuction',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'getAuction',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"getBlacklistStatus"`.
 */
export function useTokenizedVickeryAuctionV2GetBlacklistStatus<
  TFunctionName extends 'getBlacklistStatus',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'getBlacklistStatus',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"isBlacklisted"`.
 */
export function useTokenizedVickeryAuctionV2IsBlacklisted<
  TFunctionName extends 'isBlacklisted',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'isBlacklisted',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"proxiableUUID"`.
 */
export function useTokenizedVickeryAuctionV2ProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'proxiableUUID',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"testNumber"`.
 */
export function useTokenizedVickeryAuctionV2TestNumber<
  TFunctionName extends 'testNumber',
  TSelectData = ReadContractResult<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'testNumber',
    ...config,
  } as UseContractReadConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function useTokenizedVickeryAuctionV2Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName,
    TMode
  >({ abi: tokenizedVickeryAuctionV2ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"blackList"`.
 */
export function useTokenizedVickeryAuctionV2BlackList<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'blackList'
        >['request']['abi'],
        'blackList',
        TMode
      > & { functionName?: 'blackList' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'blackList',
        TMode
      > & {
        abi?: never
        functionName?: 'blackList'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'blackList',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'blackList',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"commitBid"`.
 */
export function useTokenizedVickeryAuctionV2CommitBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'commitBid'
        >['request']['abi'],
        'commitBid',
        TMode
      > & { functionName?: 'commitBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'commitBid',
        TMode
      > & {
        abi?: never
        functionName?: 'commitBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'commitBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'commitBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"createAuction"`.
 */
export function useTokenizedVickeryAuctionV2CreateAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'createAuction'
        >['request']['abi'],
        'createAuction',
        TMode
      > & { functionName?: 'createAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'createAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'createAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'createAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'createAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"endAuction"`.
 */
export function useTokenizedVickeryAuctionV2EndAuction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'endAuction'
        >['request']['abi'],
        'endAuction',
        TMode
      > & { functionName?: 'endAuction' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'endAuction',
        TMode
      > & {
        abi?: never
        functionName?: 'endAuction'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'endAuction',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'endAuction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"initialize"`.
 */
export function useTokenizedVickeryAuctionV2Initialize<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'initialize',
        TMode
      > & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'initialize',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"removeFromBlacklist"`.
 */
export function useTokenizedVickeryAuctionV2RemoveFromBlacklist<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'removeFromBlacklist'
        >['request']['abi'],
        'removeFromBlacklist',
        TMode
      > & { functionName?: 'removeFromBlacklist' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'removeFromBlacklist',
        TMode
      > & {
        abi?: never
        functionName?: 'removeFromBlacklist'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'removeFromBlacklist',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'removeFromBlacklist',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"revealBid"`.
 */
export function useTokenizedVickeryAuctionV2RevealBid<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'revealBid'
        >['request']['abi'],
        'revealBid',
        TMode
      > & { functionName?: 'revealBid' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'revealBid',
        TMode
      > & {
        abi?: never
        functionName?: 'revealBid'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'revealBid',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'revealBid',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useTokenizedVickeryAuctionV2UpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & { functionName?: 'upgradeToAndCall' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'upgradeToAndCall',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'upgradeToAndCall',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function useTokenizedVickeryAuctionV2WithdrawCollateral<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenizedVickeryAuctionV2ABI,
          'withdrawCollateral'
        >['request']['abi'],
        'withdrawCollateral',
        TMode
      > & { functionName?: 'withdrawCollateral' }
    : UseContractWriteConfig<
        typeof tokenizedVickeryAuctionV2ABI,
        'withdrawCollateral',
        TMode
      > & {
        abi?: never
        functionName?: 'withdrawCollateral'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenizedVickeryAuctionV2ABI,
    'withdrawCollateral',
    TMode
  >({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function usePrepareTokenizedVickeryAuctionV2Write<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"blackList"`.
 */
export function usePrepareTokenizedVickeryAuctionV2BlackList(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'blackList'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'blackList',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'blackList'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"commitBid"`.
 */
export function usePrepareTokenizedVickeryAuctionV2CommitBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'commitBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'commitBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'commitBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"createAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionV2CreateAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'createAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'createAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'createAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"endAuction"`.
 */
export function usePrepareTokenizedVickeryAuctionV2EndAuction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'endAuction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'endAuction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'endAuction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareTokenizedVickeryAuctionV2Initialize(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'initialize'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'initialize'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"removeFromBlacklist"`.
 */
export function usePrepareTokenizedVickeryAuctionV2RemoveFromBlacklist(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'removeFromBlacklist'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'removeFromBlacklist',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'removeFromBlacklist'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"revealBid"`.
 */
export function usePrepareTokenizedVickeryAuctionV2RevealBid(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'revealBid'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'revealBid',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'revealBid'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareTokenizedVickeryAuctionV2UpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'upgradeToAndCall'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'upgradeToAndCall'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `functionName` set to `"withdrawCollateral"`.
 */
export function usePrepareTokenizedVickeryAuctionV2WithdrawCollateral(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenizedVickeryAuctionV2ABI,
      'withdrawCollateral'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenizedVickeryAuctionV2ABI,
    functionName: 'withdrawCollateral',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'withdrawCollateral'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__.
 */
export function useTokenizedVickeryAuctionV2Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `eventName` set to `"Initialized"`.
 */
export function useTokenizedVickeryAuctionV2InitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, 'Initialized'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<
    typeof tokenizedVickeryAuctionV2ABI,
    'Initialized'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenizedVickeryAuctionV2ABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useTokenizedVickeryAuctionV2UpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenizedVickeryAuctionV2ABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof tokenizedVickeryAuctionV2ABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link transparentProxyDeployerABI}__.
 */
export function useTransparentProxyDeployerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof transparentProxyDeployerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof transparentProxyDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: transparentProxyDeployerABI,
    ...config,
  } as UseContractReadConfig<
    typeof transparentProxyDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link transparentProxyDeployerABI}__ and `functionName` set to `"admin"`.
 */
export function useTransparentProxyDeployerAdmin<
  TFunctionName extends 'admin',
  TSelectData = ReadContractResult<
    typeof transparentProxyDeployerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof transparentProxyDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: transparentProxyDeployerABI,
    functionName: 'admin',
    ...config,
  } as UseContractReadConfig<
    typeof transparentProxyDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link transparentProxyDeployerABI}__ and `functionName` set to `"proxy"`.
 */
export function useTransparentProxyDeployerProxy<
  TFunctionName extends 'proxy',
  TSelectData = ReadContractResult<
    typeof transparentProxyDeployerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof transparentProxyDeployerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: transparentProxyDeployerABI,
    functionName: 'proxy',
    ...config,
  } as UseContractReadConfig<
    typeof transparentProxyDeployerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpdateProxyABI}__.
 */
export function useTransparentUpdateProxyWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpdateProxyABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof transparentUpdateProxyABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpdateProxyABI,
    TFunctionName,
    TMode
  >({ abi: transparentUpdateProxyABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link transparentUpdateProxyABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useTransparentUpdateProxyUpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof transparentUpdateProxyABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & { functionName?: 'upgradeToAndCall' }
    : UseContractWriteConfig<
        typeof transparentUpdateProxyABI,
        'upgradeToAndCall',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  return useContractWrite<
    typeof transparentUpdateProxyABI,
    'upgradeToAndCall',
    TMode
  >({
    abi: transparentUpdateProxyABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpdateProxyABI}__.
 */
export function usePrepareTransparentUpdateProxyWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpdateProxyABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpdateProxyABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpdateProxyABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link transparentUpdateProxyABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareTransparentUpdateProxyUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof transparentUpdateProxyABI,
      'upgradeToAndCall'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: transparentUpdateProxyABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof transparentUpdateProxyABI,
    'upgradeToAndCall'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpdateProxyABI}__.
 */
export function useTransparentUpdateProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof transparentUpdateProxyABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpdateProxyABI,
    ...config,
  } as UseContractEventConfig<typeof transparentUpdateProxyABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpdateProxyABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useTransparentUpdateProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof transparentUpdateProxyABI, 'AdminChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpdateProxyABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof transparentUpdateProxyABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpdateProxyABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useTransparentUpdateProxyBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof transparentUpdateProxyABI, 'BeaconUpgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpdateProxyABI,
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpdateProxyABI,
    'BeaconUpgraded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpdateProxyABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useTransparentUpdateProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof transparentUpdateProxyABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpdateProxyABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof transparentUpdateProxyABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__.
 */
export function useTransparentUpgradeableProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof transparentUpgradeableProxyABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpgradeableProxyABI,
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpgradeableProxyABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useTransparentUpgradeableProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof transparentUpgradeableProxyABI,
      'AdminChanged'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpgradeableProxyABI,
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpgradeableProxyABI,
    'AdminChanged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useTransparentUpgradeableProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof transparentUpgradeableProxyABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: transparentUpgradeableProxyABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<
    typeof transparentUpgradeableProxyABI,
    'Upgraded'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function useUupsUpgradeableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof uupsUpgradeableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof uupsUpgradeableABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: uupsUpgradeableABI,
    ...config,
  } as UseContractReadConfig<
    typeof uupsUpgradeableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`.
 */
export function useUupsUpgradeableUpgradeInterfaceVersion<
  TFunctionName extends 'UPGRADE_INTERFACE_VERSION',
  TSelectData = ReadContractResult<typeof uupsUpgradeableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof uupsUpgradeableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: uupsUpgradeableABI,
    functionName: 'UPGRADE_INTERFACE_VERSION',
    ...config,
  } as UseContractReadConfig<
    typeof uupsUpgradeableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"proxiableUUID"`.
 */
export function useUupsUpgradeableProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<typeof uupsUpgradeableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof uupsUpgradeableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: uupsUpgradeableABI,
    functionName: 'proxiableUUID',
    ...config,
  } as UseContractReadConfig<
    typeof uupsUpgradeableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function useUupsUpgradeableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof uupsUpgradeableABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof uupsUpgradeableABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof uupsUpgradeableABI, TFunctionName, TMode>({
    abi: uupsUpgradeableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useUupsUpgradeableUpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof uupsUpgradeableABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & { functionName?: 'upgradeToAndCall' }
    : UseContractWriteConfig<
        typeof uupsUpgradeableABI,
        'upgradeToAndCall',
        TMode
      > & {
        abi?: never
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  return useContractWrite<typeof uupsUpgradeableABI, 'upgradeToAndCall', TMode>(
    {
      abi: uupsUpgradeableABI,
      functionName: 'upgradeToAndCall',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function usePrepareUupsUpgradeableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof uupsUpgradeableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: uupsUpgradeableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof uupsUpgradeableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareUupsUpgradeableUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof uupsUpgradeableABI,
      'upgradeToAndCall'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: uupsUpgradeableABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof uupsUpgradeableABI,
    'upgradeToAndCall'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link uupsUpgradeableABI}__.
 */
export function useUupsUpgradeableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof uupsUpgradeableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: uupsUpgradeableABI,
    ...config,
  } as UseContractEventConfig<typeof uupsUpgradeableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link uupsUpgradeableABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useUupsUpgradeableUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof uupsUpgradeableABI, 'Upgraded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: uupsUpgradeableABI,
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof uupsUpgradeableABI, 'Upgraded'>)
}
