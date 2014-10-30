"use strict";

Ext.define('MyApp.view.Viewport', {
  extend: 'Ext.container.Viewport',
  requires:[
    'Ext.layout.container.Border',
    'MyApp.view.Main',
    'MyApp.view.layout.West'
  ],
  layout: {
    type: 'border'
  },
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
      items: [
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
      ]
      // items:[{xtype:'menu_view'}]
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


