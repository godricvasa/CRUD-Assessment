import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()
  async findAll(): Promise<any> {
    const walletAddresses = await this.walletAddressService.findAll();
    return {
      success: true,
      message: 'Wallet addresses fetched successfully',
      data: walletAddresses
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    const walletAddress = await this.walletAddressService.findOne(id);
    return {
      success: true,
      message: 'Wallet address fetched successfully',
      data: walletAddress
    };
  }

  @Post()
  async create(@Body() walletAddress: WalletAddress): Promise<any> {
    const createdWalletAddress = await this.walletAddressService.create(walletAddress);
    return {
      success: true,
      message: 'Wallet address created successfully',
      data: createdWalletAddress
    };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() walletAddress: WalletAddress): Promise<any> {
    const updatedWalletAddress = await this.walletAddressService.update(id, walletAddress);
    return {
      success: true,
      message: 'Wallet address updated successfully',
      data: updatedWalletAddress
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    await this.walletAddressService.remove(id);
    return {
      success: true,
      message: 'Wallet address deleted successfully'
    };
  }
}
