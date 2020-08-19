(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	
	// 创建vue实例
	const vm=new Vue({
		el:'#app',
		data:{
			todoList:[
				{id:1,name:'敲代码',done:false},
				{id:2,name:'八杯水',done:false},
				{id:3,name:'上厕所',done:false}
			],
			todoName:'',
			editId:-1
		},
		
		methods:{
			// 1.添加任务：
			addTodo(e){
				// 键盘弹起时，向列表数组中添加数据
				if(e.keyCode===13){
					// 1-如果文本框为空，节流（不能添加数据，直接结束）
					if(this.todoName.trim().length<=0){
						return
					}
					// 2-处理添加元素的id，保证Id是一个接一个的
					// (两种情况:1.数组为空,添加的id取1;2.数组不为空,取数组最后一个元素的id+1)
					// 数组最后一个元素的id
					let idLast=this.todoList[this.todoList.length-1].id
					const id=this.todoList.length===0?1:idLast+1
					// 3-向数组中添加数据
					this.todoList.push({
						id,
						name:this.todoName,
						done:false
					})
					// 清空输入框
					this.todoName=''
				}
			},
			// 2.删除任务
			deleteTodo(id){
				// 1-拿到当前id
				console.log('触发了删除事件',id)
				// 2-过滤出不是当前id的id项，重新赋给数组
				this.todoList=this.todoList.filter(item=>item.id!=id)
			},
			// 3-编辑任务
			// 显示编辑状态；编辑任务；隐藏编辑状态(给输入框加回车事件)
			showEdit(id){
				console.log('双击')
				this.editId=id
				// 编辑任务：v-model=“item.name”
			},
			hideEdit(){
				this.editId=-1
			}
			
		}
	})

})(window);
