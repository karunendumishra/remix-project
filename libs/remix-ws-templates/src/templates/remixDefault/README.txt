XIDE DEFAULT WORKSPACE

XIDE default workspace is present when:
i. XIDE loads for the very first time 
ii. A new workspace is created
iii. There are no files existing in the File Explorer

This workspace contains 3 directories:

1. 'contracts': Holds three contracts with different complexity level, denoted with number prefix in file name.
2. 'scripts': Holds two scripts to deploy a contract. It is explained below.
3. 'tests': Contains one Solidity test file for 'Ballot' contract & one JS test file for 'Storage' contract

SCRIPTS

The 'scripts' folder contains two example async/await scripts for deploying the 'Storage' contract.
For the deployment of any other contract, 'contractName' and 'constructorArgs' should be updated (along with other code if required). 

Also, there is a script containing some unit tests for Storage contract inside tests directory.

To run a script, right click on file name in the file explorer and click 'Run'. Remember, Solidity file must already be compiled.
Output from script will appear in XIDE terminal.

Please note, 'require' statement is supported in a limited manner for XIDE supported modules.
For now, modules supported by XIDE are ethers, web3, swarmgw, chai, XIDE and hardhat only for hardhat.ethers object/plugin.
For unsupported modules, an error like this will be thrown: '<module_name> module require is not supported by XIDE will be shown.'