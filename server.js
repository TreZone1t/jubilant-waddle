$(document).ready(function() {
      // تعريف المصفوفة لتخزين اسم المستخدم وكلمة المرور
      var userCredentials = [
        { username: "01551353638", password: "01000100ahe0" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
      ];

      // التحقق من صحة مدخلات المستخدم عند النقر على زر تسجيل الدخول
      $("#loginButton").click(function() {
        var usernameInput = $("#usernameInput").val();
        var passwordInput = $("#passwordInput").val();
        var isLoggedIn = false;

        for (var i = 0; i < userCredentials.length; i++) {
          var user = userCredentials[i];
          if (user.username === usernameInput && user.password === passwordInput) {
            isLoggedIn = true;
            break;
          }
        }

        // عرض رسالة بناءً على نتيجة التحقق
        if (isLoggedIn) {
          window.location.href = "login.html" ;
        } else {
          alert("فشل تسجيل الدخول. الرجاء التحقق من اسم المستخدم وكلمة المرور.");
        }
      });
    });
function face(){
  window.location.href = "https://m.facebook.com/" ;
} 