// home_id, home_name, total_components -> SELECT home_id, home_name, COUNT(component) AS total_components FROM homes NATURAL JOIN home_components WHERE homes.home_id IN (SELECT home_id FROM ruh WHERE email=$1) GROUP BY home_id, home_name
// home_id, component, state -> SELECT * FROM home_components WHERE home_id IN (SELECT home_id FROM ruh WHERE email=$1)

const db = require('../database/connection');

module.exports = {
    homesData: async (userEmail) => {
        const data = await db.query(
            `SELECT home_id, home_name, COUNT(component) AS total_components FROM homes NATURAL JOIN home_components WHERE homes.home_id IN (SELECT home_id FROM ruh WHERE email=$1) GROUP BY home_id, home_name`,
            [userEmail]
        );
        return data.rows;
    },

    homesComponentsByEmail: async (userEmail) => {
        const data = await db.query(
            `SELECT * FROM home_components WHERE home_id IN (SELECT home_id FROM ruh WHERE email=$1)`,
            [userEmail]
        );
        return data.rows;
    },

    homesComponentsById: async (homeId) => {
        const data = await db.query(
            `SELECT * FROM home_components WHERE home_id = $1`,
            [homeId]
        );
        return data.rows;
    },

    changeState: async (home_id, component_name, state) => {
        return db.query(
            `UPDATE home_components SET state=$1 WHERE home_id=$2 AND component=$3`,
            [state, home_id, component_name]
        );
    },

    getUsersCount: async () => {
        const data = await db.query(`SELECT * FROM users`);
        return data.rowCount;
    },

    getHomesCount: async () => {
        const data = await db.query(`SELECT * FROM homes`);
        return data.rowCount;
    },

    getComponentsCount: async () => {
        const data = await db.query(`SELECT * FROM home_components`);
        return data.rowCount;
    },
};
