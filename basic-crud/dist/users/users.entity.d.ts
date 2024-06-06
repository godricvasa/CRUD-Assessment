import { WalletAddress } from '../wallet-address/wallet-address.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    age: number;
    walletAddresses: WalletAddress[];
}
