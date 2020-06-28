require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth oven evil gloom glide fold sport'; 
let testAccounts = [
"0xa9acd80405be6e146a1aacd39284e2913b311e794cbba64619b136f60ee4823b",
"0x5f6b02820855e21440c53502f40043714de13aa7f918d9a9e872f7cb37674d1c",
"0x6d83a77050f488b18d9a73193d43591278f8f3fca5bad864842538afc09b2c2c",
"0xdc415ea2b91071ab4d92d4eff37021a921f70b7473079c896272f22239c61751",
"0x4b85b6cc38e12954b1e5c9b60d7d703c6de81dc62955b2641f9c3b1c1b9d546f",
"0x7db81665991f32ff9f1c782e31cd805fd95816eb804dcd13f191be6854e0e9bf",
"0x8db489960658a805ffa69f526d3b5f4e7829aa6c0d04b8b8adf695d15fe588b1",
"0x7d051900f0343cb50d6dcd5a580890574f260adc88d6eca9dd7baf3f90179323",
"0x5a11ad0217b284cf4b1381587be31918b0b8915704d012e8cbe75251af805816",
"0x6cc86047872c54418f8e078ffb013b16a65b9745792589500074d5486e18b308"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
