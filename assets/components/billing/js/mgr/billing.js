var Billing = function (config) {
	config = config || {};
	Billing.superclass.constructor.call(this, config);
};
Ext.extend(Billing, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('billing', Billing);

Billing = new Billing();