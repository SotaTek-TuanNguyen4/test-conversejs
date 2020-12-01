converse.initialize({
  bosh_service_url: 'https://conversejs.org/http-bind/', // Please use this connection manager only for testing purposes
  show_controlbox_by_default: true,
  whitelisted_plugins: ["myplugin"],
  view_mode: 'embedded'
});

converse.plugins.add('myplugin', {
  initialize: function () {
    const _converse = this._converse;
    _converse.api.listen.on('messageSend', function (message) {
        // new Notification('New Message', { 
        //   body: message.attributes.message,
        // });
        Toastify({
          text: message.attributes.message,
          duration: 3000,
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          position: "center",
          close: true,
        }).showToast()
    });
  }
});