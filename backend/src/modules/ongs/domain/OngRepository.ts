import { Ong } from './Ong';

export interface IOngRepository {
  // delete(id: number): void;
  findAll(): Promise<Ong[]>;
  findByEmail(email: string): Promise<Ong | undefined>;
  findById(id: string): Promise<Ong | undefined>;
  save(ong: Ong): Promise<void>;
  // update(task: Ong): Promise<void>
}
