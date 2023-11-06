import type { IOngRepository } from "../domain/OngRepository";
import { Ong } from "../domain/Ong";
import { connection } from "../../shared/infra/database/connection";

export class OngRepository implements IOngRepository {
  async findAll(): Promise<Ong[]> {
    const ongs = await connection<Ong>("ongs").select("*");
    return ongs;
  }

  async findByEmail(email: string): Promise<Ong | undefined> {
    const ong = await connection<Ong>("ongs")
      .where("email", email)
      .select("*")
      .first();
    return ong;
  }

  async findById(id: string): Promise<Ong | undefined> {
    const ong = await connection<Ong>("ongs")
      .where("id", id)
      .select("*")
      .first();
    return ong;
  }

  async save(ong: Ong): Promise<void> {
    await connection("ongs").insert(ong);
  }
}
