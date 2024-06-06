// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { WalletAddressModule } from 'src/wallet-address/wallet-address.module';
// import { User } from './users//users.entity';
// import { WalletAddress } from 'src/wallet-address/wallet-address.entity';




// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost', // or '127.0.0.1'
//       port: 5432, // Default PostgreSQL port
//       username: 'postgres',
//       password: '1234',
//       database: 'nestjs_crud',
//       entities: [User, WalletAddress],
//       synchronize: true, // Auto-create database schema (for development only)
//     }),
//   ],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
import { User } from './users/users.entity';
import { WalletAddress } from './wallet-address/wallet-address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // or '127.0.0.1'
      port: 5432, // Default PostgreSQL port
      username: 'postgres',
      password: '1234',
      database: 'nestjs_crud',
      entities: [User, WalletAddress],
      synchronize: true, // Auto-create database schema (for development only)
    }),
    UsersModule,
    WalletAddressModule,
  ],
})
export class AppModule {}


