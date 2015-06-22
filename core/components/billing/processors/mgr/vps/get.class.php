<?php

/**
 * Get an Item
 */
class BillingVPSGetProcessor extends modObjectGetProcessor {
	public $objectType = 'Vds';
	public $classKey = 'Vds';
	public $languageTopics = array('billing:default');
	//public $permission = 'view';


	/**
	 * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return mixed
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		return parent::process();
	}

}

return 'BillingVPSGetProcessor';