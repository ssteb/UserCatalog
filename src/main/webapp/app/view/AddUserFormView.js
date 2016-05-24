/**
 * Created by sadmin on 05.05.2016.
 */
Ext.define('UserCatalog.view.AddUserFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addUserFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'Логін користувача',
                    regex: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                    regexText: 'Тільки латиниця та цифри. Перший символ - літера! 2 -20 символів!',
                    allowBlank: false,
                    blankText: 'Це поле необхідно заповнити!'
                },
                {
                    xtype: 'textfield',
                    name: 'usermail',
                    fieldLabel: 'E-mail',
                    regex: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                    regexText: 'Невірний формат e-mail!',
                    allowBlank: false,
                    blankText: 'Це поле необхідно заповнити!'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Зберегти',
            action: 'save',
            disabled: true
        },
        {
            text: 'Відміна',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});