function login() {
    //获取input数据
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    if (username == "admin" && password == 123456) {
        alert("用户名和密码输入正确，进入下一步验证");
        while (true) {
            var iKun = prompt("请输入\n我叫ikun你记住\n不然无法登录!");
            if (iKun == "我叫ikun你记住") {
                // 本页面打开
                window.location.href = "./main.html";
                // 新的页面打开
                // window.open("./main.html");
                break;
            } else {
                alert('不是真爱粉进入不了，重新输入！');
            }
        }

    } else {
        alert("用户名或密码错误!");
    }
}