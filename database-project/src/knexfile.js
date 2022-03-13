// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: "mysql",
    connection: {
      database: "exercises",
      user: "root",
      password: "root"
    },
};
