/**
 * Created by sadmin on 05.05.2016.
 */

Ext.application({
    name: 'UserCatalog',

    views: [
        'AddUserFormView',
        'UserCatalogView',
        'UserGridView',
        'SearchUserView'
    ],

    controllers: [
        'UserCatalogController'
    ],

    stores: [
        'UserCatalogStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            items:{
                xtype: 'userCatalogView'
            }
        });
    }
});