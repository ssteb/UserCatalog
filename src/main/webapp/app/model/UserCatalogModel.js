/**
 * Created by sadmin on 05.05.2016.
 */
Ext.define('UserCatalog.model.UserCatalogModel', {
    extend: 'Ext.data.Model',
    fields: ['username', 'usermail'],
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