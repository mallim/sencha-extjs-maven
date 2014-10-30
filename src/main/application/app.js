/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'MyApp',
    controllers: ["Main"],
    views: ['Main','Viewport'],
    requires:[
      'MyApp.view.Main',
      'MyApp.view.Viewport'
    ],
    autoCreateViewport: true

    /**
    launch: function() {

      var naviButtonsConfig = [
        {
          xtype: 'button',
          text: 'Registration Form',
          action: 'openRegistrationForm'
        },
        {
          xtype: 'button',
          text: 'Navi Button 2'
        },
        {
          xtype: 'button',
          text: 'Navi Button 3'
        },
        {
          xtype: 'button',
          text: 'Navi Button 4'
        },
        {
          xtype: 'button',
          text: 'Navi Button 5'
        },
        {
          xtype: 'button',
          text: 'Navi Button 6'
        },
        {
          xtype: 'button',
          text: 'Navi Button 7'
        },
        {
          xtype: 'button',
          text: 'Navi Button 8'
        }
      ];
      **/

      /**
      Ext.create('Ext.container.Viewport', {

        layout: 'border',

        items: [
          {
            region: 'north',
            margins: 5,
            height: 50,
            xtype: 'container',
            html: '<h1 class="x-panel-header">Welcome to MyApp Demo</h1>'
          },
          {
            title: 'Navigation',
            region: 'west',
            layout: 'anchor',
            margins: '0 5 0 5',
            flex: .2,
            collapsible: true,
            split: true,
            titleCollapse: true,
            defaults: {
              xtype: 'button',
              margin: '5',
              anchor: '100%'
            },
            // items: naviButtonsConfig
            items:[{xtype:'navigation'}]
          },
          {
            // title: 'Center / Srodkowy',
            region: 'center',
            layout:'fit',
            items: [
              {
                header: false,
                xtype: 'mainview'
              }
            ]
          },
          {
            title: 'East / Wschodni',
            region: 'east',
            margins: '0 5 0 5',
            width: 200,
            collapsible: true,
            collapsed: true
          },
          {
            title: 'South / Południowy',
            region: 'south',
            margins: '0 5 5 5',
            flex: .1,
            split: true,
            html: 'Information goes here'
          }
        ]
      });
    }
    **/
});
