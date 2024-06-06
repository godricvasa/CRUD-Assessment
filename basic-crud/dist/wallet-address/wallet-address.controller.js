"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletAddressController = void 0;
const common_1 = require("@nestjs/common");
const wallet_address_service_1 = require("./wallet-address.service");
const wallet_address_entity_1 = require("./wallet-address.entity");
let WalletAddressController = class WalletAddressController {
    constructor(walletAddressService) {
        this.walletAddressService = walletAddressService;
    }
    async findAll() {
        const walletAddresses = await this.walletAddressService.findAll();
        return {
            success: true,
            message: 'Wallet addresses fetched successfully',
            data: walletAddresses
        };
    }
    async findOne(id) {
        const walletAddress = await this.walletAddressService.findOne(id);
        return {
            success: true,
            message: 'Wallet address fetched successfully',
            data: walletAddress
        };
    }
    async create(walletAddress) {
        const createdWalletAddress = await this.walletAddressService.create(walletAddress);
        return {
            success: true,
            message: 'Wallet address created successfully',
            data: createdWalletAddress
        };
    }
    async update(id, walletAddress) {
        const updatedWalletAddress = await this.walletAddressService.update(id, walletAddress);
        return {
            success: true,
            message: 'Wallet address updated successfully',
            data: updatedWalletAddress
        };
    }
    async remove(id) {
        await this.walletAddressService.remove(id);
        return {
            success: true,
            message: 'Wallet address deleted successfully'
        };
    }
};
exports.WalletAddressController = WalletAddressController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wallet_address_entity_1.WalletAddress]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, wallet_address_entity_1.WalletAddress]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "remove", null);
exports.WalletAddressController = WalletAddressController = __decorate([
    (0, common_1.Controller)('wallet-address'),
    __metadata("design:paramtypes", [wallet_address_service_1.WalletAddressService])
], WalletAddressController);
//# sourceMappingURL=wallet-address.controller.js.map