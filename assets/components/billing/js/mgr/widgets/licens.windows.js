Billing.window.CreateLic = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-lic-window-create';
	}
	Ext.applyIf(config, {
		title: _('billing.create'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/lic/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.CreateLic.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.CreateLic, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('billing.name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.vid'),
			name: 'vid',
			id: config.id + '-vid',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.period'),
			name: 'period',
			id: config.id + '-period',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.price'),
			name: 'price',
			id: config.id + '-price',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.idprice'),
			name: 'idprice',
			id: config.id + '-idprice',
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('billing.active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('billing-lic-window-create', Billing.window.CreateLic);


Billing.window.UpdateLic = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-lic-window-update';
	}
	Ext.applyIf(config, {
		title: _('billing.update'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/lic/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.UpdateLic.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.UpdateLic, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'billing-combo-lic-vid',
			fieldLabel: _('billing.vid'),
			name: 'vid',
			id: config.id + '-vid',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.period'),
			name: 'period',
			id: config.id + '-period',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.price'),
			name: 'price',
			id: config.id + '-price',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('billing.idprice'),
			name: 'idprice',
			id: config.id + '-idprice',
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('billing.active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('billing-lic-window-update', Billing.window.UpdateLic);