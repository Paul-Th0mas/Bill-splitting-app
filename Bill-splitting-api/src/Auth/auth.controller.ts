import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './Dto/login.Dto';
import { Response } from 'express';
import { SignUpDto } from './Dto/signUp.Dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() login: LoginDto) {
    return this.authService.login(login.email, login.password);
  }

  @Post('signUp')
  async signUp(@Body() signUpDetails: SignUpDto, @Res() res: Response) {
    const result = await this.authService.signUp(signUpDetails);
    console.log(result);
    return res.status(result.status).json(result.message);
  }
}
