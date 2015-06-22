<?php

/**
 * Class BillingMainController
 */
abstract class BillingMainController extends modExtraManagerController {
	/** @var Billing $Billing */
	public $Billing;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('billing_core_path', null, $this->modx->getOption('core_path') . 'components/billing/');
		require_once $corePath . 'model/billing/billing.class.php';

		$this->Billing = new Billing($this->modx);
		$this->addCss($this->Billing->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->Billing->config['jsUrl'] . 'mgr/billing.js');
		$this->addHtml('
		<script type="text/javascript">
			Billing.config = ' . $this->modx->toJSON($this->Billing->config) . ';
			Billing.config.connector_url = "' . $this->Billing->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('billing:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends BillingMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}