const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const existEmail = await connection('ongs').where('email', email).select('*');

    if(existEmail) {
      return res.status(401).json({error: ` ja existe uma ong cadastrada com este e-mail ` });
    }

    const id = crypto.randomBytes(4).toString('HEX');

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
