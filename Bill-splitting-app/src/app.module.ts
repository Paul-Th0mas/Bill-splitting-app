import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './Entities/user.entity';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';
import { Transaction } from './Entities/transaction.entity';
import { SubTransaction } from './Entities/subTransaction.entity';
import { Group } from './Entities/group.entity';
import { GroupUser } from './Entities/group_user.entity';
import { DataSource } from 'typeorm';
import { GroupModule } from './Group/group.module';
import { TransactionModule } from './Transaction/transaction.module';

@Module({
  imports: [
  
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'Billing_App',
    entities: [User,Transaction,SubTransaction,Group,GroupUser],
    synchronize: true,
  }), UserModule,AuthModule,GroupModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

