Billing.window.CreateSSL = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-cert-window-create';
	}
	Ext.applyIf(config, {
		title: _('billing_host_create'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/cert/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.CreateSSL.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.CreateSSL, MODx.Window, {
	getFields: function (config) {
		return [
            {
                xtype: 'modx-tabs'
                ,deferredRender: false
                ,border: true
                ,bodyStyle: 'padding:5px;'
                ,items: [{
                title: 'Цены'
                ,hideMode: 'offsets'
                ,layout: 'form'
                ,border:false
                ,items: [{
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
                                    fieldLabel: _('billing.price'),
                                    name: 'price',
                                    id: config.id + '-price',
                                    anchor: '99%',
    //                                    allowBlank: false
                                }
                                , {
                                    xtype: 'numberfield',
                                    fieldLabel: _('billing.price1'),
                                    name: 'price1',
                                    id: config.id + '-price1',
                                    anchor: '99%',
    //                                    allowBlank: false,

                                }
                                ,{ xtype: 'numberfield',
                                    fieldLabel: _('billing.price4'),
                                    name: 'price4',
                                    id: config.id + '-price4',
                                    anchor: '99%',
                                    allowBlank: false,
                                }

                            ]},
                            {
                                columnWidth: .5
                                ,layout: 'form'
                                ,defaults: { msgTarget: 'under' }
                                ,border:false
                                ,items: [

                                { xtype: 'numberfield',
                                    fieldLabel: _('billing.price2'),
                                    name: 'price2',
                                    id: config.id + '-price2',
                                    anchor: '99%',
    //                        allowBlank: false,
                                }, {
                                    xtype: 'numberfield',
                                    fieldLabel: _('billing.price3'),
                                    name: 'price3',
                                    id: config.id + '-price3',
                                    anchor: '99%',
    //                        allowBlank: false,
                                },{
                                    xtype: 'numberfield',
                                    fieldLabel: _('billing.price5'),
                                    name: 'price5',
                                    id: config.id + '-price5',
                                    anchor: '99%',
                                    allowBlank: false,
                                }
                            ]}
                        ]
                        }

                    ]
                }
                ,{
                    title: 'Основное'
                    ,height: 1122
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: _('billing.name'),
                        name: 'name',
                        id: config.id + '-name',
                        anchor: '99%',
                        //allowBlank: false,
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
                                    ,items: [{
                                                xtype: 'textfield',
                                                fieldLabel: _('billing.vid'),
                                                name: 'vid',
                                                id: config.id + '-vid',
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
                                                fieldLabel: _('billing.idprice'),
                                                name: 'idprice',
                                                id: config.id + '-idprice',
                                                anchor: '99%',
                                                allowBlank: false,
                                            },
                                    ]
                                }
                            ]
                        },/* {
                        xtype: 'textfield',
                        fieldLabel: _('billing.options'),
                        name: 'options',
                        id: config.id + '-options',
                        anchor: '99%',
                        allowBlank: false,
                    },*/{
                        xtype: 'checkboxgroup',
                        fieldLabel: _('billing.options'),
                        name: 'options',
                        id: config.id + '-options',
                        anchor: '99%',
                        allowBlank: false,
                        //columns: 3
                        items: [{
                                    boxLabel: 'D',
                                    name: 'options[]',
                                    inputValue: 'D'
                                }, {
                                    boxLabel: 'D+O',
                                    name: 'options[]',
                                    inputValue: 'D+O',
                                }, {
                                    boxLabel: 'IDN',
                                    name: 'options[]',
                                    inputValue: 'IDN',
                                },{
                                    boxLabel: 'EV',
                                    name: 'options[]',
                                    inputValue: 'EV',
                                },{
                                    boxLabel: 'WC',
                                    name: 'options[]',
                                    inputValue: 'WC',
                                },{
                                    boxLabel: 'SGC',
                                    name: 'options[]',
                                    inputValue: 'SGC',
                                }
                        ]
                    },


                        {
                        xtype: 'modx-combo-browser',
                        fieldLabel: _('billing.logo'),
                        name: 'logo',
                        id: config.id + '-logo',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'textarea',
                        height:150,
                        fieldLabel: _('billing.comments'),
                        name: 'comments',
                        id: config.id + '-comments',
                        anchor: '99%',
                        allowBlank: false,
                    }, {
                        xtype: 'xcheckbox',
                        boxLabel: _('billing_host_active'),
                        name: 'active',
                        id: config.id + '-active',
                        checked: true,
                    }
                ]

            }

            ]
             }
];
	}

});
Ext.reg('billing-cert-window-create', Billing.window.CreateSSL);


Billing.window.UpdateSSL = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-cert-window-update';
	}
	Ext.applyIf(config, {
		title: _('billing_host_update'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/cert/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.UpdateSSL.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.UpdateSSL, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		},
            {
                xtype: 'modx-tabs'
                ,deferredRender: false
                ,border: true
                ,bodyStyle: 'padding:5px;'
                ,items: [{
                title: 'Цены'
                ,hideMode: 'offsets'
                ,layout: 'form'
                ,border:false
                ,items: [{
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
                                fieldLabel: _('billing.price'),
                                name: 'price',
                                id: config.id + '-price',
                                anchor: '99%',
                                //                                    allowBlank: false
                            }
                            , {
                                xtype: 'numberfield',
                                fieldLabel: _('billing.price1'),
                                name: 'price1',
                                id: config.id + '-price1',
                                anchor: '99%',
                                //                                    allowBlank: false,

                            }
                            ,{ xtype: 'numberfield',
                                fieldLabel: _('billing.price4'),
                                name: 'price4',
                                id: config.id + '-price4',
                                anchor: '99%',
                                allowBlank: false,
                            }

                        ]},
                        {
                            columnWidth: .5
                            ,layout: 'form'
                            ,defaults: { msgTarget: 'under' }
                            ,border:false
                            ,items: [

                            { xtype: 'numberfield',
                                fieldLabel: _('billing.price2'),
                                name: 'price2',
                                id: config.id + '-price2',
                                anchor: '99%',
                                //                        allowBlank: false,
                            }, {
                                xtype: 'numberfield',
                                fieldLabel: _('billing.price3'),
                                name: 'price3',
                                id: config.id + '-price3',
                                anchor: '99%',
                                //                        allowBlank: false,
                            },{
                                xtype: 'numberfield',
                                fieldLabel: _('billing.price5'),
                                name: 'price5',
                                id: config.id + '-price5',
                                anchor: '99%',
                                allowBlank: false,
                            }
                        ]}
                    ]
                }

                ]
            }
                ,{
                    title: 'Основное'
                    ,height: 1122
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: _('billing.name'),
                            name: 'name',
                            id: config.id + '-name',
                            anchor: '99%',
                            //allowBlank: false,
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
                                    ,items: [{
                                    xtype: 'textfield',
                                    fieldLabel: _('billing.vid'),
                                    name: 'vid',
                                    id: config.id + '-vid',
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
                                        fieldLabel: _('billing.idprice'),
                                        name: 'idprice',
                                        id: config.id + '-idprice',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },
                                ]
                                }
                            ]
                        },/* {
                         xtype: 'textfield',
                         fieldLabel: _('billing.options'),
                         name: 'options',
                         id: config.id + '-options',
                         anchor: '99%',
                         allowBlank: false,
                         },*/{
                            xtype: 'checkboxgroup',
                            fieldLabel: _('billing.options'),
                            name: 'options',
                            id: config.id + '-options',
                            anchor: '99%',
                            allowBlank: false,
                            //columns: 3
                            items: [{
                                boxLabel: 'D',
                                name: 'options[]',
                                inputValue: 'D'
                            }, {
                                boxLabel: 'D+O',
                                name: 'options[]',
                                inputValue: 'D+O',
                            }, {
                                boxLabel: 'IDN',
                                name: 'options[]',
                                inputValue: 'IDN',
                            },{
                                boxLabel: 'EV',
                                name: 'options[]',
                                inputValue: 'EV',
                            },{
                                boxLabel: 'WC',
                                name: 'options[]',
                                inputValue: 'WC',
                            },{
                                boxLabel: 'SGC',
                                name: 'options[]',
                                inputValue: 'SGC',
                            }
                            ]
                        },


                        {
                            xtype: 'modx-combo-browser',
                            fieldLabel: _('billing.logo'),
                            name: 'logo',
                            id: config.id + '-logo',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textarea',
                            height:150,
                            fieldLabel: _('billing.comments'),
                            name: 'comments',
                            id: config.id + '-comments',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'xcheckbox',
                            boxLabel: _('billing_host_active'),
                            name: 'active',
                            id: config.id + '-active',
                            checked: true,
                        }
                    ]

                }

            ]
            }
        ];
	}

});
Ext.reg('billing-cert-window-update', Billing.window.UpdateSSL);