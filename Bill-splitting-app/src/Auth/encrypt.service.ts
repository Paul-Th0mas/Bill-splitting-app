import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";


@Injectable()
export class EncryptService {
    constructor() {
    }

    EncryptPassword = async (password: string) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    CheckPassword = async (password: string, hash: string) => {
        return bcrypt.compare(password, hash);
    }
}