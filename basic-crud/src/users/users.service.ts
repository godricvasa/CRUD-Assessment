import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity'; // Correct import path
import { send } from 'process';

@Injectable()
export class UsersService {
  constructor(
    
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const query = `
      SELECT * FROM users;
    `;
    return this.usersRepository.query(query);
  }

  async findOne(id: number): Promise<User> {
    const query = `
      SELECT * FROM users
      WHERE id = $1;
    `;
    const result = await this.usersRepository.query(query, [id]);
    return result[0];
  }

  async create(user: User): Promise<User> {
    const query = `
      INSERT INTO users (name, email, age) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const values = [user.name, user.email, user.age];
    const result = await this.usersRepository.query(query, values);
    return result[0];
  }

  async update(id: number, user: User): Promise<User> {
    const query = `
      UPDATE users
      SET name = $1, email = $2, age = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [user.name, user.email, user.age, id];
    const result = await this.usersRepository.query(query, values);
    return result[0];
  }

  async remove(id: number): Promise<void> {
    const query = `
      DELETE FROM users
      WHERE id = $1;
    `;
    
    await this.usersRepository.query(query, [id]);
  
  }
}

