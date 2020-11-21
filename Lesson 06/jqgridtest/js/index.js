$(function(){
	//页面加载完成之后执行
	pageInit();
});
$.jgrid.defaults.width = 780;
function pageInit(){
	//创建jqGrid组件
	jQuery("#list2").jqGrid(
			{
				url : 'data/JSONData.json',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [ 'Segment_id', 'ST', 'TT', 'Status'],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'Segment_id',index : 'id',width : 200,align:"center"}, 
				             {name : 'ST',index : 'chinese',width : 1000,sortable : false}, 
				             {name : 'TT',index : 'english',width : 1000,sortable : false}, 
				             {name : 'Status',index : 'comments',width : 300,sortable : false,align:"center"} 
				           ],
				rowNum : 6,//一页显示多少条
				rowList : [ 1, 2, 3 ],//可供用户选择一页显示多少条
				pager : '#pager2',//表格页脚的占位符(一般是div)的id
				sortname : 'id',//初始化的时候排序的字段
				sortorder : "asc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				width: 980,
				heigth: 500,
				caption : "MeowCAT Editor"//表格的标题名字
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});
}
