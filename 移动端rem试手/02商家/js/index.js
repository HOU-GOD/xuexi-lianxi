
    var fun = function () {
        var html = document.getElementsByTagName('html')[0];
        var width = window.innerWidth;
        var fontSize = (1 / 64) * width;
        html.style.fontSize = fontSize + 'px';
        console.log(123);
    };
    fun();
    window.onresize = function () {
        var html = document.getElementsByTagName('html')[0];
        var width = window.innerWidth;
        var fontSize = (1 / 64) * width;
        html.style.fontSize = fontSize + 'px';
        console.log(123);
    };

