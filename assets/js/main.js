
   window.fbAsyncInit = function() {
    FB.init({
      appId      : '166850609652368',
      cookie     : true,
      xfbml      : true,
      version    : 'v16.0'
    });
      
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // Người dùng đã đăng nhập vào tài khoản Facebook
        var accessToken = response.authResponse.accessToken;
        // Thực hiện các tác vụ khác với mã truy cập (access token)
      } else {
        // Người dùng chưa đăng nhập, hiển thị nút đăng nhập Facebook
        var loginButton = document.getElementById('login-button');
        console.log(loginButton);
        loginButton.addEventListener('click', function() {
          FB.login(function(response) {
            if (response.authResponse) {
              var accessToken = response.authResponse.accessToken;
              console.log(loginButton);
              console.log(accessToken);
              if (accessToken) {
                window.location.href = "https://www.facebook.com/edricdang310";
              }
              // Thực hiện các tác vụ khác với mã truy cập (access token)
            } else {
              // Người dùng không đăng nhập, xử lý lỗi
              console.log('bạn chưa đăng nhập tài khoản facebook');
            }
          });
        });
      }
    });
  };
  
  // Tải SDK của Facebook và khởi tạo
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

 