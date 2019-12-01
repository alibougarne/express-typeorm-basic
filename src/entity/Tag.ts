import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Length } from "class-validator";
import { Commmun } from "./Commun";
import { Project } from "./Project";

@Entity()
export class Tag extends Commmun {
    @Column()
    @Length(4, 20)
    name: string;

    @ManyToMany(type => Project, project => project.tags)
    @JoinTable({name:'projects_tags'})
    projects: Project[]
}
