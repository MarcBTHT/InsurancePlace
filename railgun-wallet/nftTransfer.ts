import './services';
import './utils';
import { HashService } from './services/crypto/hash-service';

import {
    NetworkName,
    TransactionGasDetails,
    RailgunNFTAmountRecipient,
    EVMGasType,
    FeeTokenDetails,
    SelectedRelayer,
    NFTTokenType,
    getEVMGasTypeForTransaction,
    calculateGasPrice, RailgunERC20AmountRecipient,
} from '@railgun-community/shared-models';
import {
    gasEstimateForUnprovenTransfer,
    generateTransferProof,
} from '@railgun-community/wallet';
import {populateProvedTransfer} from "./services";

const railgunAddress = '0zk1qyxcac3f8kvat7qkdpzjmvghzgqagcutz8u0wnrpe5ux4dlqu9r9lrv7j6fe3z53ll3k558jcjflmdm39u7njxr8s0hre8h708w9gtuthxf2jclscs3d5kz232m';
const encryptionKey = HashService.setEncryptionKeyFromPassword("myPassword");
const memoText = 'Thank you for dinner! 🍝😋';
const originalGasEstimate = 0n;
const nftAmountRecipients: RailgunNFTAmountRecipient[] = [
    {
        nftAddress: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        tokenSubID: '135',
        amount: 1n,
        nftTokenType: NFTTokenType.ERC721,
        recipientAddress: railgunAddress,
    },
];
const sendWithPublicWallet = false;
const evmGasType: EVMGasType = getEVMGasTypeForTransaction(
    NetworkName.Ethereum,
    sendWithPublicWallet
);
let originalGasDetails: TransactionGasDetails;
switch (evmGasType) {
    case EVMGasType.Type0:
    case EVMGasType.Type1:
        originalGasDetails = {
            evmGasType,
            originalGasEstimate,
            gasPrice: BigInt('0x100000'),
        }
        break;
    case EVMGasType.Type2:
        const maxFeePerGas: BigInt('0x100000');
        const maxPriorityFeePerGas: BigInt('0x010000');

        originalGasDetails = {
            evmGasType,
            originalGasEstimate,
            maxFeePerGas,
            maxPriorityFeePerGas,
        }
        break;
}

const selectedTokenFeeAddress = '0xe76C6c83af64e4C60245D8C7dE953DF673a7A33D';

const feeTokenDetails: FeeTokenDetails = {
    tokenAddress: selectedTokenFeeAddress,
    feePerUnitGas: selectedRelayer.feePerUnitGas,
}

const sendWithPublicWallet = false;
const { gasEstimate: nftTransfer } = await gasEstimateForUnprovenTransfer(
    NetworkName.Ethereum,
    railgunWalletID,
    encryptionKey,
    memoText,
    [], // tokenAmountRecipients
    nftAmountRecipients,
    originalGasDetails,
    feeTokenDetails,
    sendWithPublicWallet,
);

const transactionGasDetails: TransactionGasDetails = {
    evmGasType,
    gasEstimate: nftTransfer,
    gasPrice
}

const generateProof = async (
    selectedTokenFeeAddress: string,
    selectedRelayer: SelectedRelayer,
    railgunWalletID: string,
    encryptionKey: string,
    memoText: Optional<string>,
    tokenAmountRecipients: RailgunERC20AmountRecipient[],
    sendWithPublicWallet: boolean,
    transactionGasDetails: TransactionGasDetails,
) => {
    // Token fee to pay Relayer.
    const relayerFeeERC20AmountRecipient: Optional<RailgunERC20AmountRecipient> = {
        tokenAddress: selectedTokenFeeAddress,
        // NOTE: Proper calculation of "amount" is based on transactionGasDetails and selectedRelayer.
        amount: BigInt('0x10000000'), // See "Relayers" > "Calculating the Relayer Fee" for more info.
        recipientAddress: selectedRelayer.railgunAddress,
    };

    // ONLY required for transactions that are using a Relayer. Can leave undefined if self-signing.
    const overallBatchMinGasPrice: Optional<bigint> = await calculateGasPrice(transactionGasDetails);

    const progressCallback = (progress: number) => {
        // Handle proof progress (show in UI).
        // Proofs can take 20-30 seconds on slower devices.
    };

    const showSenderAddressToRecipient: boolean = true; // Allow recipient to see RAILGUN address of sender

    await generateTransferProof(
        NetworkName.Ethereum,
        railgunWalletID,
        encryptionKey,
        showSenderAddressToRecipient,
        memoText,
        tokenAmountRecipients,
        [], // nftAmountRecipients
        relayerFeeERC20AmountRecipient,
        sendWithPublicWallet,
        overallBatchMinGasPrice,
        progressCallback,
    );
}

const transact = (
    railgunWalletID: string,
    memoText: Optional<string>,
    nftAmountRecipients: RailgunNFTAmountRecipient[],
    sendWithPublicWallet: boolean,
    transactionGasDetails: TransactionGasDetails,
    showSenderAddressToRecipient: boolean,
    overallBatchMinGasPrice: Optional<BigInt>,
    relayerFeeERC20AmountRecipient: Optional<RailgunERC20AmountRecipient>
) => {
    const populateResponse = await populateProvedTransfer(
        1,
        NetworkName.Ethereum,
        railgunWalletID,
        showSenderAddressToRecipient,
        memoText,
        [],
        nftAmountRecipients,
        relayerFeeERC20AmountRecipient,
        sendWithPublicWallet,
        overallBatchMinGasPrice,
        transactionGasDetails,
    );
}