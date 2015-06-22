Billing.window.CreateServer = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-server-window-create';
	}
	Ext.applyIf(config, {
		title: _('billing_host_create'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/server/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.CreateServer.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.CreateServer, MODx.Window, {
	getFields: function (config) {
		return [
            {
                xtype: 'modx-tabs'
                ,deferredRender: false
                ,border: true
                ,bodyStyle: 'padding:5px;'
                ,items: [
                {
                    title: 'Цены'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [
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
                                fieldLabel: _('billing.price1'),
                                name: 'price1',
                                id: config.id + '-price1',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.price3'),
                                name: 'price3',
                                id: config.id + '-price3',
                                anchor: '99%',
                                allowBlank: false,
                            }
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
                                fieldLabel: _('billing.price2'),
                                name: 'price2',
                                id: config.id + '-price2',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.price4'),
                                name: 'price4',
                                id: config.id + '-price4',
                                anchor: '99%',
                                allowBlank: false,
                            }
                        ]
                        }
                    ]
                    }]
                },
                {
                    title: 'Общее'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [

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
                                fieldLabel: _('billing.name'),
                                name: 'name',
                                id: config.id + '-name',
                                anchor: '99%',
                                allowBlank: false,
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: _('billing.processor'),
                                name: 'processor',
                                id: config.id + '-processor',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.hdd'),
                                name: 'hdd',
                                id: config.id + '-hdd',
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
                                fieldLabel: _('billing.memory'),
                                name: 'memory',
                                id: config.id + '-memory',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.virtualisation'),
                                name: 'virtualisation',
                                id: config.id + '-virtualisation',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.skidka'),
                                name: 'skidka',
                                id: config.id + '-skidka',
                                anchor: '99%',
                                allowBlank: false,
                            },
                        ]
                        }
                    ]
                    },{
                        xtype: 'textarea',
                        fieldLabel: _('billing.os'),
                        name: 'os',
                        id: config.id + '-os',
                        anchor: '99%',
                        allowBlank: false,
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: _('billing.comments'),
                        name: 'comments',
                        id: config.id + '-comments',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'xcheckbox',
                        boxLabel: _('billing_host_active'),
                        name: 'active',
                        id: config.id + '-active',
                        checked: true,
                    }
                ]
                },



            ]


            }
        ];
	}

});
Ext.reg('billing-server-window-create', Billing.window.CreateServer);


Billing.window.UpdateServer = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-server-window-update';
	}
	Ext.applyIf(config, {
		title: _('billing_host_update'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/server/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.UpdateServer.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.UpdateServer, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
            xtype: 'modx-tabs'
            ,deferredRender: false
            ,border: true
            ,bodyStyle: 'padding:5px;'
            ,items: [
                {
                    title: 'Цены'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [
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
                                fieldLabel: _('billing.price1'),
                                name: 'price1',
                                id: config.id + '-price1',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.price3'),
                                name: 'price3',
                                id: config.id + '-price3',
                                anchor: '99%',
                                allowBlank: false,
                            }
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
                                fieldLabel: _('billing.price2'),
                                name: 'price2',
                                id: config.id + '-price2',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.price4'),
                                name: 'price4',
                                id: config.id + '-price4',
                                anchor: '99%',
                                allowBlank: false,
                            }
                        ]
                        }
                    ]
                    }]
                },
                {
                    title: 'Общее'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [

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
                                fieldLabel: _('billing.name'),
                                name: 'name',
                                id: config.id + '-name',
                                anchor: '99%',
                                allowBlank: false,
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: _('billing.processor'),
                                name: 'processor',
                                id: config.id + '-processor',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.hdd'),
                                name: 'hdd',
                                id: config.id + '-hdd',
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
                                fieldLabel: _('billing.memory'),
                                name: 'memory',
                                id: config.id + '-memory',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.virtualisation'),
                                name: 'virtualisation',
                                id: config.id + '-virtualisation',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.skidka'),
                                name: 'skidka',
                                id: config.id + '-skidka',
                                anchor: '99%',
                                allowBlank: false,
                            },
                        ]
                        }
                    ]
                    },{
                        xtype: 'textarea',
                        fieldLabel: _('billing.os'),
                        name: 'os',
                        id: config.id + '-os',
                        anchor: '99%',
                        allowBlank: false,
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: _('billing.comments'),
                        name: 'comments',
                        id: config.id + '-comments',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'xcheckbox',
                        boxLabel: _('billing_host_active'),
                        name: 'active',
                        id: config.id + '-active',
                        checked: true,
                    }
                ]
                },



            ]


        }

        ];
	}

});
Ext.reg('billing-server-window-update', Billing.window.UpdateServer);