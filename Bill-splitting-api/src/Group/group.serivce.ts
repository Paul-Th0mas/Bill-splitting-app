import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { group } from 'console';
import { Group } from 'src/Entities/group.entity';
import { GroupUser } from 'src/Entities/group_user.entity';
import { Repository } from 'typeorm';
import { createGroupDto } from './Dto/createGroup.Dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    @InjectRepository(GroupUser)
    private groupUsersRepository: Repository<GroupUser>,
  ) {}

  GetAllGroup = async () => {
    return await this.groupRepository.find();
  };

  GetAllGroupBasedOnUserId = async (userId: number) => {
    if (!isNaN(userId)) {
      const userBasedGroup = await this.groupUsersRepository.find({
        where: { UserId: userId },
      });
      return userBasedGroup;
    }
  };

  createNewGroup = async (CreateGroupdetails: createGroupDto) => {
    try {
      const newGroup = await this.groupRepository.create(CreateGroupdetails);
      this.groupRepository.save(newGroup);
    } catch (ex) {
      console.error('An error occurred:', ex.message);
    }
  };
}
