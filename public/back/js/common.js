//禁用进度条
NProgress.configure({ showSpinner:false});

$(document).ajaxStart(function(){
  NProgress.start();
});
$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500);
});

//公共的二级菜单切换功能
$(function(){
  $('.category').click(function(){
    $('.lt_aside .child').stop().slideToggle();
  });
  
//  点击菜单按钮，进行切换菜单
  $('.icon_menu').click(function(){
    $('.lt_aside').toggleClass('hidemenu');
    $('.lt_topbar').toggleClass('hidemenu');
    $('.lt_main').toggleClass('hidemenu');
  });
  
//  点击 icon_logout 应该显示模态框
  $('.icon_logout').click(function(){
    $('#logoutModal').modal('show');
  });
  
//  点击模态框退出按钮，实现退出
  $('#logoutBtn').click(function(){
    $.ajax({
      type:"get",
      url:'/employee/employeeLogout',
      dataType:'json',
      success:function(info){
        if(info.success){
          location.href = "login.html";
        }
      }
    })
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})