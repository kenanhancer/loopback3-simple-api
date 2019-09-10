'use strict';

module.exports = function (Coffeeshop) {
    Coffeeshop.status = async function () {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const OPEN_HOUR = 6;
        const CLOSE_HOUR = 20;

        console.log('Current hour is %d', currentHour);

        let response;
        if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
            response = 'We are open for business.';
        } else {
            response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
        }

        return response;
    };

    Coffeeshop.remoteMethod('status',
        {
            http: {
                path: '/status',
                verb: 'get',
            },
            returns: {
                arg: 'status',
                type: 'string',
            },
        });
};
