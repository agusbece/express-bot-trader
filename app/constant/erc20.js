module.exports = {
  ERC20_ABI: [
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "supply", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "digits", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "_owner", type: "address" },
        { indexed: true, name: "_spender", type: "address" },
        { indexed: false, name: "_value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
  ],

  PAN_ROUTER: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
  PAN_ROUTER3: "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E",
  PAN_ROUTER_UINVERSAL: "0x4648a43B2C14Da09FdF82B161150d3F634f40491",
  PAN_ROUTER_UINVERSAL_OLD: "0x4648a43B2C14Da09FdF82B161150d3F634f40491",
  WBNB: "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9", // SHOULD BE? Renamed from WBNB to WETH

  // PAN_ROUTER: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // Uniswap V2 Router contract address on Ethereum Goerli testnet.
  // PAN_ROUTER3: "0xE592427A0AEce92De3Edee1F18E0157C05861564", // This is the Uniswap V3 Router (SwapRouter) contract address on Goerli testnet.
  // PAN_ROUTER_UINVERSAL: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD", // This is the Uniswap Universal Router (newer version) on Goerli testnet.
  // PAN_ROUTER_UINVERSAL_OLD: "0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B", // This is an older version of the Uniswap Universal Router on Goerli testnet.
  // WBNB: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // This is actually WETH (Wrapped Ether) on Goerli testnet, not WBNB. The variable name is misleading.
}

