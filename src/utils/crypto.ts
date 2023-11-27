import { CryptoCipherType, ICrypto, IResultCrypto } from './crypto.type';
import * as crypto from 'crypto';

export default class Crypto {
        private _algorithm: string;

        private _secretKey: crypto.CipherKey;

        private _cipher: crypto.Cipher;

        private _decipher: crypto.Decipher;

        private _iv: crypto.BinaryLike;

        public constructor(algorithm: CryptoCipherType, secretKey: crypto.CipherKey, size: number) {
                this._algorithm = algorithm;
                this._secretKey = secretKey;

                this._iv = crypto.randomBytes(size);
        }

        public async crypt(data: crypto.BinaryLike): Promise<IResultCrypto> {
                let resultCrypt: Buffer;

                try {
                        this._cipher = crypto.createCipheriv(this._algorithm, this._secretKey, this._iv);
                        resultCrypt = Buffer.concat([this._cipher.update(data), this._cipher.final()]);
                } catch (err) {
                        console.log(err);
                }

                return {
                        iv: this._iv.toString(),
                        result: resultCrypt.toString('hex'),
                };
        }

        public decrypt(dataCrypt: string): string {
                this._decipher = crypto.createDecipheriv(this._algorithm, this._secretKey, this._iv);
                const resultDecrypt = Buffer.concat([this._decipher.update(Buffer.from(dataCrypt)), this._decipher.final()]);

                return resultDecrypt.toString('hex');
        }
}
