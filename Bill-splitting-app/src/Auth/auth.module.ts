import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/Entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import 'dotenv/config'
import { EncryptService } from "./encrypt.service";

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        global: true,
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '60s' }
    })],
    controllers: [AuthController],
    providers: [AuthService,EncryptService]
})

export class AuthModule { }
