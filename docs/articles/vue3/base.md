# Vue3

## 常用 Composition API

### setup

* setup 是 Vue3 中一个新的配置项，值为函数
* 组件中使用的数据、方法等都要配置在 setup 中
* setup 函数两种返回值：
  * 返回一个对象，对象中的属性、方法可在模板中直接使用
  * 返回一个渲染函数，可自定义渲染内容
* setup 函数的参数：
  * props：值为对象，包含了组件外部传进来，且组件内部声明接收的属性
  * context：上下文对象
    * `attrs`：值为对象，包含了组件外部传进来，且组件内部没有声明接收的属性，相当于 `this.$attrs`
    * `slots`：收到的插槽内容，相当于 `this.$slots`
    * `emit`：触发自定义事件的函数，相当于 `this.$emit`

```js
// 没错，渲染函数就叫 h
import { h } from 'vue'

export default {
  name: 'App',
  props: ['title'],
  // Vue3 需要声明自定义事件，虽然不声明也能运行
  emits: ['changeCount'],

  // 返回函数
  /*
  setup() {
    return () => h('h1', 'Hello')
  },
  */

  // 返回对象
  setup(props, context) {
    let name = 'Vue3'
    function sayHello() {}
    function test() {
      context.emit('changeCount', 888)
    }

    return {
      name,
      sayHello,
      test,
    }
  },
}
```

注意：

* setup 在 `beforeCreate` 钩子之前执行，`this` 为 `undefined`
* setup 不要和 Vue2 配置混用。Vue2 的配置可以访问到 setup 的属性方法，反过来不行；如有重名，setup 优先
* setup 不能是 async 函数，因为 async 函数返回的是 promise 不是对象，会导致模板无法访问属性方法
* 若要返回 promise 实例，需要 `Suspense` 和异步组件的配合

### ref 函数

作用：定义响应式数据

语法：`const name = ref(initValue)`

* `ref` 函数返回一个 `RefImpl`(reference implement) 实例对象，全称引用实现的实例对象
* 它包含响应式数据，简称引用对象、reference 对象、ref 对象
* JS 访问数据：`name.value`
* 模板访问数据：`<div>{{ name }}</div>`

注意事项：

* `ref` 函数可以接收基本数据类型和引用数据类型
* 基本类型数据的响应式还是靠 `Object.defineProperty()` 完成
* 对象类型数据使用 ES6 的 Proxy 实现响应式，Vue3 把相关操作封装在 `reactive` 函数中
* 按照之前的办法，对于对象数据，应该遍历每一层的属性添加 `getter` 、`setter`，但 Vue3 使用 Proxy 把内部数据一口气监测了

```html
<h2>{{ name }}</h2>
<p>{{ jobInfo.type }}</p>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    let name = ref('Vue3')
    let jobInfo = ref({
      type: 'frontend',
      salary: '40w',
    })

    function changeInfo() {
      name.value = '鱿鱼丝'
      // jobInfo 是 RefImpl 实例
      // jobInfo.value 是 Proxy 实例对象
      jobInfo.value.salary = '50w'
    }

    return {
      name,
      jobInfo,
      changeInfo,
    }
  },
}
```

### reactive 函数

* 定义引用类型的响应式数据，不可用于 jibenleixingshuju
* `const 代理对象 = reactive(源对象)` 接收对象或数组，返回代理对象（Proxy 的实例对象）
* `reactive` 的响应式是深度的
* 基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据

```js
import { reactive } from 'vue'

export default {
  setup() {
    let person = reactive({
      name: 'Vue3',
      sex: 'unknown',
      info: {
        school: 'Oxford',
        major: 'computer',
      },
    })

    let color = reactive(['red', 'green', 'blue'])

    function changeInfo() {
      person.info.major = 'art'
      color[0] = 'yellow'
    }

    return {
      person,
      color,
      changeInfo,
    }
  },
}
```

### ref VS reactive

定义数据：

* ref 用于定义基本类型数据
* reactive 用于定义对象或数组类型数据
* ref 也可定义对象或数组类型数据，内部通过 reactive 转为代理对象
* 一般使用 reactive 函数，可以把所有数据封装为一个对象

原理：

* ref 通过 `Object.defineProperty()` 实现响应式
* reactive 通过 Proxy 实现响应式，Reflect 操作源对象数据

使用角度：

* ref 定义数据，访问数据需要 `.value`，模板中不需要
* reactive 定义的数据，都不需要

### Vue3 响应式原理

* 通过 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 代理，拦截对对象属性的操作，包括增删改查
* 通过 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 反射，对源对象的属性进行操作

```js
let originPerson = {
  name: 'Lily',
  age: 22,
}

let person = new Proxy(originPerson, {
  // 拦截增加和查询操作
  get(target, prop) {
    // 读取源对象的属性
    return Reflect.get(originPerson, prop)
  },
  // 拦截修改操作
  set(target, prop, value) {
    // 修改源对象的属性
    return Reflect.set(target, prop, value)
  },
  // 拦截删除操作
  deleteProperty(target, prop) {
    // 删除源对象的属性
    return Reflect.deleteProperty(target, prop)
  },
})

console.log(person.name)
person.age = 33
person.sex = 'unknown'
delete person.age
```

### computed 函数

```js
import { reactive, computed } from 'vue'

export default {
  setup() {
    let person = reactive({
      firstName: 'Cai',
      lastName: 'QP',
    })

    // 计算属性简写形式
    person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })

    // 计算属性完整形式
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const arr = value.split('-')
        person.firstName = arr[0]
        person.lastName = arr[1]
      },
    })

    return {
      person,
    }
  },
}
```

### watch 函数

\:::tip Vue3 `watch` 能侦听的东西
A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types
\:::

```js
import { ref, reactive, watch } from 'vue'
...

// 数据
let sum = ref(0)
let msg = ref('hello')
let person = reactive({
  name: 'Vue3',
  age: 18,
  info: {
    job: {
      salary: 40,
    },
  },
})
```

***侦听 ref 定义的响应式数据：***

* 注意不要写成 `sum.value`

```js
// 参数：侦听的数据，回调，其他配置
watch(
  sum,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { immediate: true }
)
```

***侦听多个 ref 定义的响应式数据：***

```js
// newVal，oldVal 也是数组
watch([sum, msg], (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
```

***侦听 ref 定义的对象类型数据：***

```js
// 用 ref 定义对象类型数据
let person = ref({
  name: 'Vue3',
  age: 18,
  info: {
    job: {
      salary: 40,
    },
  },
})

// 开启深度监听才有效，此时监听的是 RefImpl 实例
// Ref 实例的 value 是 Proxy 对象，存的是地址
// 因此无法监听 person 内部属性的变化
watch(person, (newVal, oldVal) => { ... }, { deep:true })

// 这个和 “侦听 reactive 函数直接返回的那一整坨响应式数据” 效果一致
watch(person.value, (newVal, oldVal) => {...})
```

***侦听 reactive 函数直接返回的那一整坨响应式数据：***

* oldVal 是错误的！和 newVal 的值一样
* 强制开启了深度侦听，`deep` 配置不生效！

```js
watch(
  person,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { immediate: true, deep: false }
)
```

***侦听 reactive 定义的响应式数据某个属性：***

* 如果是 `() => person.info` oldVal 也是错误的！
* `() => person.name` oldVal 是正确的，何时对何时错自己琢磨吧！
* 此处没有强制开启深度监听

```js
// 如果监视的属性还是对象，则需要开启深度监听
watch(
  () => person.info,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { deep: true }
)
```

***侦听 reactive 定义的响应式数据多个属性：***

```js
watch(
  [() => person.name, () => person.info],
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { deep: true }
)
```

### watchEffect 函数

* `watchEffect` 不需要指明监听哪个属性，回调里用到哪个属性，就自动监听哪个属性
* `computed` 注重计算的值，即回调函数的返回值，因此必须有返回值
* `watchEffect` 更注重过程，即回调函数的函数体，因此可没有返回值
* `watchEffect` 没有开启深度监听，也不能开启深度监听！
* `watchEffect` 内部自行修改数据，不会重新调用回调，因此不会出现递归调用

```js
// 回调中用到的数据只要发生变化，则直接重新执行回调
watchEffect(() => {
  let total = sum.value
  let p = person
  console.log('watchEffect...')
})
```

### 生命周期

注意和 `vue2.x` 的生命周期图作对比，`beforeDestroy` 和 `destroyed` 变为 `beforeUnmount` 和 `unmounted` 。

Vue3 也提供了 Composition API 形式的生命周期钩子，与 Vue2 中钩子对应关系如下：

* `beforeCreate`===>`setup()`
* `created`=======>`setup()`
* `beforeMount` ===>`onBeforeMount`
* `mounted`=======>`onMounted`
* `beforeUpdate`===>`onBeforeUpdate`
* `updated` =======>`onUpdated`
* `beforeUnmount` ==>`onBeforeUnmount`
* `unmounted` =====>`onUnmounted`

若和配置项生命钩子一起使用，则组合式会比配置项的先执行，如 `onBeforeMount` 先于 `beforeMount`

```js
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

setup(){
  console.log('---setup---')
  let sum = ref(0)

  //通过组合式API的形式去使用生命周期钩子
  onBeforeMount(()=>{
    console.log('---onBeforeMount---')
  })
  onMounted(()=>{
    console.log('---onMounted---')
  })
  onBeforeUpdate(()=>{
    console.log('---onBeforeUpdate---')
  })
  onUpdated(()=>{
    console.log('---onUpdated---')
  })
  onBeforeUnmount(()=>{
    console.log('---onBeforeUnmount---')
  })
  onUnmounted(()=>{
    console.log('---onUnmounted---')
  })

  return {sum}
},
```

### toRef 函数

* 创建一个 RefImpl 实例对象，其 value 值指向另一个对象的某个属性，修改 value 值会修改源对象对应的属性
* 应用：需要把响应式对象的某个属性单独提供给外部使用
* 批量创建：`toRefs`

```js
import {reactive, toRef, toRefs} from 'vue'
...

setup() {
  let person = reactive({
    name: 'Vue3',
    age: 18,
    info: {
      job: {
        salary: 40,
      },
    },
  })

  return {
    // 注意不能写成 ref(person.name)，这和源对象是割裂开的
    name: toRef(person, 'name'),
    salary: toRef(person.info.job, 'salary')
    // or
    ...toRefs(person)
  }
}I
```

### shallowReactive & shallowRef

* `shallowReactive`：只处理对象最外层属性的响应式，即浅响应式
* `shallowRef`：基本数据类型和 `ref` 相同，对象数据不再会调用 `reactive`，因此只有对象引用改变了才是响应式的
* 若一个对象数据，结构很深，但只有最外层属性变化，可用 `shallowReactive`
* 若一个对象数据，属性不会改变，而是使用新对象替换，可用 `shallowRef`

```js
import { shallowReactive, shallowRef } from 'vue'

setup() {
  let person = shallowReactive({
    name: 'Vue3',
    age: 21,
    info: {
      job: {
        salary: 22
      }
    }
  })
  let x = shallowRef({
    y: 0
  })
  return {
    person,
    x
  }
}
```

### readonly & shallowReadonly

* `readonly`: 让一个响应式数据变为只读的（深只读）
* `shallowReadonly`：让一个响应式数据变为只读的（浅只读）
* 应用场景: 不希望数据被修改时，如你用了别人的响应式数据，但是别人不希望你修改时

```js
setup() {
  let sum = ref(0)
  let person = reactive({...})

  sum = readonly(sum)
  person = shallowReadonly(person)

  return {
    sum,
    person
  }
}
```

### toRaw & markRaw

`toRaw`：

* 将一个由 `reactive` 生成的响应式对象转为普通对象
* 用于读取响应式对象对应的普通对象，对该普通对象的操作不会引起页面更新

`markRaw`：

* 标记一个对象，让其不成为响应式对象
* 有些值不应设置为响应式，比如复杂的第三方库
* 当渲染复杂且不变的数据时，跳过响应式转换可提高性能

注意：仅仅让数据变为非响应式的，数据变的依旧变，只是没引起页面更新

```js
setup() {
  function showRawPerson() {
    const p = toRaw(person);
    p.age++;
    console.log(p);
    console.log(person);
  }

  function addCar() {
    let car = { name: "奔驰", price: 40 };
    person.car = markRaw(car);
  }
}
```

### customRef

创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

```html
<input type="text" v-model="keyword" />
<h3>{{ keyword }}</h3>
```

```js
import { ref, customRef } from 'vue'

export default {
  name: 'Demo',
  setup() {
    // 自定义 myRef
    function myRef(value, delay) {
      let timer
      // 通过customRef去实现自定义
      return customRef((track, trigger) => {
        //
        return {
          get() {
            //告诉Vue这个value值是需要被“追踪”的
            track()
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              // 告诉Vue去更新界面
              trigger()
            }, delay)
          },
        }
      })
    }
    let keyword = myRef('hello', 500)
    return {
      keyword,
    }
  },
}
```

### provide / inject

实现祖先组件与后代组件之间通信。

![provide-inject](./images/provide-inject.png)

```js
// 祖先组件传递数据
import { provide, reactive, ref } from 'vue'

setup() {
  let car = reactive({...})
  let sum = ref(0)

  provide('sum', sum)
  provide('car', car)
}
```

```js
// 后代组件接收数据
import { inject } from 'vue'

setup() {
  const car = inject('car')
  const sum = inject('sum')
  return { car, sum }
}
```

### 响应式数据的判断

* `isRef`: 检查一个值是否为一个 `ref` 对象
* `isReactive`: 检查一个对象是否是由 `reactive` 创建的响应式代理
* `isReadonly`: 检查一个对象是否是由 `readonly` 创建的只读代理
* `isProxy`: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
