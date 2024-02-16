import { Comment } from "src/comment/comment";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_user')
export class User{
    @PrimaryGeneratedColumn()
    userId:number;

    @Column()
    email:string;

    @Column()
    displayName:string;

    @Column()
    password:string;      

    @OneToMany(()=>Comment, Comment => Comment.user)
    comments:Comment[];
}