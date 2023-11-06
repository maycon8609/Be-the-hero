import connection from "../database/connection.js"

async function index(req, res) {
  const ong_id = req.headers.authorization;

  const profileIncidents = await connection("incidents")
    .where("ong_id", ong_id)
    .select("*");

  return res.json(profileIncidents);
}

export default { index };
