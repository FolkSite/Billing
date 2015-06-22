Billing.window.CreateDomains = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-domain-window-create';
	}
	Ext.applyIf(config, {
		title: _('billing.create'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/domain/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.CreateDomains.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.CreateDomains, MODx.Window, {

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
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p1'),
                        name: 'p1',
                        id: config.id + '-p1',
                        anchor: '99%'
                    },{
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p2'),
                        name: 'p2',
                        id: config.id + '-p2',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p3'),
                        name: 'p3',
                        id: config.id + '-p3',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p4'),
                        name: 'p4',
                        id: config.id + '-p4',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p5'),
                        name: 'p5',
                        id: config.id + '-p5',
                        anchor: '99%'
                    },
                ]
                },
                {
                    title: 'Основное'
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
                                fieldLabel: _('billing.zones'),
                                name: 'zones',
                                id: config.id + '-zones',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.whois'),
                                name: 'whois',
                                id: config.id + '-whois',
                                anchor: '99%'
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.groups'),
                                name: 'groups',
                                id: config.id + '-groups',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('billing.url'),
                                name: 'url',
                                id: config.id + '-url',
                                anchor: '99%'
                            }, {
                                xtype: 'modx-combo-boolean',
                                hiddenName:'hide',
                                fieldLabel: _('billing.hide'),
                                name: 'hide',
                                id: config.id + '-hide',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('billing.max'),
                                name: 'max',
                                id: config.id + '-max',
                                anchor: '99%'
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
                                fieldLabel: _('billing.domain'),
                                name: 'domain',
                                id: config.id + '-domain',
                                anchor: '99%'
                            }, {
                                xtype: 'modx-combo-boolean',
                                fieldLabel: _('billing.idn'),
                                name: 'idn',
                                hiddenName:'idn',
                                id: config.id + '-idn',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('billing.roznica'),
                                name: 'roznica',
                                id: config.id + '-roznica',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('billing.popular'),
                                name: 'popular',
                                id: config.id + '-popular',
                                anchor: '99%'
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('billing.min'),
                                name: 'min',
                                id: config.id + '-min',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('billing.year'),
                                name: 'year',
                                id: config.id + '-year',
                                anchor: '99%'
                            },
                        ]
                        }
                    ]
                    },
                    {
                        xtype: 'xcheckbox',
                        boxLabel: _('billing.active'),
                        name: 'active',
                        id: config.id + '-active',
                        checked: true,
                    }
                ]}

            ]
            }
        ];
	}

});
Ext.reg('billing-domain-window-create', Billing.window.CreateDomains);


Billing.window.UpdateDomains = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-domain-window-update';
	}
	Ext.applyIf(config, {
		title: _('billing_domain_update'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/domain/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.UpdateDomains.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.UpdateDomains, MODx.Window, {

	getFields: function (config) {
		return [
            {
                xtype: 'hidden',
                name: 'id',
                id: config.id + '-id',
            },
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
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p1'),
                        name: 'p1',
                        id: config.id + '-p1',
                        anchor: '99%'
                    },{
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p2'),
                        name: 'p2',
                        id: config.id + '-p2',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p3'),
                        name: 'p3',
                        id: config.id + '-p3',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p4'),
                        name: 'p4',
                        id: config.id + '-p4',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('billing.p5'),
                        name: 'p5',
                        id: config.id + '-p5',
                        anchor: '99%'
                    },
                ]
                },
                {
                title: 'Основное'
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
                                                fieldLabel: _('billing.zones'),
                                                name: 'zones',
                                                id: config.id + '-zones',
                                                anchor: '99%',
                                                allowBlank: false,
                                            },{
                                                xtype: 'textfield',
                                                fieldLabel: _('billing.whois'),
                                                name: 'whois',
                                                id: config.id + '-whois',
                                                anchor: '99%'
                                            },{
                                                xtype: 'textfield',
                                                fieldLabel: _('billing.groups'),
                                                name: 'groups',
                                                id: config.id + '-groups',
                                                anchor: '99%'
                                            }, {
                                                xtype: 'textfield',
                                                fieldLabel: _('billing.url'),
                                                name: 'url',
                                                id: config.id + '-url',
                                                anchor: '99%'
                                            }, {
                                                xtype: 'modx-combo-boolean',
                                                hiddenName:'hide',
                                                fieldLabel: _('billing.hide'),
                                                name: 'hide',
                                                id: config.id + '-hide',
                                                anchor: '99%'
                                            }, {
                                                xtype: 'textfield',
                                                fieldLabel: _('billing.max'),
                                                name: 'max',
                                                id: config.id + '-max',
                                                anchor: '99%'
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
                                            fieldLabel: _('billing.domain'),
                                            name: 'domain',
                                            id: config.id + '-domain',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'modx-combo-boolean',
                                            fieldLabel: _('billing.idn'),
                                            name: 'idn',
                                            hiddenName:'idn',
                                            id: config.id + '-idn',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'textfield',
                                            fieldLabel: _('billing.roznica'),
                                            name: 'roznica',
                                            id: config.id + '-roznica',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'textfield',
                                            fieldLabel: _('billing.popular'),
                                            name: 'popular',
                                            id: config.id + '-popular',
                                            anchor: '99%'
                                        },{
                                            xtype: 'textfield',
                                            fieldLabel: _('billing.min'),
                                            name: 'min',
                                            id: config.id + '-min',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'textfield',
                                            fieldLabel: _('billing.year'),
                                            name: 'year',
                                            id: config.id + '-year',
                                            anchor: '99%'
                                        },
                                ]
                            }
                        ]
                },
  {
            xtype: 'xcheckbox',
            boxLabel: _('billing.active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }
            ]}

        ]
            }
                ];

	}

});
Ext.reg('billing-domain-window-update', Billing.window.UpdateDomains);