/**
 * Created by sadmin on 05.05.2016.
 */
Ext.define('UserCatalog.controller.UserCatalogController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'userGridView',
            ref: 'userGridView'},
        {selector: 'userGridView button[action="add"]',
            ref: 'userGridAdd'},
        {selector: 'userGridView button[action="delete"]',
            ref: 'userGridDelete'},
        {selector: 'searchUserView button[action="search"]',
            ref: 'searchUser'},
        {selector: 'addUserFormView',
            ref: 'addUserFormView'},
        {selector: 'userCatalogView',
            ref: 'userCatalogView'},
        {selector: 'addUserFormView textfield[name=username] ',
            ref: 'addUserFormName'},
        {selector: 'addUserFormView textfield[name=usermail]',
            ref: 'addUserFormPrice'},
        {selector: 'addUserFormView button[action=save]',
            ref: 'addUserFormSave'}
    ],


    init: function () {
        this.control({
            'userGridView  button[action=add]': {
                click: this.onAddUser
            },
            'userGridView  button[action=delete]': {
                click: this.onDelUser
            },
            'searchUserView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'userGridView': {
                cellclick: this.onLineGrid
            },
            'addUserFormView  button[action=save]': {
                click: this.onSaveUser
            },
            'addUserFormView  textfield[name=username]': {
                change: this.onValidation
            },
            'addUserFormView  textfield[name=usermail]': {
                change: this.onValidation
            }
        });
    },

    onSaveUser: function (button) {
        var me = this;

        console.log('me');

        var userModel = Ext.create('UserCatalog.model.UserCatalogModel');

        console.log('userModel');

        userModel.set(this.getAddUserFormView().down('form').getValues());

        console.log('usermodel.set');


        userModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('UserCatalogStore').add(objAjax);
                me.getAddUserFormView().close();
                
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дублікат!',
                    msg: 'Користувач з таким ім\'ям та поштою вже існує!',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddUser: function () {
        Ext.widget('addUserFormView');
    },

    onDelUser: function () {
        var sm = this.getUserGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getUserGridView().store.remove(rs[0]);
        this.getUserGridView().store.commitChanges();
        this.getUserGridDelete().disable();
    },

    onChangeText: function () {
        Ext.getStore('UserCatalogStore').load({
            params: {
                search: this.getUserCatalogView().down('searchUserView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getUserGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddUserFormName().validate() && this.getAddUserFormPrice().validate()) {
            this.getAddUserFormSave().enable();
        } else {
            this.getAddUserFormSave().disable();
        }
    }

})