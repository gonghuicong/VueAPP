<?php
namespace App\Components\Search;

use App\Components\Search\Engines\OpenSearch;
use Illuminate\Database\Capsule\Manager as DB;
/**
 * Class GoodsCommonSearch
 */
class GoodsCommonSearch extends OpenSearch
{
    public $goodsCommonTable = 'goods_common';

    public function __construct()
    {
        $this->setAppName('youju_goods_common_search');
    }

    /**
     * 上传数据
     */
    public function uploadData()
    {

    }

    /**
     * 同步全部数据
     */
    public function syncData()
    {
        $doc = $this->getDoc();
        $this->processGoodsData(function($data) use ($doc) {
            $goodsCommonData = [];
            foreach ($data as $goods) {
                $_data = isset($goodsCommonData[$goods->goods_commonid]) ? $goodsCommonData[$goods->goods_commonid] : [
                    'fields' => [
                        "goods_id" => $goods->goods_commonid,
                        "goods_name" => $goods->goods_name,
                        "gc_name" => $goods->c_gc_name,
                        "goods_jingle" => $goods->goods_jingle,
                        "brand_name" => $goods->brand_name,
                        "cate_1" => $goods->gc_id_1,
                        "cate_2" => $goods->gc_id_2,
                        "cate_3" => $goods->gc_id_3,
                        "brand_id" => $goods->brand_id,
                        "is_book" => $goods->is_book,
                        //                "attr_id",
                        "store_id" => $goods->store_id,
                        //                "area_id",
                        "have_gift" => $goods->have_gift,
                        "goods_promotion_price" => $goods->goods_promotion_price,
                        "goods_click" => $goods->goods_click,
                        "goods_salenum" => $goods->goods_salenum,
                        "contract_1" => $goods->contract_1,
                        "contract_2" => $goods->contract_2,
                        "contract_3" => $goods->contract_3,
                        "contract_4" => $goods->contract_4,
                        "contract_5" => $goods->contract_5,
                        "contract_6" => $goods->contract_6,
                        "contract_7" => $goods->contract_7,
                        "contract_8" => $goods->contract_8,
                        "contract_9" => $goods->contract_9,
                        "contract_10" => $goods->contract_10,
                        "main_material" => $goods->main_material,
                        "gc_id" => $goods->gc_id,
                        'goods_commonid' => $goods->goods_commonid
                    ],
                    'cmd' => 'ADD'
                ];

                $goodsCommonData[$goods->goods_commonid] = $_data;
            }
            $doc->add(array_values($goodsCommonData), $this->goodsCommonTable);
        });
    }

    protected function processGoodsData(\Closure $callback, \Closure $queryCallabck = null)
    {
        $query = DB::table('goods')
            ->join('goods_common', 'goods.goods_commonid', '=', 'goods_common.goods_commonid')
            ->select(
                'goods.*',
                'goods_common.gc_name as c_gc_name',
                'goods_common.goods_body as c_goods_body',
                'goods_common.mobile_body as c_mobile_body'
            );
        if ($queryCallabck !== null) {
            $queryCallabck($query);
        }
        $query->orderBy('goods_id', 'desc')
            ->chunk(100, $callback);
    }
}