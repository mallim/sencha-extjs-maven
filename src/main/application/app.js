/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'MyApp',

    controllers: ["Main"],

    views: ['Main'],

    requires:['MyApp.view.Main'],

    launch: function() {
      Ext.create('Ext.container.Viewport', {
        items: {
          xtype: 'mainview'
        }
      });
    }
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to MyApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
