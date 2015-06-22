Billing.grid.Hosting = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'billing-grid-hosting';
	}
	Ext.applyIf(config, {
		url: Billing.config.connector_url,
		fields: this.getFields(config),
		columns: this.getColumns(config),
		tbar: this.getTopBar(config),
		sm: new Ext.grid.CheckboxSelectionModel(),
       save_action: 'mgr/hosting/update',
       autosave: true,
    baseParams: {
			action: 'mgr/hosting/getlist'
		},
		listeners: {
//			rowDblClick: function (grid, rowIndex, e) {
//				var row = grid.store.getAt(rowIndex);
//				this.updateHost(grid, e, row);
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
					? 'billing-host-row-disabled'
					: '';
			}
		},
		paging: true,
		remoteSort: true,
		autoHeight: true,
	});
	Billing.grid.Hosting.superclass.constructor.call(this, config);

	// Clear selection on grid refresh
	this.store.on('load', function () {
		if (this._getSelectedIds().length) {
			this.getSelectionModel().clearSelections();
		}
	}, this);
};
Ext.extend(Billing.grid.Hosting, MODx.grid.Grid, {
	windows: {},

	getMenu: function (grid, rowIndex) {
		var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
		var menu = Billing.utils.getMenu(row.data['actions'], this, ids);

		this.addContextMenuItem(menu);
	},

	createHost: function (btn, e) {
		var w = MODx.load({
			xtype: 'billing-host-window-create',
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

	updateHost: function (btn, e, row) {
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
				action: 'mgr/hosting/get',
				id: id
			},
			listeners: {
				success: {
					fn: function (r) {
						var w = MODx.load({
							xtype: 'billing-host-window-update',
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

	removeHost: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.msg.confirm({
			title: ids.length > 1
				? _('billing_hosting_remove')
				: _('billing_host_remove'),
			text: ids.length > 1
				? _('billing_hosting_remove_confirm')
				: _('billing_host_remove_confirm'),
			url: this.config.url,
			params: {
				action: 'mgr/hosting/remove',
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

	disableHost: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/hosting/disable',
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

	enableHost: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/hosting/enable',
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
		return ['id','vid','name','cost','tarifsgroup','sort','hdd','domains','db','ftp','id_price','active','actions'];
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
            ,width: 60
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.name')
            ,dataIndex: 'name'
            ,sortable: true
            ,width: 100
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.cost')
            ,dataIndex: 'cost'
            ,sortable: true
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },/*{
            header: _('billing.tarifsgroup')
            ,dataIndex: 'tarifsgroup'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },*/{
            header: _('billing.sort')
            ,dataIndex: 'sort'
            ,sortable: false
            ,width: 50
            ,renderer: this.renderBoolean
        },{
            header: _('billing.hdd')
            ,dataIndex: 'hdd'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.domains')
            ,dataIndex: 'domains'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.db')
            ,dataIndex: 'db'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.ftp')
            ,dataIndex: 'ftp'
            ,sortable: false
            ,width: 50
            ,editor: { xtype: 'textfield' }
        },{
            header: _('billing.id_price')
            ,dataIndex: 'id_price'
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
			handler: this.createHost,
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
    ,renderBoolean: function(val,cell,row) {
        return val == '' || val == 0
            ? '<span style="color:red">' + _('no') + '<span>'
            : '<span style="color:green">' + _('yes') + '<span>';
    }
});
Ext.reg('billing-grid-hosting', Billing.grid.Hosting);