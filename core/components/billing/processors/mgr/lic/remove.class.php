<?php

/**
 * Remove an Items
 */
class BillingLicRemoveProcessor extends modObjectProcessor {
	public $objectType = 'Licens';
	public $classKey = 'Licens';
	public $languageTopics = array('billing');
	//public $permission = 'remove';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('billing_item_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var BillingLic $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('billing_item_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'BillingLicRemoveProcessor';