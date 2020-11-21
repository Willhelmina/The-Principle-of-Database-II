# simpleXML解析XML

    <?php

/**
* function：SimpleXML读XML文件
**/
//XML标签配置
$study = array();
$xml = simplexml_load_file('test1.tmx');
foreach($xml->children() as $period) {
    $study[] = get_object_vars($period);//获取对象全部属性，返回数组
}
echo '<pre>';
print_r($study);
?>
