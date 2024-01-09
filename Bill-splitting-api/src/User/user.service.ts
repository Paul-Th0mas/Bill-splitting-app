import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>,) {
    }

    getAllUsers = async () => {
        const userList = await this.userRepository.find({
            select: ["id", "firstName"]
        });
        return userList;
    }
}
