Billing.window.CreateVDS = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-wds-window-create';
	}
	Ext.applyIf(config, {
		title: _('billing_host_create'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/vps/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.CreateVDS.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.CreateVDS, MODx.Window, {

	getFields: function (config) {
		return [

            {
                layout:'column'
                ,border: false
                ,anchor: '99%'
                ,items: [
                {
                    columnWidth: .5
                    ,layout: 'form'
                    ,defaults: { msgTarget: 'under' }
                    ,border:false
                    ,items: [
                    {
                        xtype: 'textfield',
                        fieldLabel:_('billing.vid'),
                        name: 'vid',
                        id: config.id + '-vid',
                        anchor: '99%',
                        allowBlank: false,
                    }, {
                        xtype: 'textfield',
                        fieldLabel:_('billing.processor'),
                        name: 'processor',
                        id: config.id + '-processor',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.hdd'),
                        name: 'hdd',
                        id: config.id + '-hdd',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.support'),
                        name: 'support',
                        id: config.id + '-support',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.ipv4'),
                        name: 'ipv4',
                        id: config.id + '-ipv4',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.ipmax'),
                        name: 'ipmax',
                        id: config.id + '-ipmax',
                        anchor: '99%',
                        allowBlank: false,
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('billing.dns'),
                        name: 'dns',
                        id: config.id + '-dns',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel: _('billing.price'),
                        name: 'price',
                        id: config.id + '-price',
                        anchor: '99%',
                        allowBlank: false,
                    },
                ]
                },
                {
                    columnWidth: .5
                    ,layout: 'form'
                    ,defaults: { msgTarget: 'under' }
                    ,border:false
                    ,items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: _('billing.name'),
                        name: 'name',
                        id: config.id + '-name',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.groups'),
                        name: 'groups',
                        id: config.id + '-groups',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.memory'),
                        name: 'memory',
                        id: config.id + '-memory',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.trafic'),
                        name: 'trafic',
                        id: config.id + '-trafic',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.priceisp'),
                        name: 'priceisp',
                        id: config.id + '-priceisp',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel:_('billing.ipv6'),
                        name: 'ipv6',
                        id: config.id + '-ipv6',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel: _('billing.backup'),
                        name: 'backup',
                        id: config.id + '-backup',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textfield',
                        fieldLabel: _('billing.idprice'),
                        name: 'idprice',
                        id: config.id + '-idprice',
                        anchor: '99%',
                        allowBlank: false
                    },
                ]
                }
            ]
            },
        ];
	}

});
Ext.reg('billing-vps-window-create', Billing.window.CreateVDS);


Billing.window.UpdateVDS = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-vps-window-update';
	}
	Ext.applyIf(config, {
		title: _('billing_host_update'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/vps/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.UpdateVDS.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.UpdateVDS, MODx.Window, {

	getFields: function (config) {
		return [
            {
                xtype: 'hidden',
                name: 'id',
                id: config.id + '-id',
            },{
                layout:'column'
                ,border: false
                ,anchor: '99%'
                ,items: [
                          {
                            columnWidth: .5
                            ,layout: 'form'
                            ,defaults: { msgTarget: 'under' }
                            ,border:false
                            ,items: [
                                    {
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.vid'),
                                        name: 'vid',
                                        id: config.id + '-vid',
                                        anchor: '99%',
                                        allowBlank: false,
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.processor'),
                                        name: 'processor',
                                        id: config.id + '-processor',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.hdd'),
                                        name: 'hdd',
                                        id: config.id + '-hdd',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.support'),
                                        name: 'support',
                                        id: config.id + '-support',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.ipv4'),
                                        name: 'ipv4',
                                        id: config.id + '-ipv4',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.ipmax'),
                                        name: 'ipmax',
                                        id: config.id + '-ipmax',
                                        anchor: '99%',
                                        allowBlank: false,
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.dns'),
                                        name: 'dns',
                                        id: config.id + '-dns',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.price'),
                                        name: 'price',
                                        id: config.id + '-price',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },
                        ]
                        },
                        {
                            columnWidth: .5
                            ,layout: 'form'
                            ,defaults: { msgTarget: 'under' }
                            ,border:false
                            ,items: [
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.name'),
                                        name: 'name',
                                        id: config.id + '-name',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.groups'),
                                        name: 'groups',
                                        id: config.id + '-groups',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.memory'),
                                        name: 'memory',
                                        id: config.id + '-memory',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.trafic'),
                                        name: 'trafic',
                                        id: config.id + '-trafic',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.priceisp'),
                                        name: 'priceisp',
                                        id: config.id + '-priceisp',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel:_('billing.ipv6'),
                                        name: 'ipv6',
                                        id: config.id + '-ipv6',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.backup'),
                                        name: 'backup',
                                        id: config.id + '-backup',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.idprice'),
                                        name: 'idprice',
                                        id: config.id + '-idprice',
                                        anchor: '99%',
                                        allowBlank: false
                                    },
                        ]
                        }
                ]
            },
 {
            xtype: 'xcheckbox',
            boxLabel: _('billing_host_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
	}

});
Ext.reg('billing-vds-window-update', Billing.window.UpdateVDS);