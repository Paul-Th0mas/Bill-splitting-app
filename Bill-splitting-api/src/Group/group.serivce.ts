import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { group } from 'console';
import { Group } from 'src/Entities/group.entity';
import { GroupUser } from 'src/Entities/group_user.entity';
import { Repository } from 'typeorm';
import { createGroupDto } from './Dto/createGroup.Dto';
import { AddNewPeopleToGroup } from './Dto/addNewUserToGroup';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    @InjectRepository(GroupUser)
    private groupUsersRepository: Repository<GroupUser>,
  ) { }

  GetAllGroup = async () => {
    return await this.groupRepository.find();
  };

  GetAllGroupBasedOnUserId = async (userId: number) => {
    try {
      if (!isNaN(userId)) {
        const userBasedGroup = await this.groupUsersRepository.find({
          where: { UserId: userId },
        });
        return { status: 200, userBasedGroup };
      }
    } catch (err) {
      return { status: 500, message: err }
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

  addNewPeopleToGroup = async (addNewUser: AddNewPeopleToGroup) => {
    try {
      const NewGroupUser = await this.groupUsersRepository.create({
        UserId: addNewUser.userId,
        GroupId: addNewUser.groupId,
        isActive: true
      })

      await this.groupUsersRepository.save(NewGroupUser)
      return {
        status: 200,
        Message: "User added to group successfully"
      }
    }
    catch (err) {
      return {
        status: 500,
        Message: err
      }
    }
  }
}
