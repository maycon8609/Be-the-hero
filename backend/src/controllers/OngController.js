const generateUniqueId = require('../util/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const existEmail = await connection('ongs').where('email', email).select('*').first();

    if(existEmail) {
      return res.status(401).json({error: ` ja existe uma ong cadastrada com este e-mail ` });
    }

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });


    return res.json({ id })
  }
};
