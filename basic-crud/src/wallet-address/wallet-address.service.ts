// src/wallet-address/wallet-address.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find();
  }

  findOne(id): Promise<WalletAddress> {
    return this.walletAddressRepository.findOne(id);
  }

  async create(walletAddress: WalletAddress): Promise<WalletAddress> {
    walletAddress.createdAt = new Date();
    const newWalletAddress = this.walletAddressRepository.create(walletAddress);
    return this.walletAddressRepository.save(newWalletAddress);
  }

  async update(id, walletAddress: WalletAddress): Promise<WalletAddress> {
    await this.walletAddressRepository.update(id, walletAddress);
    return this.walletAddressRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }
}
