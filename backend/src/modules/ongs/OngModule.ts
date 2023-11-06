import { OngController } from './application/OngController';
import { OngRepository } from './infra/OngRepository';
import { OngRouter } from './presentation/OngRouter';
import { OngService } from './application/OngService';

const ongRepository = new OngRepository();
const ongService = new OngService(ongRepository);
const ongController = new OngController(ongService);
const ongRouter = new OngRouter(ongController);

export { ongRouter };
