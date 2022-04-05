// https://eth-ropsten.alchemyapi.io/v2/QnwLk1_NI1kUNDBhrDcTaagpdI7XXaHa

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/QnwLk1_NI1kUNDBhrDcTaagpdI7XXaHa',
			accounts: ['03dc424fc65952659a26fdbf2c141f5d7a402830d561db2bf7161abe55f102b7'],
		},
	},
};
