export default async () => {
    return {
        // @ts-ignore
        'contracts/SampleERC20.sol': (await import('raw-loader!./contracts/SampleERC20.sol')).default,
        // @ts-ignore
        'scripts/deploy_with_ethers.ts': (await import('raw-loader!./scripts/deploy_with_ethers.ts')).default,
        // @ts-ignore
        'scripts/deploy_with_web3.ts': (await import('raw-loader!./scripts/deploy_with_web3.ts')).default,
        // @ts-ignore
        'scripts/ethers.ts': (await import('raw-loader!./scripts/ethers.ts')).default,
        // @ts-ignore
        'scripts/web3.ts': (await import('raw-loader!./scripts/web3.ts')).default,
        // @ts-ignore
        'tests/SampleERC20_test.sol': (await import('raw-loader!./tests/SampleERC20_test.sol')).default
    }
}