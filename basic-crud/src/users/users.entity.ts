import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { WalletAddress } from '../wallet-address/wallet-address.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  age: number;

  @OneToMany(() => WalletAddress, walletAddress => walletAddress.user)
  walletAddresses: WalletAddress[];

}
