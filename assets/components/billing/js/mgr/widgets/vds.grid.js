Billing.grid.VDS = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-grid-vds';
	}
	Ext.applyIf(config, {
		url: Billing.config.connector_url,
		fields: this.getFields(config),
		columns: this.getColumns(config),
		tbar: this.getTopBar(config),
		sm: new Ext.grid.CheckboxSelectionModel(),
		baseParams: {
			action: 'mgr/vps/getlist'
		},
        save_action: 'mgr/vps/update',
        autosave: true,
		listeners: {
//			rowDblClick: function (grid, rowIndex, e) {
//				var row = grid.store.getAt(rowIndex);
//				this.updateVds(grid, e, row);
//			}
		},
		viewConfig: {
			forceFit: true,
			enableRowBody: true,
			autoFill: true,
			showPreview: true,
			scrollOffset: 0,
			getRowClass: function (rec, ri, p) {
				return !rec.data.active
					? 'billing-row-disabled'
					: '';
			}
		},
        paging: true,
        remoteSort: true,
        autoHeight: true
	});
	Billing.grid.VDS.superclass.constructor.call(this, config);

	// Clear selection on grid refresh
	this.store.on('load', function () {
		if (this._getSelectedIds().length) {
			this.getSelectionModel().clearSelections();
		}
	}, this);
};
Ext.extend(Billing.grid.VDS, MODx.grid.Grid, {
	windows: {},

	getMenu: function (grid, rowIndex) {
		var ids = this._getSelectedIds();

		var row = grid.getStore().getAt(rowIndex);
		var menu = Billing.utils.getMenu(row.data['actions'], this, ids);

		this.addContextMenuItem(menu);
	},

	createVds: function (btn, e) {
		var w = MODx.load({
			xtype: 'billing-vps-window-create',
			id: Ext.id(),
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		});
		w.reset();
		w.setValues({active: true});
		w.show(e.target);
	},

	updateVds: function (btn, e, row) {
		if (typeof(row) != 'undefined') {
			this.menu.record = row.data;
		}
		else if (!this.menu.record) {
			return false;
		}
		var id = this.menu.record.id;

		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/vps/get',
				id: id
			},
			listeners: {
				success: {
					fn: function (r) {
						var w = MODx.load({
							xtype: 'billing-vds-window-update',
							id: Ext.id(),
							record: r,
							listeners: {
								success: {
									fn: function () {
										this.refresh();
									}, scope: this
								}
							}
						});
						w.reset();
						w.setValues(r.object);
						w.show(e.target);
					}, scope: this
				}
			}
		});
	},

	removeVds: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.msg.confirm({
			title: ids.length > 1
				? _('billing_vds_remove')
				: _('billing_vps_remove'),
			text: ids.length > 1
				? _('billing_vds_remove_confirm')
				: _('billing_vps_remove_confirm'),
			url: this.config.url,
			params: {
				action: 'mgr/vps/remove',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function (r) {
						this.refresh();
					}, scope: this
				}
			}
		});
		return true;
	},

	disableVds: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/vps/disable',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		})
	},

	enableVds: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/vps/enable',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		})
	},

	getFields: function (config) {
		return ['id','vid','name','groups','processor','memory','hdd','trafic','support','priceisp','ipv4','ipv6','ipmax','dns','backup','price','active','actions'];
	},

	getColumns: function (config) {
		return [{
            header: _('id')
            ,dataIndex: 'id'
            ,sortable: true
            ,width: 50
        },{
            header: _('billing.vid')
            ,dataIndex: 'vid'
            ,sortable: true
            ,width: 50
           // ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.name')
            ,dataIndex: 'name'
            ,sortable: true
            ,width: 100
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.groups')
            ,dataIndex: 'groups'
            ,sortable: true
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.processor')
            ,dataIndex: 'processor'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.memory')
            ,dataIndex: 'memory'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.hdd')
            ,dataIndex: 'hdd'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.trafic')
            ,dataIndex: 'trafic'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.support')
            ,dataIndex: 'support'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.priceisp')
            ,dataIndex: 'priceisp'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.ipv4')
            ,dataIndex: 'ipv4'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.ipv6')
            ,dataIndex: 'ipv6'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.ipmax')
            ,dataIndex: 'ipmax'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.dns')
            ,dataIndex: 'dns'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.backup')
            ,dataIndex: 'backup'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.price')
            ,dataIndex: 'price'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.idprice')
            ,dataIndex: 'idprice'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        }, {
			header: _('billing.active'),
			dataIndex: 'active',
			renderer: Billing.utils.renderBoolean,
			sortable: true,
			width: 100,
		}, {
			header: _('billing.actions'),
			dataIndex: 'actions',
			renderer: Billing.utils.renderActions,
			sortable: false,
			width: 100,
			id: 'actions'
		}];
	},

	getTopBar: function (config) {
		return [{
			text: '<i class="icon icon-plus">&nbsp;' + _('billing.create'),
			handler: this.createVds,
			scope: this
		}, '->', {
			xtype: 'textfield',
			name: 'query',
			width: 200,
			id: config.id + '-search-field',
			emptyText: _('billing_grid_search'),
			listeners: {
				render: {
					fn: function (tf) {
						tf.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
							this._doSearch(tf);
						}, this);
					}, scope: this
				}
			}
		}, {
			xtype: 'button',
			id: config.id + '-search-clear',
			text: '<i class="icon icon-times"></i>',
			listeners: {
				click: {fn: this._clearSearch, scope: this}
			}
		}];
	},

	onClick: function (e) {
		var elem = e.getTarget();
		if (elem.nodeName == 'BUTTON') {
			var row = this.getSelectionModel().getSelected();
			if (typeof(row) != 'undefined') {
				var action = elem.getAttribute('action');
				if (action == 'showMenu') {
					var ri = this.getStore().find('id', row.id);
					return this._showMenu(this, ri, e);
				}
				else if (typeof this[action] === 'function') {
					this.menu.record = row.data;
					return this[action](this, e);
				}
			}
		}
		return this.processEvent('click', e);
	},

	_getSelectedIds: function () {
		var ids = [];
		var selected = this.getSelectionModel().getSelections();

		for (var i in selected) {
			if (!selected.hasOwnProperty(i)) {
				continue;
			}
			ids.push(selected[i]['id']);
		}

		return ids;
	},

	_doSearch: function (tf, nv, ov) {
		this.getStore().baseParams.query = tf.getValue();
		this.getBottomToolbar().changePage(1);
		this.refresh();
	},

	_clearSearch: function (btn, e) {
		this.getStore().baseParams.query = '';
		Ext.getCmp(this.config.id + '-search-field').setValue('');
		this.getBottomToolbar().changePage(1);
		this.refresh();
	}
});
Ext.reg('billing-grid-vds', Billing.grid.VDS);