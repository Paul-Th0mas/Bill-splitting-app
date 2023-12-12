import { type } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    Name: string
    @Column()
    Description: string
    @Column()
    CreatedBy: number
    @Column()
    CreatedOn: Date
    @Column()
    ModifiedOn: Date
    @Column()
    ModifiedBy: number
    @Column()
    isActive: boolean

}