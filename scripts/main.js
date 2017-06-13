requirejs(["helper/util", "helper/test"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    console.log('这应该是一个回调函数，加载util成功')
    console.log('requirjs第一个参数是数组，加载test.js测试一下')
    document.write('hello world')
});