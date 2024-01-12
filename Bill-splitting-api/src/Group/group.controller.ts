import { Controller, Get, Post, Res } from '@nestjs/common';
import { createGroupDto } from './Dto/createGroup.Dto';
import { GroupService } from './group.serivce';
import { Response } from 'express';
import { AddNewPeopleToGroup } from './Dto/addNewUserToGroup';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) { }

  @Post('createGroup')
  async CreateNewGroup(createNewGroup: createGroupDto, @Res() res: Response) {
    const results = await this.groupService.createNewGroup(createNewGroup);
    res.send({ message: 'Group Created SuccessFully' });
  }

  @Post("addNewUserGroup")
  async AddNewyUserGroup(AddNewGroup: AddNewPeopleToGroup, @Res() res: Response) {
    const results = await this.groupService.addNewPeopleToGroup(AddNewGroup);
    res.status(results.status).send({ message: results.Message });
  }

  @Get("GetUserGroupsById")
  async GetUserGroupsById(userId:number ,@Res() res: Response) {
    const results = await this.groupService.GetAllGroupBasedOnUserId(userId);
    res.status(results.status).send(results.userBasedGroup);
  }
}
