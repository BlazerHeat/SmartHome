const { default: axios } = require('axios');
const map = require('../utils/homeUrlMap');

module.exports = async function sendStateChangeReq(
    home_id,
    component_name,
    state
) {
    try {
        const url = map.get(home_id);
        await axios.post(url + '/changestate', {
            component_name,
            state,
        });
    } catch (err) {
        throw new Error('Home Controller Seems offline!');
    }
};
