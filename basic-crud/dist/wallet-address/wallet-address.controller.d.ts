import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';
export declare class WalletAddressController {
    private readonly walletAddressService;
    constructor(walletAddressService: WalletAddressService);
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    create(walletAddress: WalletAddress): Promise<any>;
    update(id: number, walletAddress: WalletAddress): Promise<any>;
    remove(id: number): Promise<any>;
}
