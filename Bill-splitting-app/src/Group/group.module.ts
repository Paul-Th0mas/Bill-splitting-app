import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupService } from './group.serivce';
import { Group } from 'src/Entities/group.entity';
import { GroupUser } from 'src/Entities/group_user.entity';
import { GroupController } from './group.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), TypeOrmModule.forFeature([GroupUser])],
  providers: [GroupService],
  controllers: [GroupController]
})
export class GroupModule { }
