import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<any> {
    const users = await this.usersService.findAll();
    return {
      success: true,
      message: 'Users fetched successfully',
      data: users
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    const user = await this.usersService.findOne(id);
    return {
      success: true,
      message: 'User fetched successfully',
      data: user
    };
  }

  @Post()
  async create(@Body() user: User): Promise<any> {
    const createdUser = await this.usersService.create(user);
    return {
      success: true,
      message: 'User created successfully',
      data: createdUser
    };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<any> {
    const updatedUser = await this.usersService.update(id, user);
    return {
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    await this.usersService.remove(id);
    return {
      success: true,
      message: 'User deleted successfully'
    };
  }
}
