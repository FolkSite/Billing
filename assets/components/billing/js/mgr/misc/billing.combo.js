//Billing.combo.Hostingvid = function(config) { // комбобокс с экспертами на редактирование заказа.
//    config = config || {};
//    Ext.applyIf(config,{
//        fields: ['id','first_name']
//        ,url: Billing.config.connector_url
//        //,baseParams: { action: 'mgr/expert/getlist' }
//        ,name: 'id'
//        ,hiddenName: 'name'
//        ,displayField: 'first_name'
//        ,valueField: 'id'
//        ,editable: true
//        ,anchor: '99%'
//     //   ,pageSize: 10
//
//    });
//    Billing.combo.Hostingvid.superclass.constructor.call(this,config);
//};
//Ext.extend(Billing.combo.Hostingvid,MODx.combo.ComboBox);
//Ext.reg('modx-combo-orderasexpert-expert2',Billing.combo.Hostingvid);

Billing.combo.Hostingvid = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: new Ext.data.ArrayStore(
        {
            //id: 0,
            fields: ['save','display']
            ,data: [
                ['hosting', _('billing.hosting.hosting')]
                ,['reseller', _('billing.hosting.reseller')]
                ,['dedicated',_('billing.hosting.dedicated')]
                ,['vds',_('billing.hosting.vds')]
                ,['vpn',_('billing.hosting.vpn')]
                ,['mail',_('billing.hosting.mail')]
                ,['ssh',_('billing.hosting.ssh')]

            ]
        })
        ,mode: 'local'
        ,displayField: 'display'
        ,valueField: 'save'
        ,hiddenName:'vid'
        //,value:'hosting'
        ,selectOnFocus:true
        ,triggerAction: 'all'
        //,emptyText: 'Выберите тип...'
    });
    Billing.combo.Hostingvid.superclass.constructor.call(this,config);
};
Ext.extend(Billing.combo.Hostingvid,MODx.combo.ComboBox);
Ext.reg('billing-combo-hosting-vid',Billing.combo.Hostingvid);

Billing.combo.Licensvid = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: new Ext.data.ArrayStore(
        {
            //id: 0,
            fields: ['save','display']
            ,data: [
                [1, _('billing.lic.ISPmanager')]
                ,[2, _('billing.lic.BILLmanager')]
                ,[3,_('billing.lic.VMmanager')]
                ,[4,_('billing.lic.VEmanager')]
                ,[5,_('billing.lic.DNSmanager')]
                ,[6,_('billing.lic.IPmanager')]
                ,[7,_('billing.lic.cPanel')]
                ,[8,_('billing.lic.Parallels')]
            ]
        })
        ,mode: 'local'
        ,displayField: 'display'
        ,valueField: 'save'
        ,hiddenName:'vid'
        //,value:'hosting'
        ,selectOnFocus:true
        ,triggerAction: 'all'
        //,emptyText: 'Выберите тип...'
    });
    Billing.combo.Licensvid.superclass.constructor.call(this,config);
};
Ext.extend(Billing.combo.Licensvid,MODx.combo.ComboBox);
Ext.reg('billing-combo-lic-vid',Billing.combo.Licensvid);