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
    const query = `
      SELECT * FROM walletAddress;
    `;
    return this.walletAddressRepository.query(query)
    // return this.walletAddressRepository.find();
  }

  findOne(id): Promise<WalletAddress> {
    const query = `
    SELECT * FROM walletAddress
    WHERE id = $1;
  `;
    return this.walletAddressRepository.query(query,[id]);
  }

  async create(walletAddress: WalletAddress): Promise<WalletAddress> {
    const createdAt = new Date();
    const query = `
      INSERT INTO walletAddress (userid, address, createdat) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const values = [ walletAddress.user,walletAddress.address, createdAt];
    const result = await this.walletAddressRepository.query(query, values);
    return result[0];
  }
  

  async update(id: number, walletAddress: WalletAddress): Promise<WalletAddress> {
    const query = `
      UPDATE walletAddress
      SET address = $1, userId = $2
      WHERE id = $3
      RETURNING *;
    `;
    const values = [walletAddress.address, walletAddress.user, id];
    const result = await this.walletAddressRepository.query(query, values);
    return result[0];
  }

  async remove(id: number): Promise<void> {
    const query = `
      DELETE FROM walletAddress
      WHERE id = $1;
    `;
    await this.walletAddressRepository.query(query, [id]);
  }
}
