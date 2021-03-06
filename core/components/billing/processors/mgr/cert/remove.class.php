<?php

/**
 * Remove an Items
 */
class BillingItemRemoveProcessor extends modObjectProcessor {
	public $objectType = 'SSL';
	public $classKey = 'SSL';
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
			/** @var BillingItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('billing_item_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'BillingItemRemoveProcessor';