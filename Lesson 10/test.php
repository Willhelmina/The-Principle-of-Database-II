<?php

/**
* function��SimpleXML��XML�ļ�
**/
//XML��ǩ����
$study = array();
$xml = simplexml_load_file('test1.tmx');
foreach($xml->children() as $period) {
    $study[] = get_object_vars($period);//��ȡ����ȫ�����ԣ���������
}
echo '<pre>';
print_r($study);
?>