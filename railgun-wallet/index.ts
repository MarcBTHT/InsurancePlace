// main.ts
import {
    startRailgunEngine,
    loadProvider,
    setLoggers, getProver
} from '@railgun-community/wallet';
import LevelDB from 'level-js';
import { createArtifactStore } from './create-artifact-store';
import {
    FallbackProviderJsonConfig,
    NetworkName,
} from '@railgun-community/shared-models';
import {SnarkJSGroth16} from "@railgun-community/engine";

const initializeEngine = (): void => {
    const walletSource = 'quickstart demo';

    const dbPath = 'engine.db';
    const db = new LevelDB(dbPath);

    const shouldDebug = true;

    const artifactStore = createArtifactStore('local/dir');

    const useNativeArtifacts = false;

    const skipMerkletreeScans = false;

    startRailgunEngine(
        walletSource,
        db,
        shouldDebug,
        artifactStore,
        useNativeArtifacts,
        skipMerkletreeScans,
    )
}

const loadEngineProvider = async () => {
    const ETH_PROVIDERS_JSON: FallbackProviderJsonConfig = {
        "chainId": 1,
        "providers": [
            {
                "provider": "https://cloudflare-eth.com/",
                "priority": 1,
                "weight": 1
            },
            {
                "provider": "https://rpc.ankr.com/eth",
                "priority": 2,
                "weight": 1
            },
        ]
    }

    const shouldDebug = true;

    const { feesSerialized } = await loadProvider(
        ETH_PROVIDERS_JSON,
        NetworkName.Ethereum,
        shouldDebug,
    );
}

const setEngineLoggers = () => {
    const logMessage: Optional<(msg: any) => void> = console.log;
    const logError: Optional<(err: any) => void> = console.error;

    setLoggers(logMessage, logError);
}

try {
    initializeEngine();
    await loadEngineProvider();
    setEngineLoggers();

    const groth16 = (global as unknown as { snarkjs: { groth16: SnarkJSGroth16 } }).snarkjs.groth16;
    getProver().setSnarkJSGroth16(groth16);
} catch (err) {}

