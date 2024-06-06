// src/wallet-address/wallet-address.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @ManyToOne(() => User, user => user.walletAddresses, { onDelete: 'CASCADE' })
  user: number;




  @CreateDateColumn()
  createdAt: Date;
}