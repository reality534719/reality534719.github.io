var posts=["2024/10/18/这是一篇新的博文/","2024/10/18/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };