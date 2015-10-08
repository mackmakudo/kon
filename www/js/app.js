// This is a JavaScript file

$(function() {
  $("#LoginBtn").click(onLoginBtn);
  $("#RegisterBtn").click(onRegisterBtn);
  $("#SaveBtn").click(onSaveBtn);
  $("#EditBtn").click(onEditBtn);
  $("#UpdateBtn").click(onUpdateBtn);
  $("#YesBtn_logout").click(onLogoutBtn);
  $("#YesBtn_delete").click(deleteMemo);
});



var currentMemoID;
var MC = monaca.cloud;

function onRegisterBtn()
{
  var email = $("#reg_email").val();
  var password = $("#reg_password").val();
console.log(MC);
  MC.User.register(email, password)
    .done(function()
    {
      console.log('Registration is success!' + MC.User._oid);
      $.mobile.changePage('#ListPage');
    })
    .fail(function(err)
    {
        console.log('FAILED');
      alert('Registration failed!');
      console.error(JSON.stringify(err));
    });
}

function onLoginBtn()
{
  var email = $("#login_email").val();
  var password = $("#login_password").val();

  MC.User.login(email, password)
    .done(function()
    {
      console.log('Login is success!');
      getMemoList();
      $.mobile.change('#ListPage');
    })
    .fail(function(err)
    {
      console.log(err.message);
      alert('Login failed!');
    });
}

function onLogoutBtn()
{
  MC.User.logout()
    .done(function()
    {
      console.log('Logout is success!');
      $.mobile.changePage('#LoginPage');
    })
    .fail(function(err)
    {
      alert('Logout failed!');
      console.error(JSON.stringify(err));
    });
}

function onSaveBtn()
{
  var title = $("#title").val();
  var content = $("#content").val();
  if (title != '')
  {
    addMemo(title,content);
  }
}


