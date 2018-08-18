'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*************************************************************
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      @author 杨尚波
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      @email meiseayoung@163.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      @description 为对象的属性变更添加监听函数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      @date 2018/07/30
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      @version 0.0.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      let oberver = new Observer({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		description:{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     			name:"Ysb",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     			job:"Front end developer",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     			favourites:['eating','reading']
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      //单个属性变化监听
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      observer.addWather(['name'],funtion(name){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		console.log("name",name)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      //多个属性变化监听
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      observer.addWather(['name','job'],funtion(name,job){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		console.log("name,job",name,job)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      //根据条件触发监听函数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      observer.addWather(['favourites'],funtion(favourites){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *************************************************************/


var _cloneDeep2 = require('lodash/cloneDeep.js');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _isEqual2 = require('lodash/isEqual.js');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _get2 = require('lodash/get.js');

var _get3 = _interopRequireDefault(_get2);

var _set2 = require('lodash/set.js');

var _set3 = _interopRequireDefault(_set2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var toString = Object.prototype.toString;
var observerChache = {}; //需要被监听的对象
var propsWatchers = []; //监听列表事件
var propsWatchFns = {}; //监听属性对象的监听事件
// let lastFns = []      //最近一次update的监听函数
var lastFns = new Map(); //最近一次update的监听函数


var Observer = function () {
    _createClass(Observer, null, [{
        key: '_get',

        /**
         * @description 根据对象下的属性路径获取对应的值
         * @param  {Object} object 对象
         * @param  {String} path   属性路径 如: a.b.c[0]
         * @return {Any}        对象下的属性路径获取对应的值
         */
        value: function _get(object, path) {
            return (0, _get3.default)(object, path);
        }
        /**
         * @description 设置对象指定属性路径的值
         * @param  {Object} object 对象
         * @param  {String} path   属性路径 如: a.b.c[0]
         * @param  {Any} value     要设置属性的值
         * @return {undefined}     无返回值
         */

    }, {
        key: '_set',
        value: function _set(object, path, value) {
            (0, _set3.default)(object, path, value);
        }
        /**
         * @description 判断两个对象是否相等
         * @param  {Any}  o1  比较值
         * @param  {Any}  o2  比较目标值
         * @return {Boolean}  返回是否相等布尔值
         */

    }, {
        key: '_isEqual',
        value: function _isEqual(o1, o2) {
            return (0, _isEqual3.default)(o1, o2);
        }
        /**
         * @description 深拷贝对象
         * @param  {Object} object 拷贝的对象
         * @return {Object}        拷贝出来的对象
         */

    }, {
        key: '_cloneDeep',
        value: function _cloneDeep(object) {
            return (0, _cloneDeep3.default)(object);
        }
        /**
         * @description 初始化
         * @param {Object} observer 被监听的对象
         * @return {undefined} 无返回值
         */

    }]);

    function Observer(observer) {
        _classCallCheck(this, Observer);

        if (!this._checkObserver(observer)) {
            return;
        }
        observerChache = observer;
        this._collectionDependence();
    }
    /**
     * @description 设置被监听对象
     * @param {Object} observer 监听对象
     * @return {undefined} 无返回值
     */


    _createClass(Observer, [{
        key: 'setObserver',
        value: function setObserver(observer) {
            observerChache = observer;
        }
        /**
         * @description 获取监听对象
         * @return {Object} 被监听的对象
         */

    }, {
        key: 'getObserver',
        value: function getObserver() {
            return (0, _cloneDeep3.default)(observerChache);
        }
    }, {
        key: '_checkObserver',
        value: function _checkObserver(observer) {
            if (toString.call(observer) === "[object Object]") {
                observerChache = observer;
                return true;
            } else {
                throw Error("只接受对象形式的监听对象,请检查传入的参数是否为对象！");
                return false;
            }
        }
        /**
         * @description 收集依赖
         * @return {undefined} 无返回值
         */

    }, {
        key: '_collectionDependence',
        value: function _collectionDependence() {
            propsWatchFns = propsWatchers.map(function (watcher, index) {
                return watcher.dependences;
            }).reduce(function (p, n, i, a) {
                n.forEach(function (item) {
                    if (p[item] === undefined) {
                        p[item] = [propsWatchers[i]];
                    } else {
                        p[item].push(propsWatchers[i]);
                    }
                });
                return p;
            }, {});
        }
        /**
         * @description 设置最近需要执行的函数 要多次执行的函数标记+1 用于在execute时只执行相同的函数引用一次
         * @return {undefined} 无返回值
         */

    }, {
        key: '_setLastFns',
        value: function _setLastFns() {
            console.time("_setLastFns");
            for (var i = 0; i < propsWatchers.length; i++) {
                if (lastFns.get(propsWatchers[i].fn) === undefined) {
                    lastFns.set(propsWatchers[i].fn, 1);
                } else {
                    var count = lastFns.get(propsWatchers[i].fn);
                    lastFns.set(propsWatchers[i].fn, count + 1);
                }
            }
            console.timeEnd("_setLastFns");
        }
        /**
         * @description 脏值检测
         * @param  {Object} value  新值
         * @param  {Object} oldVal 旧值
         * @return {undefined}     无返回值
         */

    }, {
        key: '_diff',
        value: function _diff(value) {
            var _this = this;

            this._setLastFns();
            var oldVal = this.getObserver();
            //搜集发生变化的依赖
            var needUpdateProps = [];
            Object.keys(propsWatchFns).forEach(function (prop) {
                var newValue = (0, _get3.default)(value, prop);
                var oldValue = (0, _get3.default)(oldVal, prop);
                if (!(0, _isEqual3.default)(newValue, oldValue)) {
                    needUpdateProps.push(prop);
                }
            });
            this.setObserver(value);
            needUpdateProps.forEach(function (prop) {
                _this.execute(prop, value, oldVal);
            });
        }
        /**
         * @description 添加监听
         * @param {Array<string>} dependences 依赖被监听的对象的属性列表
         * @param {Function} fn 监听函数
         * @param {?Function|Boolean} shouldExecuteWatcher (可选)是否执行监听函数
         * @param {undefined} fn 无返回值
         */

    }, {
        key: 'addWatcher',
        value: function addWatcher(dependences, fn, shouldExecuteWatcher) {
            propsWatchers.push({
                dependences: dependences,
                fn: fn,
                shouldExecuteWatcher: shouldExecuteWatcher
            });
            this._collectionDependence();
        }
        /**
         * @description  通过函数引用移除监听
         * @param  {Function} fn 函数引用
         * @return {undefined}   无返回值
         */

    }, {
        key: 'removeWatcherByFn',
        value: function removeWatcherByFn(fn) {
            for (var i = 0; i < propsWatchers.length; i++) {
                if (propsWatchers[i].fn === fn) {
                    propsWatchers.splice(i, 1);
                    this._collectionDependence();
                    break;
                }
            }
        }
        /**
         * @description 通过监听属性移除监听
         * @param  {String} prop 被监听对象的属性
         * @return {undefined}   无返回值
         */

    }, {
        key: 'removeWatcherByProp',
        value: function removeWatcherByProp(prop) {
            for (var i = propsWatchers.length - 1; i >= 0; i--) {
                if (propsWatchers[i].dependences.some(function (dependence) {
                    return dependence === prop;
                })) {
                    propsWatchers.splice(i, 1);
                }
            }
            this._collectionDependence();
        }
        /**
         * @description 执行依赖对应的函数
         * @param  {String} dependence 依赖属性
         * @param  {?Object} newObserver (可选)新的监听对象
         * @param  {?Object} oldObserver (可选)旧的监听对象
         * @return {undefined}  无返回值
         */

    }, {
        key: 'execute',
        value: function execute(dependence, newObserver, oldObserver) {
            if (propsWatchFns[dependence] && toString.call(propsWatchFns[dependence]) === "[object Array]") {
                propsWatchFns[dependence].forEach(function (fn) {
                    var fndependences = fn.dependences.map(function (arg) {
                        return (0, _get3.default)(observerChache, arg);
                    });
                    var count = lastFns.get(fn.fn);
                    if (count >= 1) {
                        lastFns.set(fn.fn, 0);
                        new Promise(function (resolve, reject) {
                            var result = true;
                            if (fn.shouldExecuteWatcher === undefined) {
                                result = true;
                            }if (typeof fn.shouldExecuteWatcher === 'boolean') {
                                result = fn.shouldExecuteWatcher;
                            } else if (typeof fn.shouldExecuteWatcher === 'function') {
                                result = fn.shouldExecuteWatcher(newObserver, oldObserver, fn.dependences);
                            } else {
                                result = true;
                            }
                            if (result === true) {
                                resolve(fn, fndependences);
                            }
                        }).then(function () {
                            fn.fn.apply(fn, _toConsumableArray(fndependences));
                        });
                    } else {}
                });
            }
        }
        /**
         * @description 更新监听对象
         * @param {Object} observer 新的监听对象
         * @return {undefined} 无返回值
         **/

    }, {
        key: 'update',
        value: function update(observer) {
            console.time("执行更新时长");
            lastFns.clear();
            this._diff(observer);
            lastFns.clear();
            console.timeEnd("执行更新时长");
        }
    }]);

    return Observer;
}();

exports.default = Observer;