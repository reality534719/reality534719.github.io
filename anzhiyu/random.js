var posts=["2024/10/18/日暮/","2024/10/18/最后一个问题/","2024/10/18/带上她的眼睛/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };