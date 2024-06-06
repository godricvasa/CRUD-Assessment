import { UsersService } from './users.service';
import { User } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    create(user: User): Promise<any>;
    update(id: number, user: User): Promise<any>;
    remove(id: number): Promise<any>;
}
