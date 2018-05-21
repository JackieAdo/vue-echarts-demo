#store
> 状态管理器，其实也可以理解一个全局变量

在开发中，可能有需要对一个对象进行多次传值。

例如：

A.vue
```javascript
<a href="javascript:void(233)" @click="showDialog = false">显示弹窗</a>

<t-dialog :showDialog.sync="showDialog"></t-dialog>
```

dialog.vue
```javascript
<div v-show="showDialog">
这是内容
</div>

...

props:{
  showDialog: false
},
// 监听showDialog的变化
switch:{
  showDialog(value){
    this.$emit('update:showDialog', value);
  }
}
```

上面这种太麻烦了，这个时候如果用vuex就简单很多了



参考文档：
[https://segmentfault.com/a/1190000009404727](https://segmentfault.com/a/1190000009404727)
