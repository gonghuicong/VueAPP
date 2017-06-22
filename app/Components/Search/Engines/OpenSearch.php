<?php
namespace App\Components\Search\Engines;

/**
 * Class OpenSearch
 * @package App\Components\Search
 */
abstract class OpenSearch
{
    private $_appName;

    public function getAppName()
    {
        if ($this->_appName === null) {
            throw new \BadMethodCallException('The Engine appName must be set.');
        }
        return $this->_appName;
    }

    public function setAppName($appName)
    {
        $this->_appName = $appName;
    }

    private $_client;
    /**
     * @return \CloudsearchClient
     */
    public function getClient()
    {
        if ($this->_client === null) {
            $this->setClient(C('open_search.access_id'), C('open_search.access_key'));
        }
        return $this->_client;
    }

    public function setClient(
        $accessKey,
        $accessSecret,
        $options = ['host' => "http://opensearch-cn-hangzhou.aliyuncs.com"],
        $type = 'aliyun'
    ) {
        $this->_client = new \CloudsearchClient($accessKey, $accessSecret, $options, $type);
    }

    private $_docs = [];

    /**
     * @param $appName
     * @return \CloudsearchDoc
     */
    public function getDoc($appName = null)
    {
        $appName = $appName === null ? $this->getAppName() : $appName;
        if (!array_key_exists($appName, $this->_docs)) {
            $this->setDoc($appName);
        }
        return $this->_docs[$appName];
    }

    public function setDoc($appName = null)
    {
        $appName = $appName === null ? $this->getAppName() : $appName;
        $this->_docs[$appName] = new \CloudsearchDoc($appName, $this->getClient());
    }

    /**
     * @param $query
     * @return \CloudsearchSearch
     */
    public function search($query)
    {
        $search = new \CloudsearchSearch($this->getClient());
        $search->addIndex($this->getAppName());
        $search->setQueryString($this->query($query));
        $search->setFormat("json");
        $data = $search->search();
        return json_decode($data, true);
    }

    public function query($query)
    {
        return $query;
    }

}