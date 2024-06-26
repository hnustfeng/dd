const EthereumAddress = "0x9aE578d5ad69B051E6FbC7EBB18A12C2D459D914"
const ScrollAddress = "0x4b71CAF14Cf8529101498976C44B8445797A5886"
const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "version",
				"type": "uint8"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "reserve",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "liquidityRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stableBorrowRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "variableBorrowRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "liquidtyIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "variableBorrowIndex",
				"type": "uint256"
			}
		],
		"name": "ReserveUpdate",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "activateReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "addressesProvider",
		"outputs": [
			{
				"internalType": "contract LendingPoolAddressesProvider",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "deactivateReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "disableBorrowingOnReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "disableReserveAsCollateral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "disableReserveStableBorrowRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_stableBorrowRateEnabled",
				"type": "bool"
			}
		],
		"name": "enableBorrowingOnReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_baseLTVasCollateral",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_liquidationThreshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_liquidationBonus",
				"type": "uint256"
			}
		],
		"name": "enableReserveAsCollateral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "enableReserveStableBorrowRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "freezeReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveATokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveAvailableLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveConfiguration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveCurrentAverageStableBorrowRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveCurrentLiquidityRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveCurrentStableBorrowRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveCurrentVariableBorrowRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "lastLiquidityCumulativeIndex",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "currentLiquidityRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalBorrowsStable",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalBorrowsVariable",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "currentVariableBorrowRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "currentStableBorrowRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "currentAverageStableBorrowRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastVariableBorrowCumulativeIndex",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "baseLTVasCollateral",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "liquidationThreshold",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "liquidationBonus",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "decimals",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "aTokenAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "interestRateStrategyAddress",
						"type": "address"
					},
					{
						"internalType": "uint40",
						"name": "lastUpdateTimestamp",
						"type": "uint40"
					},
					{
						"internalType": "bool",
						"name": "borrowingEnabled",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "usageAsCollateralEnabled",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isStableBorrowRateEnabled",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isFreezed",
						"type": "bool"
					}
				],
				"internalType": "struct CoreLibrary.ReserveData",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveDecimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveInterestRateStrategyAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveIsActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveIsFreezed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveIsStableBorrowRateEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveLastUpdate",
		"outputs": [
			{
				"internalType": "uint40",
				"name": "timestamp",
				"type": "uint40"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveLiquidationBonus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveLiquidationThreshold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveLiquidityCumulativeIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveNormalizedIncome",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveTotalBorrows",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveTotalBorrowsStable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveTotalBorrowsVariable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveTotalLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveUtilizationRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "getReserveVariableBorrowsCumulativeIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getReserves",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserBasicReserveData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserBorrowBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserCurrentBorrowRateMode",
		"outputs": [
			{
				"internalType": "enum CoreLibrary.InterestRateMode",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserCurrentStableBorrowRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserLastUpdate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserOriginationFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserUnderlyingAssetBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserVariableBorrowCumulativeIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_aTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_decimals",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_interestRateStrategyAddress",
				"type": "address"
			}
		],
		"name": "initReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract LendingPoolAddressesProvider",
				"name": "_addressesProvider",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "isReserveBorrowingEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "isReserveUsageAsCollateralEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "isUserAllowedToBorrowAtStable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "isUserUseReserveAsCollateralEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lendingPoolAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_destination",
				"type": "address"
			}
		],
		"name": "liquidateFee",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refreshConfiguration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserveToRemove",
				"type": "address"
			}
		],
		"name": "removeLastAddedReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reservesList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_ltv",
				"type": "uint256"
			}
		],
		"name": "setReserveBaseLTVasCollateral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_decimals",
				"type": "uint256"
			}
		],
		"name": "setReserveDecimals",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rateStrategyAddress",
				"type": "address"
			}
		],
		"name": "setReserveInterestRateStrategyAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_bonus",
				"type": "uint256"
			}
		],
		"name": "setReserveLiquidationBonus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_threshold",
				"type": "uint256"
			}
		],
		"name": "setReserveLiquidationThreshold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_useAsCollateral",
				"type": "bool"
			}
		],
		"name": "setUserUseReserveAsCollateral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_destination",
				"type": "address"
			}
		],
		"name": "transferToFeeCollectionAddress",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferToReserve",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferToUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			}
		],
		"name": "unfreezeReserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountBorrowed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_borrowFee",
				"type": "uint256"
			},
			{
				"internalType": "enum CoreLibrary.InterestRateMode",
				"name": "_rateMode",
				"type": "uint8"
			}
		],
		"name": "updateStateOnBorrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isFirstDeposit",
				"type": "bool"
			}
		],
		"name": "updateStateOnDeposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_principalReserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_collateralReserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountToLiquidate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_collateralToLiquidate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_feeLiquidated",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_liquidatedCollateralForFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_balanceIncrease",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_liquidatorReceivesAToken",
				"type": "bool"
			}
		],
		"name": "updateStateOnLiquidation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_balanceIncrease",
				"type": "uint256"
			}
		],
		"name": "updateStateOnRebalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountRedeemed",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_userRedeemedEverything",
				"type": "bool"
			}
		],
		"name": "updateStateOnRedeem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_paybackAmountMinusFees",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_originationFeeRepaid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_balanceIncrease",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_repaidWholeLoan",
				"type": "bool"
			}
		],
		"name": "updateStateOnRepay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_principalBorrowBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_compoundedBorrowBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_balanceIncrease",
				"type": "uint256"
			},
			{
				"internalType": "enum CoreLibrary.InterestRateMode",
				"name": "_currentRateMode",
				"type": "uint8"
			}
		],
		"name": "updateStateOnSwapRate",
		"outputs": [
			{
				"internalType": "enum CoreLibrary.InterestRateMode",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
module.exports = {
    CoreABI: {
        abi,
        EthereumAddress,
		ScrollAddress
    },
}