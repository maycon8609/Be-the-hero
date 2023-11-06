import type { IOngRepository } from "../domain/OngRepository";
import { Ong } from "../domain/Ong";
import { generateUniqueId } from "../../shared/util/generateUniqueId";

export class OngService {
  constructor(private readonly ongRepository: IOngRepository) {}

  async getAllOngs(): Promise<Ong[]> {
    const ongs = await this.ongRepository.findAll();
    return ongs;
  }

  async getOngById(id: string): Promise<Ong | undefined> {
    const ong = await this.ongRepository.findById(id);
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

    if (existEmail) throw new Error("Ja existe uma ong cadastrada com este e-mail");

    const id = generateUniqueId();

    const ong = new Ong(
      city,
      email,
      name,
      uf,
      whatsApp,
      id
    );
    await this.ongRepository.save(ong);

    return ong;
  }
}
