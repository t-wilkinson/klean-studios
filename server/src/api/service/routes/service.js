'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/service/submit',
      handler: 'service.submit',
    }
  ],
  // config: {
  //   submit: {
  //     auth: false,
  //     policies: [],
  //     middlewares: [],
  //   }
  // }
}

