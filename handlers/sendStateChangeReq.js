module.exports = async function sendStateChangeReq(
    home_id,
    component_name,
    state
) {
    try {
        const socketsMap = require('../utils/sockets.map');

        if (socketsMap.has(home_id)) {
            const socket = socketsMap.get(home_id);
            const payload = { component_name, state };
            socket.send(JSON.stringify(payload));
        } else {
            throw new Error('Home Controller Seems offline!');
        }

    } catch (err) {
        throw new Error('Home Controller Seems offline!');
    }
};
