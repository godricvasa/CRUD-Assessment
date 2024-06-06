import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { WalletAddress } from './wallet-address.entity'; // Import the WalletAddress entity
import { WalletAddressService } from './wallet-address.service';
import { WalletAddressController } from './wallet-address.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([WalletAddress]), // Include TypeOrmModule.forFeature([WalletAddress])
  ],
  providers: [WalletAddressService],
  controllers: [WalletAddressController]
})
export class WalletAddressModule {}
