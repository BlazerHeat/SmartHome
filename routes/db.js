const express = require('express');
const router = express.Router();
const dbHandler = require('../handlers/dbQueries');
const sendStateChangeReq = require('../handlers/sendStateChangeReq');

router.get('/userhomes/:useremail', async (req, res) => {
    const { useremail } = req.params;

    try {
        const cardData = await dbHandler.homesData(useremail);
        const componentsData = await dbHandler.homesComponentsByEmail(useremail);

        return res.status(202).json({
            cardData,
            componentsData,
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.post('/changestate', async (req, res) => {
    const { home_id, component_name, state } = req.body;
    req.stateChanged = false;
    try {
        await sendStateChangeReq(
            home_id,
            component_name,
            state
        );
        req.stateChanged = true;
        await dbHandler.changeState(home_id, component_name, state);
        return res.status(202).send({ message: 'State Updated!' });
    } catch (err) {
        if (req.stateChanged) {
            await sendStateChangeReq(
                home_id,
                component_name,
                !state
            );
        }

        console.log(err);
        return res.status(500).json({ error: err.message });
    }
});

router.get('/counts', async (req, res) => {
    try {
        const usersCount = await dbHandler.getUsersCount();
        const homesCount = await dbHandler.getHomesCount();
        const componentsCount = await dbHandler.getComponentsCount();
        res.status(202).json({ usersCount, homesCount, componentsCount });
    } catch (err) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
