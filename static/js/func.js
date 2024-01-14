function addressResolution(loc) {
    var n1 = loc.length;
    var n2 = loc.indexOf('%'); //将用户ID和文章内容分隔开

    var preTxt = decodeURI(loc.substr(0, n2)); //前缀部分

    var n3 = preTxt.length;
    var n4 = preTxt.indexOf('=');
    userId = decodeURI(preTxt.substr(n4 + 1, n3 - n4));

    var txt = decodeURI(loc.substr(n2 + 1, n1 - n2));
    var n5 = txt.length;
    var n6 = txt.indexOf('=');
    var txt = decodeURI(txt.substr(n6 + 1, n5 - n6));
    var article = txt.split('&');
    return {"userId":userId,"article":article}
}

function blogPublic(userId){
    window.location.href="blog_public.html#id="+userId;
}


function homePage(userId){
    window.location.href="blog_list.html#id="+userId;
}

function edit(userId){
    window.location.href="blog_edit.html#id="+userId;
}


function chatRoom(userId){
    window.location.href="blog_chat.html#id="+userId;
}

function register() {
    window.location.href = "register.html";
}

