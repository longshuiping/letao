$(function(){
//  表单校验功能
  $('#form').bootstrapValidator({
  
  //  指定校验时的图标显示
    feedbackIcons:{
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    
  //  配置字符安
    fields: {
    //  配置对应字段名
      username: {
      //  配置校验规则
        validators: {
        //  非空
          notEmpty: {
            message: "用户名不能为空"
          },
          stringLength:{
            min: 2,
            max: 6,
            message: "用户名必须是2-6位"
          },
          callback:{
            message: "用户名不存在"
          }
          
        }
      },
      password:{
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          
          stringLength:{
            min: 6,
            max: 12,
            message:"密码长度必须在6-12位"
          },
          callback:{
            message:"密码错误"
          }
        }
      }
    }
  });


  $('#form').on("success.form.bv",function(e){
    //阻止默认的提交
    e.preventDefault();
    
    $.ajax({
      type: "post",
      url:"/employee/employeeLogin",
      dataType:"json",
      data:$('#form').serialize(),
      success:function(info){
      //  根据响应回来的数据，进行判断
        if(info.success){
          location.href="index.html";
        }
        
        if(info.error === 1001){
          $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
        }
        
        if(info.error === 1000){
          $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback');
        }
      }
    })
  });


  $('[type = "reset"]').click(function(){
    $('#form').data('bootstrapValidator').resetForm(true);
  })







});