import Observer from './Observer.js'

var observer = new Observer({
    name:"young"
});
observer.addWatcher(['name'],name=>{
    console.log("name",name)
})


test('set props name ysb',()=>{
    observer.update({
        name:'ysb'
    })
    expect(observer.getObserver().name).toBe('ysb')
})