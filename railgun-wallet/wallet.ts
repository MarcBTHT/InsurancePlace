import { HashService } from './services/crypto/hash-service';
import './utils';
import { Mnemonic, randomBytes } from 'ethers';
import { createRailgunWallet } from '@railgun-community/wallet';
import { NetworkName } from '@railgun-community/shared-models';
import { loadWalletByID } from '@railgun-community/wallet';


const encryptionKey = HashService.setEncryptionKeyFromPassword("myPassword"); // See `Encryption Keys` section

const mnemonic = Mnemonic.fromEntropy(randomBytes(16)).phrase.trim();

// Block numbers for each chain when wallet was first created.
// If unknown, provide undefined.
const creationBlockNumberMap: MapType<number> = {
    [NetworkName.Ethereum]: 15725700,
    [NetworkName.Polygon]: 3421400,
}

const railgunWalletInfo = await createRailgunWallet(
    encryptionKey,
    mnemonic,
    creationBlockNumberMap,
);
const id = railgunWalletInfo.id; // Store this value.