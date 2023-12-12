import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entities/user.entity";
import { DataSource, Repository } from "typeorm";
import { EncryptService } from "./encrypt.service";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./Dto/signUp.Dto";


@Injectable({})
export class AuthService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private encryptService: EncryptService,
        private jwtService: JwtService) {
    }
    signUp = async (signUpDetails: SignUpDto) => {
        let doesUserExist = await this.usersRepository.exist({ where: { email: signUpDetails.email } })
        if (doesUserExist) {
            return { status: 204, message: "User already exist" }
        }
        else {
            console.log(signUpDetails);
            signUpDetails.password = await this.encryptService.EncryptPassword(signUpDetails.password);
            let newUser = this.usersRepository.create(signUpDetails);
            this.usersRepository.save(newUser);
            return { status: 200, message: "User is created" }
        }
    }

    async login(email: string, password: string) {
        let user = await this.usersRepository.findOne({ where: { email } });
        let isPasswordCorrect = await this.encryptService.CheckPassword(password, user.password);
        if (!isPasswordCorrect) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}