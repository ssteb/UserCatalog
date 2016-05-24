/**
 * Created by sadmin on 05.05.2016.
 */
Ext.define('UserCatalog.view.UserCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.userCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'userGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 8px cursive; text-align: center; font-size: 48px;">Список користувачів</div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchUserView',
            title: 'Пошук',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});