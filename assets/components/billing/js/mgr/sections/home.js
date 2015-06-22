Billing.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'billing-panel-home', renderTo: 'billing-panel-home-div'
		}]
	});
	Billing.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Billing.page.Home, MODx.Component);
Ext.reg('billing-page-home', Billing.page.Home);