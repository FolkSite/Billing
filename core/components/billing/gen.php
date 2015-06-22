<?php
$obj = 'billing';
$tablePrefix='modx_billing_';

$Model = dirname(__FILE__).'/model/';
$Schema = dirname(__FILE__).'/model/schema/';
shell_exec('rm -rf '.$Model.$obj.'/mysql/*');
shell_exec('rm -rf '.$Schema.'*');
$xml = $Schema.$obj.'.mysql.schema.xml';
/*******************************************************/
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/core/config/config.inc.php';
include_once MODX_CORE_PATH . 'model/modx/modx.class.php';
$modx= new modX();

$modx->setLogLevel(modX::LOG_LEVEL_INFO);
$modx->setLogTarget(XPDO_CLI_MODE ? 'ECHO' : 'HTML');

$modx->loadClass('transport.modPackageBuilder', '', false, true);
$manager = $modx->getManager();
$generator = $manager->getGenerator();
$generator->writeSchema($xml, $obj, 'xPDOObject', $tablePrefix, $restrictPrefix=true  );

$generator->parseSchema($xml, $Model);
print "<br /><br />Выполнено";
?>
