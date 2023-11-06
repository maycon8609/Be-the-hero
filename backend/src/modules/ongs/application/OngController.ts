import { Request, Response } from "express";

import { OngService } from "./OngService";

export class OngController {
  constructor(private readonly ongService: OngService) {}

  async getAllOngs(_: Request, response: Response): Promise<void> {
    try {
      const ongs = await this.ongService.getAllOngs();
      response.json(ongs);
    } catch (error) {
      console.log(error);
    }
  }

  async getOngById(request: Request, response: Response): Promise<void> {
    try {
      const { id } = request.params;
      const ong = await this.ongService.getOngById(id);
      if (!ong) {
        response.status(404).send("Ong not found");
      }
      response.json(ong);
    } catch (error) {
      console.log(error);
    }
  }

  async createOng(request: Request, response: Response): Promise<void> {
    try {
      const { city, email, name, uf, whatsApp } = request.body;
      const ong = await this.ongService.createOng(city, email, name, uf, whatsApp);
      response.json(ong).status(201);
    } catch (error) {
      // TODO: Tratar erros
      console.log(error);
    }
  }
}
