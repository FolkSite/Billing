<?php
/** @noinspection PhpIncludeInspection */
require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var Billing $Billing */
$Billing = $modx->getService('billing', 'Billing', $modx->getOption('billing_core_path', null, $modx->getOption('core_path') . 'components/billing/') . 'model/billing/');
$modx->lexicon->load('billing:default');

// handle request
$corePath = $modx->getOption('billing_core_path', null, $modx->getOption('core_path') . 'components/billing/');
$path = $modx->getOption('processorsPath', $Billing->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));