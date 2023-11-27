import * as cripto from 'crypto';

export interface ICrypto {}

export interface IResultCrypto {
        iv: string;

        result: string;
}

export type CryptoCipherType = cripto.CipherCCMTypes | cripto.CipherGCMTypes | cripto.CipherOCBTypes;
