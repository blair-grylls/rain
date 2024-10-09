import { Request, Response } from "express";
import * as exampleService from "../services/example.service";

export const getExampleById = async (req: Request, res: Response) => {
  const { exampleId } = req.query;

  const example = await exampleService.getExampleById(Number(exampleId));

  if (!example) {
    res.status(404).json({ error: "Example not found." });
  } else {
    res.status(200).json(example);
  }
};
