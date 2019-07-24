(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{201:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"代码编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码编译","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码编译")]),t._v(" "),s("p",[t._v("模版转换成视图的过程")]),t._v(" "),s("p",[t._v("Vue 通过编译将 template 模版转换成渲染函数 render，执行渲染函数就可以得到一个虚拟节点树")]),t._v(" "),s("p",[t._v("在对 Model 进行操作时候，会触发对应 Dep 中的 Watcher 对象。Watcher 对象会调用对应的 update 来修改视图，这个过程主要是将新旧虚拟节点进行差异对比，然后根据对比结果进行 DOM 操作来更新视图。")]),t._v(" "),s("p",[t._v("简单来说，在 Vue 的底层实现上，Vue 将模版编译成虚拟 DOM 渲染函数。结合 Vue 自带的响应系统，在状态改变时，Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("template "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("compile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" render "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("call"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" oldVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" View\n")])])]),s("ul",[s("li",[s("strong",[t._v("渲染函数")]),t._v("：渲染函数是用于生成 Virtual DOM 的。Vue 推荐使用模版来构建我们的应用界面，在底层实现中 Vue 会将模版编译（Compile）成渲染函数（Render Function），当然我们也可以不写模版，直接写渲染函数，以获得更好的控制。")]),t._v(" "),s("li",[t._v("VNode 虚拟节点：它可以代表一个真实的 DOM 节点，可以理解为对真实 DOM 节点的内存映射。通过 createElement 方法能将 VNode 渲染成 DOM 节点。简单来说，VNode 可以理解成节点描述对象，它描述了应该怎样去创建真实的 DOM 节点。")]),t._v(" "),s("li",[t._v("Patch：虚拟 DOM 的核心部分，它可以将 VNode 渲染成真实 DOM，这个过程是对比新旧虚拟节点之间有哪些不同，然后根据对比结果找出需要更新的节点进行更新。这点我们从单词含义可以看出，patch 本身就有打补丁、修补之意，其实际作用是在现有 DOM 树上进行修改来实现更新视图的目的。Vue 的 Virtual DOm Patching 算法是基于 Snabbdom 的实现，并在其基础上坐了很多的调整和改进。")])]),t._v(" "),s("p",[t._v("[https://www.zhihu.com/search?type=content&q=Vue%20Virtual%20DOM](https://www.zhihu.com/search?type=content&q=Vue Virtual DOM)")]),t._v(" "),s("p",[t._v("Vue3.x 提出动静结合的 DOM diff 思想。之所以能够做到预编译优化，是因为 Vue core 可以静态分析 template，在解析模版时，整个 parse 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);