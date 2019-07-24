(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{195:function(t,a,e){t.exports=e.p+"assets/img/mvvm-in-vue.1a679364.jpg"},196:function(t,a,e){t.exports=e.p+"assets/img/reactive.c9e2ac37.png"},209:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"响应式原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应式原理")]),t._v(" "),s("p",[t._v("MVVM 是 Model-View-ViewModel 的简写，即 "),s("strong",[t._v("模型-视图-视图")]),t._v(" 模型。Model 指的是后端传递的数据。View 指的是所看到的页面。ViewModel 是 MVVM 模式的核心，它是连接 View 和 Model 的桥梁。")]),t._v(" "),s("ul",[s("li",[t._v("将 Model 转化成 View，即将后端传递的数据转化成所看到的页面。实现方式：数据绑定")]),t._v(" "),s("li",[t._v("将 View 转化成 Model，即将所看到的页面转化成后端的数据。实现方式：DOM 事件监听")]),t._v(" "),s("li",[t._v("这两个方向都实现的，称之为数据的"),s("strong",[t._v("双向绑定")])])]),t._v(" "),s("p",[t._v("在 MVVM 框架下 View 和 Model 是不能直接通信的，它们通过 ViewModel 来通信，ViewModel 通常要实现一个 Observer 观察者，当数据发生变化，ViewModel 能够监听到数据的这种变化，然后通知对应的视图做自动更新，而当用户操作视图，ViewModel 也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且 MVVM 中的 View 和 ViewModel 可以互相通信。")]),t._v(" "),s("h2",{attrs:{id:"发布订阅模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 发布订阅模式")]),t._v(" "),s("p",[t._v("发布订阅模式主要包含哪些内容呢？")]),t._v(" "),s("ol",[s("li",[t._v("发布函数：发布的时候执行相应的回调")]),t._v(" "),s("li",[t._v("订阅函数：添加订阅者，传入发布时要执行的函数，可能会携额外参数")]),t._v(" "),s("li",[t._v("一个缓存订阅者以及订阅者的回调函数的列表")]),t._v(" "),s("li",[t._v("取消订阅")])]),t._v(" "),s("p",[t._v("JavaScript 中事件模型，在 DOM 节点上绑定事件函数（"),s("code",[t._v("addEventListener")]),t._v("），触发的时候执行就是应用了发布-订阅模式。")]),t._v(" "),s("h2",{attrs:{id:"实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),s("ol",[s("li",[t._v("脏值检查：Angular 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图。")]),t._v(" "),s("li",[t._v("数据劫持：使用 Object.defineProperty 把这些 "),s("code",[t._v("vm.data")]),t._v(" 属性全部转成 setter 和 getter 方法。")])]),t._v(" "),s("p",[t._v("Vue 采用 "),s("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("数据劫持")]),t._v(" 结合 "),s("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("发布者-订阅者模式")]),t._v(" 的方式来实现数据的响应式，通过 Object.defineProperty 来劫持数据的 setter 和 getter，在数据变动时发布消息给订阅者，订阅者收到消息后进行相应的处理。")]),t._v(" "),s("p",[t._v("要实现 MVVM 的双向绑定，就必须要实现以下几点：")]),t._v(" "),s("ol",[s("li",[s("p",[s("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("Compile")]),t._v("："),s("strong",[t._v("指令解析系统")]),t._v("，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数")])]),t._v(" "),s("li",[s("p",[s("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("Observer")]),t._v("："),s("strong",[t._v("数据监听系统")]),t._v("，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者")])]),t._v(" "),s("li",[s("p",[s("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("Dep+Watcher")]),t._v("："),s("strong",[t._v("发布订阅模型")]),t._v("，作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图。")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("**Dep 是发布订阅者模型中的发布者：**get 数据的时候，收集订阅者，触发 Watcher 的依赖收集；set 数据时发布更新，通知 Watcher 。一个 Dep 实例对应一个对象属性或一个被观察的对象，用来收集订阅者和在数据改变时，发布更新。")])]),t._v(" "),s("li",[s("p",[t._v("**Watcher 是发布订阅者模型中的订阅者：**订阅的数据改变时执行相应的回调函数（更新视图或表达式的值）。一个 Watcher 可以更新视图，如 HTML 模板中用到的 "),s("code",[t._v(t._s(t.test))]),t._v("，也可以执行一个 "),s("code",[t._v("$watch")]),t._v(" 监督的表达式的回调函数（Vue 实例中的 watch 项底层是调用的 "),s("code",[t._v("$watch")]),t._v(" 实现的），还可以更新一个计算属性（即 Vue 实例中的 "),s("code",[t._v("computed")]),t._v(" 项）。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(195),alt:"Vue 的 MVVM 实现流程图"}})]),t._v(" "),s("h2",{attrs:{id:"observer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observer","aria-hidden":"true"}},[t._v("#")]),t._v(" Observer")]),t._v(" "),s("blockquote",[s("p",[t._v("Observer 类用于附加到每个被观察的对象。一旦附加后，观察者会将目标对象的 Property 键转换成用于"),s("strong",[t._v("收集依赖")]),t._v("以及"),s("strong",[t._v("调度更新")]),t._v("的 getters 和 setters。")])]),t._v(" "),s("ul",[s("li",[t._v("Observer：附加至每个被观察对象的观察者类，一旦被添加，观察者会将目标对象进行响应式化")]),t._v(" "),s("li",[t._v("observe：用于观察对象的方法，返回 Observer 类的实例对象")])]),t._v(" "),s("p",[t._v("通过向 observe 方法传入需要双向绑定的数据对象。如果观察数据为数组类型，将会修改该该数据类型原型上 7 个原生数组方法，并遍历数组对数组每个成员进行观察，达到监听数组数据变化响应的效果。如果观察数据为对象类型，则使用 walk 方法遍历对象中每对键值，并触发 defineReactive 进行双向绑定。defineReactive 内部的 Object.defineProperty 的 getter 将会实例化一个订阅者类 Dep，并通过闭包的方式将实例对象 dep 用于收集以及缓存订阅者。而其 setter 将会通过 dep.notify 通知所有观察者，进行派发更新。")]),t._v(" "),s("ul",[s("li",[t._v("getter："),s("strong",[t._v("正确地返回属性值")]),t._v("以及"),s("strong",[t._v("收集依赖")])]),t._v(" "),s("li",[t._v("setter："),s("strong",[t._v("正确地为属性设置新值")]),t._v("以及"),s("strong",[t._v("触发相应的依赖")]),t._v("（不存在添加属性的情况，添加属性请用 Vue.set）")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineReactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个字段的 Dep 实例都被用于收集那些属于对应字段的依赖")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" property "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnPropertyDescriptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("property "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configurable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" property "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" setter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" property "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" setter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" childOb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shallow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enumerble"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    configurable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactiveGetter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果原本对象拥有 getter 方法则执行")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" val\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行依赖收集")]),t._v("\n        dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childOb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子对象进行依赖收集")]),t._v("\n          \tchildOb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dependArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactiveSetter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" val\n      \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" newVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("setter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果原本对象拥有 setter 方法则执行 setter")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的值需要重新进行 observe，报纸数据响应式")]),t._v("\n      childOb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shallow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dep 对象通知所有的观察者")]),t._v("\n      dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("关于双向数据绑定以及 Dep、Watcher 实现参考"),s("a",{attrs:{href:"https://github.com/answershuto/learnVue/blob/master/docs/%E4%BB%8E%E6%BA%90%E7%A0%81%E8%A7%92%E5%BA%A6%E5%86%8D%E7%9C%8B%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.MarkDown",target:"_blank",rel:"noopener noreferrer"}},[t._v("《从源码角度再看数据绑定》"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"不足"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不足","aria-hidden":"true"}},[t._v("#")]),t._v(" 不足")]),t._v(" "),s("p",[t._v("使用 Object.defineProperty 定义响应式的数据对象的访问器属性 getter 和 setter 进行数据劫持时存在以下问题。")]),t._v(" "),s("ol",[s("li",[t._v("无法监控对象的增删。")])]),t._v(" "),s("p",[t._v("例如 "),s("code",[t._v("data = { foo: 'bar' }")]),t._v("，如果我们设置 "),s("code",[t._v("data.test = 'test'")]),t._v("，Observer 是无法监控到的，因为在 observe 的时候（初始化 Vue 构造函数的配置对象时），会遍历已有的每个属性（比如 "),s("code",[t._v("foo")]),t._v("），并添加 getter 和 setter，而后面设置的 test 属性并没有设置 getter 和 setter 的机会，因而无法监控变化。同样地，删除对象属性时候，getter 和 setter 会跟着属性一起被删除，拦截不到变化。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("数组的修改")])]),t._v(" "),s("p",[t._v("同样地，数组类型作为最常用的引用数据类型之一，使用 push、pop、shift、unshift、splice 等方法操作数组元素时，数组的 getter 和 setter 同样无法监控到变化。Vue 通过重写 Array 默认方法的方式，在调用这些方法的时候发布更新消息，一般无需关注，但是对于如下两种情况。")]),t._v(" "),s("ul",[s("li",[t._v("当利用索引直接设置某项数组元素时："),s("code",[t._v("vm.items[index] = newValue")])]),t._v(" "),s("li",[t._v("当你修改数组长度时："),s("code",[t._v("vm.items.length = newLength")])])]),t._v(" "),s("p",[t._v("对于这两种情况，可以使用 "),s("code",[t._v("vm.$set")]),t._v(" / "),s("code",[t._v("Vue.set")]),t._v(" 和 "),s("code",[t._v("vm.items.splice(newLength)")]),t._v(" 解决，具体参考"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/list.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方说明"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"订阅者-dep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅者-dep","aria-hidden":"true"}},[t._v("#")]),t._v(" 订阅者 Dep")]),t._v(" "),s("p",[t._v("订阅者 Dep 类，它的主要作用是用于存放 Watcher 观察者对象。主要实现了两件事情：")]),t._v(" "),s("ol",[s("li",[t._v("用 addSub 方法可以在目前 Dep 对象中增加一个 Watcher 的订阅操作")]),t._v(" "),s("li",[t._v("用 notify 方法通知目前 Dep 对象的 subs 中的所有 Watcher 对象触发更新操作")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 用来存放Watcher对象的数组 */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 在subs中添加一个Watcher对象 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 通知所有Watcher对象更新视图 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Dep.target 相当于全局的 Watcher，因为同一时间只有一个 Watcher 被计算。这个静态属性表明了 Vue 当前计算的 Watcher。")]),t._v(" "),s("h2",{attrs:{id:"观察者-watcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#观察者-watcher","aria-hidden":"true"}},[t._v("#")]),t._v(" 观察者 Watcher")]),t._v(" "),s("p",[t._v("Watcher 的四个使用场景：")]),t._v(" "),s("ul",[s("li",[t._v("第一种：观察模版中的数据")]),t._v(" "),s("li",[t._v("第二种：观察创建 Vue 实例时 watch 选项中的数据")]),t._v(" "),s("li",[t._v("第三种：观察创建 Vue 实例时 computed 选项里的数据所以来的数据")]),t._v(" "),s("li",[t._v("第四种：调用 "),s("code",[t._v("$watch")]),t._v(" API 观察的数据或表达式")])]),t._v(" "),s("p",[t._v("Watcher 只有在这四种场景中，Watcher 才会收集依赖，更新模版或表达式，否则，数据变更后无法通知依赖这个数据的模版或表达式：")]),t._v(" "),s("p",[t._v("所以在解决数据改变，模版或表达式没有改变的问题时，可以这么做：")]),t._v(" "),s("p",[t._v("首先仔细看看数据是否在上述四种应用场景中，以便确认数据已经收集依赖；其次查看改变数据的方式，确定这种方式会使数据的改变被拦截。")]),t._v(" "),s("p",[t._v("Watcher 对象通过调用 updateComponent 方法达到更新视图的目的。其实 Watcher 并不实时更新视图，在实例化 Vue 构造函数时默认会将 Watcher 对象存在一个队列中，在下个 Tick 时更新异步更新视图，完成了性能优化。")]),t._v(" "),s("h2",{attrs:{id:"依赖收集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖收集","aria-hidden":"true"}},[t._v("#")]),t._v(" 依赖收集")]),t._v(" "),s("ul",[s("li",[t._v("依赖收集就是订阅数据变化的 watcher 的收集")]),t._v(" "),s("li",[t._v("依赖收集的目的是为了当这些响应式数据发生变化时，触发它们的 setter 的时候，能知道应该通知哪些订阅者去做相应的逻辑处理")])]),t._v(" "),s("p",[t._v("依赖收集的前提条件：")]),t._v(" "),s("ol",[s("li",[t._v("触发 get 方法")]),t._v(" "),s("li",[t._v("新建一个 Watcher 对象")])]),t._v(" "),s("p",[t._v("Vue 构造函类中新建一个 Watcher 对象只需要 "),s("code",[t._v("new")]),t._v(" 出来，这时候 "),s("code",[t._v("Dep.target")]),t._v(" 已经指向这个 new 出来的 Watcher 对象来。而触发 "),s("code",[t._v("get")]),t._v(" 方法也很简单，实际上只要把 render function 进行渲染，那么其中的依赖的对象都会被"),s("strong",[t._v("读取")]),t._v("。")]),t._v(" "),s("p",[t._v("Watcher 原理通过对被观测目标的求值，触发数据的 "),s("code",[t._v("get")]),t._v(" 拦截器函数从而收集依赖，至于被观测目标到底是表达式还是函数或者是其他形式的内容都不重要，重要的是被观测目标能否触发数据属性的 "),s("code",[t._v("get")]),t._v(" 拦截器函数，很显然函数是具备这个能力的。")]),t._v(" "),s("p",[t._v("前面提到 defineReactive 对数据对象进行双向绑定，该函数内部通过闭包方式实例化一个 Dep 类的对象。在对象被「读」的时候，会触发 reactiveGetter 函数把当前的 Watcher 对象（存放在 Dep.target 中）收集到  Dep 类中。之后如果当该对象「写」的时候，则会触发 reactiveSetter 方法，通知 Dep 类调用 notify 来触发所有 Watcher 对象的 update 方法更新视图。")]),t._v(" "),s("p",[t._v("其实依赖收集的过程就是把 Watcher 实例存放到对应的 Dep 对象中去。get 方法可以让当前的 Watcher 对象（Dep.target）存放到它的 subs 中（addSub）方法，在数据变化时，set 会调用 Dep 对象的 notify 方法通知它内部所有 Watcher 对象进行视图更新。")]),t._v(" "),s("p",[t._v("构造函数 Vue 中的 new Watcher 生成当前实例的观察者实例，其中包括着更新视图的方法。当该 Vue 实例读取 data 对象中某个属性时，会把这个 watch 实例添加到该属性的 dep 对象放入 subs 中。当这个属性的值发生变化时，触发 dep 对象的 notify 方法，调用加入到 subs 中的 watcher 对象中的 update 方法，也就是触发视图 notify 方法，调用加入到 subs 中的 watcher 对象中的 update 方法，也就是触发视图更新的方法。")]),t._v(" "),s("p",[t._v("依赖收集发生在 render 阶段，在 Vue 实例进行 $mount 的时候进行。在 render 过程中两个地方触发同一个数据的 getter，则将两个 watcher 都 addSub 到同一个 Dep 类对象中（Object.defineProperty 闭包中 Dep 类对象）。当数据修改时，该 Dep 类对象进行 notify 遍历通知 watcher 进行更新。")]),t._v(" "),s("p",[t._v("派发更新：")]),t._v(" "),s("ul",[s("li",[t._v("派发更新就是当数据发生改变后，通知所有订阅了这个数据变化的 watcher 执行 update")]),t._v(" "),s("li",[t._v("派发更新的过程中会把所有执行 update 的 watcher 推入到队列中，在 nextTick 后执行 flush")])]),t._v(" "),s("p",[t._v("派发更新的核心流程是给对象赋值，触发 set 中派发更新函数。将所有 Watcher 都放入 nextTick 中进行更新，nextTick 回调中执行用户 watch 的回调函数并且渲染组件。")]),t._v(" "),s("p",[t._v("updateComponent 函数的执行会间接触发渲染函数（"),s("code",[t._v("vm.$options.render")]),t._v("）的执行，而渲染函数的执行则会触发数据属性的 "),s("code",[t._v("get")]),t._v(" 拦截器函数，从而将依赖（观察者）收集，当数据变化时重新执行 "),s("code",[t._v("updateComponent")]),t._v(" 函数，这就完成了重新渲染。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[s("img",{attrs:{src:e(196),alt:"Reactive"}})]),t._v(" "),s("p",[t._v("Vue 的响应式原理的核心就是观察这些数据的变化，当这些数据发生变化以后，能通知到对应的观察者以实现相关的逻辑。整个响应式原理最核心的实现就是 Dep 类，这个类实际上是连接数据与观察者的桥梁。")]),t._v(" "),s("p",[t._v("在 Vue 初始化阶段，会对配置对象中定义的不同属性做相关的处理，对于 data 和 props 而言，Vue 会通过 observe 和 defineReactive 等一系列的操作把 data 和 props 的每个属性变成响应式属性，同时它们内部会持有一个 Dep 实例对象，当我们访问这些数据的时候，就会触发 dep 的 depend 方法来收集依赖，这些依赖是当前正在计算的 Watcher，当前在计算的依赖也就是 Dep.target，作为 Subscriber 订阅者用于订阅这些数据的变化。当修改数据的时候，会触发 dep 的 notify 方法通知这些订阅者执行 update 的逻辑。")]),t._v(" "),s("p",[t._v("对于 computed 计算属性而言，实际上会在内部创建一个 computed watcher，每个 computed watcher 会持有一个 Dep 实例，当我们访问 computed 属性的时候，会调用 computed watcher 的 evaluate 方法，这时候会触发其持有的 depend 方法用于收集依赖，同时也会收集到正在计算的 watcher，然后把它计算的 watcher 作为 Dep 的 Subscriber 订阅者收集起来，收集起来的作用就是当计算属性所依赖的值发生变化以后，会触发 computed watcher 重新计算，如果重新计算过程中计算结果变了也会调用 dep 的 notify 方法，然后通知订阅 computed 的订阅者触发相关的更新。")]),t._v(" "),s("p",[t._v("对于 watch 而言，会创建一个 user watcher，可以理解为用户的 watcher，也就是用户自定义的一些 watch，它可以观察 data 的变化，也可以观察 computed 的变化。当这些数据发生变化以后，我们创建的这个 watcher 去观察某个数据或计算属性，让他们发生变化就会通知这个 Dep 然后调用这个 Dep 去遍历所有 user watchers，然后调用它们的 update 方法，然后求值发生新旧值变化就会触发 run 执行用户定义的回调函数（user callback）。")]),t._v(" "),s("p",[t._v("Vue 的渲染都是基于这个响应式系统的。在 Vue 的创建过程中，对于每个组件而言，它都会执行组件的 "),s("code",[t._v("$mount")]),t._v(" 方法，"),s("code",[t._v("$mount")]),t._v(" 执行过程中内部会创建唯一的 render watcher，该 render watcher 会在 render 也就是创建 VNode 过程中会访问到定义的 data、props 或者 computed 等等。render watcher 相当于订阅者，订阅了这些定义的数据的变化，一旦它们发生变化以后，就会触发例如 setter 里的 notify 或者 computed watcher 中的 dep.notify，从而触发 render watcher 的 update，然后执行其 run 方法，执行过程中最终会调用 updateComponent 的方法，该方法会重新进行视图渲染。")]),t._v(" "),s("p",[t._v("这就是整个 Vue 的响应式系统。")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("参考资料：")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/56725739",target:"_blank",rel:"noopener noreferrer"}},[t._v("梳理 Vue 双向绑定的实现原理"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/kidney/p/6052935.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 双向绑定实现原理"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/1032ecd62b3a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 源码解读：Vue 数据响应式原理"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5b4efdd86fb9a04fe0180af2",target:"_blank",rel:"noopener noreferrer"}},[t._v("一步步实现 VUE-MVVM 系列"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5b29b5dff265da59615bff61",target:"_blank",rel:"noopener noreferrer"}},[t._v("结合 Vue 源码谈谈发布-订阅模式"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);