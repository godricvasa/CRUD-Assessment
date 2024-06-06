import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';
export declare class WalletAddressService {
    private walletAddressRepository;
    constructor(walletAddressRepository: Repository<WalletAddress>);
    findAll(): Promise<WalletAddress[]>;
    findOne(id: any): Promise<WalletAddress>;
    create(walletAddress: WalletAddress): Promise<WalletAddress>;
    update(id: number, walletAddress: WalletAddress): Promise<WalletAddress>;
    remove(id: number): Promise<void>;
}
