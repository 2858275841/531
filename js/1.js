window.addEventListener('load', function() {
    var ipt = document.querySelector("input");
    ipt.addEventListener('focus', function() {
        this.value = '';
    })
    ipt.addEventListener('blur', function() {
        this.value = "请输入搜素内容";
    })

    var user_img = document.querySelector("#user_img");
    var user_main = document.querySelector(".user_Name");
    user_img.addEventListener('mouseover', function() {
        user_main.style.display = "block";
    })
    user_img.addEventListener('mouseout', function() {
        user_main.style.display = "none";
    })


    // var a = document.querySelectorAll('.nav_main_a');s
    var li = document.querySelectorAll('li');
    //排他思想
    var liuYan = document.querySelectorAll('.liuYan');
    // console.log(liuYan);
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute('index', i);

        li[i].addEventListener('click', function() {
            for (var i = 0; i < li.length; i++) {
                li[i].className = 'special2';
            }
            this.className = 'special';

            var index = this.getAttribute('index');
            // console.log(index);
            for (var i = 0; i < liuYan.length; i++) {
                //需要隐藏的主模块
                liuYan[i].style.display = "none";

            }
            //点击留言显示留言div
            if (index == 3) {
                liuYan[0].style.display = "block";
            }
        })
    }
    //编辑区
    var textarea = document.querySelector('textarea');
    textarea.addEventListener('focus', function() {
        this.innerHTML = '';
    })
    textarea.addEventListener('blur', function() {
        this.innerHTML = "请输入你要发布的内容";
    })
});