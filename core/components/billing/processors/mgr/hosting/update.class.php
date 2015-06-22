<?php

/**
 * Update an Item
 */
class HostingItemUpdateProcessor extends modObjectUpdateProcessor {
	public $objectType = 'Hosting';
	public $classKey = 'Hosting';
	public $languageTopics = array('billing');
	//public $permission = 'save';

    public function initialize() {

        if($hostingDataJSON = $this->getProperty('data')){
            $hostingData = $this->modx->fromJSON($hostingDataJSON);
            if(is_array($hostingData))
                $this->setProperties($hostingData);
        }
        return parent::initialize();
    }

	/**
	 * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return bool|string
	 */
	public function beforeSave() {
		if (!$this->checkPermissions()) {
			return $this->modx->lexicon('access_denied');
		}
		return true;
	}


	/**
	 * @return bool
	 */
	public function beforeSet() {





		$id = (int)$this->getProperty('id');
		$name = trim($this->getProperty('name'));


		if (empty($id)) {
			return $this->modx->lexicon('billing_item_err_ns');
		}

		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('billing_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name, 'id:!=' => $id))) {
			$this->modx->error->addField('name', $this->modx->lexicon('billing_item_err_ae'));
		}
        $sort = $this->getProperty('sort') == 'true' ? 1 : 0;
        $this->setProperty('sort', $sort);
//        var_dump($this->getProperties());

		return parent::beforeSet();
	}
}

return 'HostingItemUpdateProcessor';
