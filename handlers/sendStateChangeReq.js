const HOME_OFFLINE = 'Home Controller Seems offline!';

const changeState = (socket, data) => {
    return new Promise((resolve, reject) => {
        socket.timeout(1000).emit('change_state', JSON.stringify(data), (err, res) => {
            if (err) {
                reject(HOME_OFFLINE);
            } else {
                resolve(res);
            }
        });
    })
}

module.exports = async function sendStateChangeReq(
    home_id,
    component_name,
    state
) {
    const sockets = require('../utils/sockets.map');
    try {





        if (!sockets.has(home_id)) {

            throw new Error(HOME_OFFLINE);
        }

        const socket = sockets.get(home_id);

        await changeState(socket, { component_name, state });

    } catch (err) {
        if (sockets.has(home_id)) {
            sockets.delete(home_id);
        }

        throw new Error(HOME_OFFLINE);
    }
};
