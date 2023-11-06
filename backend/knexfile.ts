export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/modules/shared/infra/database/db.sqlite",
    },
    migrations: {
      directory: "./src/modules/shared/infra/database/migrations",
    },
    useNullAsDefault: true,
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/modules/shared/infra/database/test.sqlite",
    },
    migrations: {
      directory: "./src/modules/shared/infra/database/migrations",
    },
    useNullAsDefault: true,
  },
};
