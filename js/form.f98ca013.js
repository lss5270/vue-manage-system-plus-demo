(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{5945:function(e,t,o){"use strict";o.r(t);o("b0c0");var l=o("7a23"),c={class:"crumbs"},n=Object(l["createVNode"])("i",{class:"el-icon-lx-calendar"},null,-1),a=Object(l["createTextVNode"])(" 表单 "),r=Object(l["createTextVNode"])("基本表单"),u={class:"container"},d={class:"form-box"},b=Object(l["createTextVNode"])(" - "),i=Object(l["createTextVNode"])(" 表单提交 "),m=Object(l["createTextVNode"])("取消");function j(e,t,o,j,O,f){var V=Object(l["resolveComponent"])("el-breadcrumb-item"),s=Object(l["resolveComponent"])("el-breadcrumb"),p=Object(l["resolveComponent"])("el-input"),h=Object(l["resolveComponent"])("el-form-item"),N=Object(l["resolveComponent"])("el-option"),v=Object(l["resolveComponent"])("el-select"),C=Object(l["resolveComponent"])("el-date-picker"),x=Object(l["resolveComponent"])("el-col"),w=Object(l["resolveComponent"])("el-time-picker"),_=Object(l["resolveComponent"])("el-cascader"),y=Object(l["resolveComponent"])("el-switch"),g=Object(l["resolveComponent"])("el-checkbox"),k=Object(l["resolveComponent"])("el-checkbox-group"),U=Object(l["resolveComponent"])("el-radio"),T=Object(l["resolveComponent"])("el-radio-group"),B=Object(l["resolveComponent"])("el-button"),z=Object(l["resolveComponent"])("el-form");return Object(l["openBlock"])(),Object(l["createBlock"])("div",null,[Object(l["createVNode"])("div",c,[Object(l["createVNode"])(s,{separator:"/"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(V,null,{default:Object(l["withCtx"])((function(){return[n,a]})),_:1}),Object(l["createVNode"])(V,null,{default:Object(l["withCtx"])((function(){return[r]})),_:1})]})),_:1})]),Object(l["createVNode"])("div",u,[Object(l["createVNode"])("div",d,[Object(l["createVNode"])(z,{ref:"form",model:O.form,"label-width":"80px"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(h,{label:"表单名称"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(p,{modelValue:O.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return O.form.name=e})},null,8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,{label:"选择器"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(v,{modelValue:O.form.region,"onUpdate:modelValue":t[2]||(t[2]=function(e){return O.form.region=e}),placeholder:"请选择"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(N,{key:"bbk",label:"步步高",value:"bbk"}),Object(l["createVNode"])(N,{key:"xtc",label:"小天才",value:"xtc"}),Object(l["createVNode"])(N,{key:"imoo",label:"imoo",value:"imoo"})]})),_:1},8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,{label:"日期时间"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(x,{span:11},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(C,{modelValue:O.form.date1,"onUpdate:modelValue":t[3]||(t[3]=function(e){return O.form.date1=e}),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),Object(l["createVNode"])(x,{class:"line",span:2},{default:Object(l["withCtx"])((function(){return[b]})),_:1}),Object(l["createVNode"])(x,{span:11},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(w,{modelValue:O.form.date2,"onUpdate:modelValue":t[4]||(t[4]=function(e){return O.form.date2=e}),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["createVNode"])(h,{label:"城市级联"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(_,{modelValue:O.form.options,"onUpdate:modelValue":t[5]||(t[5]=function(e){return O.form.options=e}),options:O.options},null,8,["modelValue","options"])]})),_:1}),Object(l["createVNode"])(h,{label:"选择开关"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(y,{modelValue:O.form.delivery,"onUpdate:modelValue":t[6]||(t[6]=function(e){return O.form.delivery=e})},null,8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,{label:"多选框"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(k,{modelValue:O.form.type,"onUpdate:modelValue":t[7]||(t[7]=function(e){return O.form.type=e})},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(g,{label:"步步高",name:"type"}),Object(l["createVNode"])(g,{label:"小天才",name:"type"}),Object(l["createVNode"])(g,{label:"imoo",name:"type"})]})),_:1},8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,{label:"单选框"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(T,{modelValue:O.form.resource,"onUpdate:modelValue":t[8]||(t[8]=function(e){return O.form.resource=e})},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(U,{label:"步步高"}),Object(l["createVNode"])(U,{label:"小天才"}),Object(l["createVNode"])(U,{label:"imoo"})]})),_:1},8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,{label:"文本框"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(p,{modelValue:O.form.desc,"onUpdate:modelValue":t[9]||(t[9]=function(e){return O.form.desc=e}),type:"textarea",rows:"5"},null,8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,null,{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(B,{type:"primary",onClick:f.onSubmit},{default:Object(l["withCtx"])((function(){return[i]})),_:1},8,["onClick"]),Object(l["createVNode"])(B,null,{default:Object(l["withCtx"])((function(){return[m]})),_:1})]})),_:1})]})),_:1},8,["model"])])])])}var O={name:"Baseform",data:function(){return{options:[{value:"guangdong",label:"广东省",children:[{value:"guangzhou",label:"广州市",children:[{value:"tianhe",label:"天河区"},{value:"haizhu",label:"海珠区"}]},{value:"dongguan",label:"东莞市",children:[{value:"changan",label:"长安镇"},{value:"humen",label:"虎门镇"}]}]},{value:"hunan",label:"湖南省",children:[{value:"changsha",label:"长沙市",children:[{value:"yuelu",label:"岳麓区"}]}]}],form:{name:"",region:"",date1:"",date2:"",delivery:!0,type:["步步高"],resource:"小天才",desc:"",options:[]}}},methods:{onSubmit:function(){this.$message.success("提交成功！")}}};O.render=j;t["default"]=O}}]);