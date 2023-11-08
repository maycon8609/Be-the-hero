import { Ong } from "../domain/Ong";
import type { IOngRepository } from "../domain/OngRepository";
import { generateUniqueId } from "../../shared/util/generateUniqueId";
import { BadRequestError, NotFoundError } from "../../shared/error/apiError";

export class OngService {
  constructor(private readonly ongRepository: IOngRepository) {}

  async getAllOngs(): Promise<Ong[]> {
    const ongs = await this.ongRepository.findAll();
    return ongs;
  }

  async getOngById(id: string): Promise<Ong> {
    const ong = await this.ongRepository.findById(id);

    if (!ong) {
      throw new NotFoundError("Ong not found with the given id.");
    }

    return ong;
  }

  async createOng(
    city: string,
    email: string,
    name: string,
    uf: string,
    whatsApp: number
  ): Promise<Ong> {
    const existEmail = await this.ongRepository.findByEmail(email);

    if (existEmail) {
      throw new BadRequestError("There is already an NGO registered with this email.");
    }

    const id = generateUniqueId();

    const ong = new Ong(city, email, name, uf, whatsApp, id);
    await this.ongRepository.save(ong);

    return ong;
  }
}
