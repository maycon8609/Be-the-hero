import { Router } from 'express';
import { OngController } from '../application/OngController';

export class OngRouter {
  public readonly router: Router;

  constructor(private readonly ongController: OngController) {
    this.router = Router();
    this.router.get('/ongs', this.ongController.getAllOngs.bind(this.ongController));
    this.router.get('/ongs/:id', this.ongController.getOngById.bind(this.ongController));
    this.router.post('/ongs', this.ongController.createOng.bind(this.ongController));
  }
}
