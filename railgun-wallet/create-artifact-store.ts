// create-artifact-store.ts
import { ArtifactStore } from '@railgun-community/wallet';
import localforage from 'localforage';
import { getProver, Groth16 } from '@railgun-community/wallet';

export const createArtifactStore = (): ArtifactStore => {
    return new ArtifactStore(
        async (path: string) => {
            return localforage.getItem(path);
        },
        async (dir: string, path: string, item: string | Buffer) => {
            await localforage.setItem(path, item);
        },
        async (path: string) => (await localforage.getItem(path)) != null,
    );
}