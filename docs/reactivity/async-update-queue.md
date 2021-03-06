---
nav:
  title: 原理
  order: 2
title: 异步更新队列
order: 3
---

# 异步更新队列

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个事件循环 tick 中，Vue 刷新队列并执行实际（已去重）工作。Vue 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate`，如果执行环境不支持，则会采用 `setTimeout(fn, 0)` 代替。

例如，当你设置 `vm.foo = 'new value'`，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环 tick 中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue 通常鼓励开发人员使用**数据驱动**的方式思考，避免直接接触 DOM，但是有时我们必须这样做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 `Vue.nextTick(callback)`。这样回调函数将在 DOM 更新完成后被调用。

Vue 在哪里使用到了宏任务和微任务
Vue 为什么需要宏任务和微任务

---

**参考资料：**

- [Vue.nextTick() 浅析](https://mp.weixin.qq.com/s/tL7mk5yDqC0YcHXTtL9hNw)