Billing.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'billing-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('billing') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('billing.hosting'),
				layout: 'anchor',
				items: [{
					html: _('billing_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'billing-grid-hosting',
					cls: 'main-wrapper',
				}]
			},{
				title: _('billing.domains'),
				layout: 'anchor',
				items: [{
					html: _('billing_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'billing-grid-domains',
					cls: 'main-wrapper',
				}]
			},{
				title: _('billing.vds'),
				layout: 'anchor',
				items: [{
					html: _('billing_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'billing-grid-vds',
					cls: 'main-wrapper',
				}]
			},{
				title: _('billing.ssl'),
				layout: 'anchor',
				items: [{
					html: _('billing_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'billing-grid-ssl',
					cls: 'main-wrapper',
				}]
			},{
				title: _('billing.licens'),
				layout: 'anchor',
				items: [{
					html: _('billing_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'billing-grid-licens',
					cls: 'main-wrapper',
				}]
			},{
				title: _('billing.servers'),
				layout: 'anchor',
				items: [{
					html: _('billing_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'billing-grid-servers',
					cls: 'main-wrapper',
				}]
			}
            ]
		}]
	});
	Billing.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Billing.panel.Home, MODx.Panel);
Ext.reg('billing-panel-home', Billing.panel.Home);
