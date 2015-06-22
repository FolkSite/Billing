<?php
$xpdo_meta_map['SSL']= array (
  'package' => 'billing',
  'version' => '1.1',
  'table' => 'billing_ssl',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'name' => NULL,
	'vid' => NULL,
    'logo' => NULL,
    'options' => NULL,
    'comments' => NULL,
	'price' => NULL,
    'price1' => NULL,
    'price2' => NULL,
    'price3' => NULL,
    'price4' => NULL,
    'price5' => NULL,
    'idprice' => NULL,
    'active' => 1,
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
	'vid' => 
    array (
      'dbtype' => 'enum',
      'precision' => '\'D\',\'D+O\',\'IDN\',\'EV\',\'WC\',\'SGC\'',
      'phptype' => 'string',
      'null' => false,
      'default' => 'D',
    ),
    'logo' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'options' => 
    array (
      'dbtype' => 'set',
      'phptype' => 'string',
      'null' => false,
    ),
    'comments' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
    ),
	'price' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'price1' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'price2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'price3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'price4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'price5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'idprice' => 
    array (
      'dbtype' => 'int',
      'precision' => '11',
      'phptype' => 'integer',
      'null' => false,
    ),
    'active' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '4',
      'phptype' => 'integer',
      'null' => false,
      'default' => 1,
    ),
  ),
);
