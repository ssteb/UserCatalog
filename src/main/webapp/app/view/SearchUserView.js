/**
 * Created by sadmin on 05.05.2016.
 */
Ext.define('UserCatalog.view.SearchUserView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchUserView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: 'Введіть логін користувача',
            maxLength: 200
        }
    ]
});