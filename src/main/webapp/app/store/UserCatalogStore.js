/**
 * Created by sadmin on 05.05.2016.
 */
Ext.define('UserCatalog.store.UserCatalogStore', {
    extend: 'Ext.data.Store',
    requires : [
        'UserCatalog.model.UserCatalogModel'
    ],
    model: 'UserCatalog.model.UserCatalogModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'user',
            read: 'user',
            destroy: 'user',
            update: 'user'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});