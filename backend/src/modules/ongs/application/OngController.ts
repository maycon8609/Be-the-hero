import { Request, Response } from "express";

import { OngService } from "./OngService";
import { statusCode } from "../../shared/enum/statusCode";

export class OngController {
  constructor(private readonly ongService: OngService) {}

  async getAllOngs(_request: Request, response: Response): Promise<void> {
    const ongs = await this.ongService.getAllOngs();
    response.json(ongs).status(statusCode.OK);
  }

  async getOngById(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const ong = await this.ongService.getOngById(id);
    response.json(ong).status(statusCode.OK);
  }

  async createOng(request: Request, response: Response): Promise<void> {
    const { city, email, name, uf, whatsApp } = request.body;
    const ong = await this.ongService.createOng(
      city,
      email,
      name,
      uf,
      whatsApp
    );
    response.json(ong).status(statusCode.CREATED);
  }
}
