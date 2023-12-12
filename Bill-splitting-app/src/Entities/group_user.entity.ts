import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GroupUser {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    UserId: number

    @Column()
    GroupId: number
    
    @Column()
    isActive: boolean

} 