<?php

if (!function_exists('value')) {
    /**
     * 根据变量类型执行响应预处理
     *
     * @param $value
     * @return mixed
     */
    function value($value)
    {
        if (is_callable($value)) {
            return $value();
        }

        return $value;
    }
}
if (!function_exists('env')) {
    /**
     * 获取env定义参数
     *
     * @param $key
     * @param null $default
     * @return bool|string|void
     */
    function env($key, $default = null)
    {
        $value = getenv($key);

        if ($value === false) {
            return $default instanceof Closure ? $default() : $default;
        }

        switch (strtolower($value)) {
            case 'true':
            case '(true)':
                return true;
            case 'false':
            case '(false)':
                return false;
            case 'empty':
            case '(empty)':
                return '';
            case 'null':
            case '(null)':
                return;
        }

        if (strlen($value) > 1 && mb_strpos($value, '"') === 0 && mb_strpos($value, '"') === mb_strlen($value)) {
            return substr($value, 1, -1);
        }

        return $value;
    }
}
