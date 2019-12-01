import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Project } from "../entity/Project";

class ProjectController {

  static listAll = async (req: Request, res: Response) => {
    //Get users from database

    const take: number = Number(req.body.take);
    const skip: number = Number(req.body.skip);
    console.log('%c⧭ 🐉 🐆', 'color: #0088cc', req.body);

    const projectRepository = getRepository(Project);
    const projects: Project[] = await projectRepository.find({
      take: take,
      skip: skip,
      join: {
        alias: "project",
        leftJoinAndSelect: {
          category: "project.category",
          tags: "project.tags"
        }
      }
    });
    let projectsRes: any = projects.map((project: Project) => {
      let obj: any = {};
      delete project.category.createdAt;
      delete project.category.updatedAt;
      project.tags.forEach(tag => {
        delete tag.createdAt;
        delete tag.updatedAt;
      });
      return project;
    });
    //Send the users object
    res.send(projectsRes);
  };

};

export default ProjectController;
