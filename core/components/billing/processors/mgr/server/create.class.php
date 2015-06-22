<?php

/**
 * Create an Item
 */
class BillingServerCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'Servers';
	public $classKey = 'Servers';
	public $languageTopics = array('billing');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('billing_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('billing_item_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'BillingServerCreateProcessor';