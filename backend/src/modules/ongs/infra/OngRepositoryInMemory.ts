import type { IOngRepository } from "../domain/OngRepository";
import { Ong } from "../domain/Ong";

export class OngRepositoryMemory implements IOngRepository {
  private ongs: Ong[] = [];

  async findAll(): Promise<Ong[]> {
    return this.ongs;
  }

  async findByEmail(email: string): Promise<Ong | undefined> {
    const ong = this.ongs.find((ong) => ong.email === email);
    return ong;
  }

  async findById(id: string): Promise<Ong | undefined> {
    const ong = this.ongs.find((ong) => ong.id === id);
    return ong;
  }

  async save(ong: Ong): Promise<void> {
    this.ongs.push(ong);
  }
}
