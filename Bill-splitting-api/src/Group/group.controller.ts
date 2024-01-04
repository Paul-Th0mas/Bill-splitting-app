import { Controller, Post, Res } from '@nestjs/common';
import { createGroupDto } from './Dto/createGroup.Dto';
import { GroupService } from './group.serivce';
import { Response } from 'express';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post('createGroup')
  async CreateNewGroup(createNewGroup: createGroupDto, @Res() res: Response) {
    const results = await this.groupService.createNewGroup(createNewGroup);
    res.send({ message: 'Group Created SuccessFully' });
  }
}
