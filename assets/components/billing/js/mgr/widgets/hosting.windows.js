Billing.window.CreateHosting = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-host-window-create';
	}
	Ext.applyIf(config, {
		title: _('billing.create'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/hosting/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.CreateHosting.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.CreateHosting, MODx.Window, {

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
                            xtype: 'billing-combo-hosting-vid'
                            ,fieldLabel: _('billing.vid')
                            ,name: 'vid'
                            ,id: config.id + 'vid'
                            ,anchor: '99%'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: _('billing.cost'),
                            name: 'cost',
                            id: config.id + '-cost',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textfield',
                            fieldLabel: _('billing.hdd'),
                            name: 'hdd',
                            id: config.id + '-hdd',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('billing.db'),
                            name: 'db',
                            id: config.id + '-db',
                            anchor: '99%',
                            allowBlank: false,
                        },  {
                            xtype: 'textfield',
                            fieldLabel: _('billing.idprice'),
                            name: 'id_price',
                            id: config.id + '-id_price',
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
                            xtype: 'modx-combo-boolean',
                            fieldLabel: _('billing.sort'),
                            hiddenName:'sort',
                            name: 'sort',
                            id: config.id + '-sort',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('billing.domains'),
                            name: 'domains',
                            id: config.id + '-domains',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textfield',
                            fieldLabel: _('billing.ftp'),
                            name: 'ftp',
                            id: config.id + '-ftp',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            fieldLabel: _('billing.active'),
                            xtype: 'xcheckbox',
                            //  boxLabel: _('billing.active'),
                            name: 'active',
                            id: config.id + '-active',
                        }
                    ]
                    },

                ]
                },
        ];
	}

});
Ext.reg('billing-host-window-create', Billing.window.CreateHosting);


Billing.window.UpdateHosting = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-host-window-update';
	}
	Ext.applyIf(config, {
		title: _('billing.update'),
		width: 550,
		autoHeight: true,
		url: Billing.config.connector_url,
		action: 'mgr/hosting/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Billing.window.UpdateHosting.superclass.constructor.call(this, config);
};
Ext.extend(Billing.window.UpdateHosting, MODx.Window, {


	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, /*{
			xtype: 'textfield',
			fieldLabel: _('billing.vid'),
			name: 'vid',
			id: config.id + '-vid',
			anchor: '99%',
			allowBlank: false,
		}, */
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
                                        xtype: 'billing-combo-hosting-vid'
                                        ,fieldLabel: _('billing.vid')
                                        ,name: 'vid'
                                        ,id: config.id + 'vid'
                                        ,anchor: '99%'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        fieldLabel: _('billing.cost'),
                                        name: 'cost',
                                        id: config.id + '-cost',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.hdd'),
                                        name: 'hdd',
                                        id: config.id + '-hdd',
                                        anchor: '99%',
                                        allowBlank: false,
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.db'),
                                        name: 'db',
                                        id: config.id + '-db',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },  {
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.idprice'),
                                        name: 'id_price',
                                        id: config.id + '-id_price',
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
                                        xtype: 'modx-combo-boolean',
                                        fieldLabel: _('billing.sort'),
                                        hiddenName:'sort',
                                        name: 'sort',
                                        id: config.id + '-sort',
                                        anchor: '99%',
                                        allowBlank: false,
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.domains'),
                                        name: 'domains',
                                        id: config.id + '-domains',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel: _('billing.ftp'),
                                        name: 'ftp',
                                        id: config.id + '-ftp',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        fieldLabel: _('billing.active'),
                                        xtype: 'xcheckbox',
                                      //  boxLabel: _('billing.active'),
                                        name: 'active',
                                        id: config.id + '-active',
                                    }
                                ]
                        },

                     ]
            },
 /*{
			xtype: 'numberfield',
			fieldLabel: _('billing.tarifsgroup'),
			name: 'tarifsgroup',
			id: config.id + '-tarifsgroup',
			anchor: '99%',
			allowBlank: false,
		}, */ ];
	}


});
Ext.reg('billing-host-window-update', Billing.window.UpdateHosting);