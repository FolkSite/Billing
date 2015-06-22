<?php

/**
 * Create an Item
 */
class BillingSslCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'SSL';
	public $classKey = 'SSL';
	public $languageTopics = array('billing');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {

        if($options = $this->getProperty('options'))
            $this->setProperty('options', implode(',', $options));

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

return 'BillingSslCreateProcessor';