# TypeScript 

## 基础类型

> 数字number
>
> 字符串string
>
> 布尔boolean
>
> 数组Array<number> (number[])
>
> 对象object
>
> 元组Tuple
>
> 枚举enum
>
> any、void、null、undefined

```typescript
let isDone: boolean = false;
let arr:string[] = ['a','b'];
// let obj: object = {
//   name: 'zhangsan',
//   age: '21'
// };
let obj: {name:string} = {
  name: 'zhangsan'
};
let tupleArr:[string,number] = ['a',1];

```

## 接口

`interface`：描述一个对象的取值规范，不实现具体的对象

* 属性接口

  ```typescript
  interface Course{
      title:string,
      num?:number,
      [propName:string]:any
  }
  let Math: Course = {
      title: 'math',
      num: 100,
      name: '数学'
  }
  
  ```

  

* 函数接口

  ```typescript
  interface myFunc {
      (params1:string): boolean
  }
  let fun:myFunc = function(param:string){
      // param = 'a'
      return true;
  }
  
  ```

* 类接口

  ```typescript
  interface User {
      name: string,
      age?: number,
  }
      
  class user implements User{
      name = 'zhangsan'
  }
  
  console.log(new user())
  
  ```

* 继承

  ```typescript
  interface User {
      name: string,
      age: number
  }
  
  interface Users extends User {
      class: string
  }
  
  let user:Users = {
      name: 'zhangsan',
      age: 13,
      class: 'typescript'
  }
  
  ```

* 类型断言

  ```typescript
  interface User {
      name: string,
      age: number
  }
  
  let user1 = {} as User;
  user1.name = 'zhangsan';
  user1.age = 22;
  
  ```

  