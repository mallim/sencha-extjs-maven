Ext.define('MyApp.store.Server', {
  extend : 'Ext.data.Store',
  requires:['MyApp.model.Server'],
  model: 'MyApp.model.Server',
  storeId : 'server',
  proxy: {
    type: 'ajax',
    url: 'data/server.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});


