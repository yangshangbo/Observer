# Observer
```shell
npm install observer-watch
```

```javascript
import Observer from './src/Observer.js';

let oberver = new Observer({
    description:{
        name:"Ysb",
        job:"Front end developer",
        favourites:['eating','reading']
    }
})
//单个属性变化监听
observer.addWather(['name'],name=>{
    console.log("name",name)
})
//多个属性变化监听
observer.addWather(['name','job'],(name,job)=>{
    console.log("name,job",name,job)
}
//根据条件触发监听函数
observer.addWather(['favourites'],favourites=>{
    console.log("favourites",favourites)
},function(newObserver,oldObserver,path){
    return newObserver.length > 3
});
//更新监听的对象
observer.update({
    name:"YSB",
    job:"Front end developer",
    favourites:['loving','eating','reading']
});
observer.update({
    name:"YSB---",
    job:"jser",
    favourites:['loving','eating']
});
observer.update({
    name:"YSB---",
    job:"jser",
    favourites:['loving','eating','woking','swimming']
});
```