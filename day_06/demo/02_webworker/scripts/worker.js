//完成繁重的计算工作
this.addEventListener('message', function (e) {

    //worker线程的计算过程
    var sum = 0;
    //e.data代表主线程传递的数据
    for (var n = 0; n <= e.data; n++ ){
        sum += n;
    }

    //将计算的结果再以消息的形式通过主线程
    this.postMessage(sum);
});