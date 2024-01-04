import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { EncryptService } from './encrypt.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './Dto/signUp.Dto';

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private encryptService: EncryptService,
    private jwtService: JwtService,
  ) { }
  signUp = async (signUpDetails: SignUpDto) => {
    const doesUserExist = await this.usersRepository.exist({
      where: { email: signUpDetails.email },
    });
    if (doesUserExist) {
      return { status: 204, message: 'User already exist' };
    } else {
      console.log(signUpDetails);
      signUpDetails.password = await this.encryptService.EncryptPassword(
        signUpDetails.password,
      );
      const newUser = this.usersRepository.create(signUpDetails);
      this.usersRepository.save(newUser);
      return { status: 200, message: 'User is created' };
    }
  };

  login = async (email: string, password: string) => {
    const user = await this.usersRepository.findOne({ where: { email } });
    const isPasswordCorrect = user != null ? await this.encryptService.CheckPassword(
      password,
      user.password,
    ) : false;
    if (!isPasswordCorrect) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
