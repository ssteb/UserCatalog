/**
 * Created by sadmin on 05.05.2016.
 */
Ext.define('UserCatalog.view.UserGridView',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userGridView',
    width: 400,
    height: 300,
    frame: true,
    store: 'UserCatalogStore',
    iconCls: 'icon-user',
    viewConfig: {
        markDirty:false
    },
    columns: [
        {
            flex: 1,
            text: 'Користувач',
            sortable: true,
            dataindex: 'username',
            editor: {
                xtype: 'textfield',
                regex: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                regexText: 'Тільки латиниця та цифри. Перший символ - літера! 2 -20 символів!',
                allowBlank: false,
                blankText: 'Це поле необхідно заповнити!'
            }
        },
        {
            flex: 2,
            text: 'E-mail',
            sortable: true,
            dataIndex: 'usermail',
            editor: {
                xtyoe: 'textfield',
                regex: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                regexText: 'Невірний формат e-mail!',
                allowBlank: false,
                blankText: 'Це поле необхідно заповнити!'
            }
        }

    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Зберегти',
            cancelBtnText: 'Відміна'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Додати',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Видалити',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
})
