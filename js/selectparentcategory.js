
$(".selecttype").click(function(e){
    var type = $('.selecttype').val();
    //alert(type);
    
        category_type_ajax(type);
    

});

$("input[name=othertype").change(function() {
    var type = $(this).val();

    category_type_ajax(type);

});

function category_type_ajax(type)
{
    var publicurl = $('#publicurl').data('value');
     //alert(type);
    $.ajax({
        type: 'GET',
        url: publicurl+'/backend/getselectedcategory',
        data:{type:type},
        dataType: 'json',
        success: function(data) {
            if(data.length > 0)  {
                var $select = $('.parentcategory');
                    $select.find('option').remove();
                    $('.parentcategory').append($("<option value='0'>Select Parent</option>"));
                jQuery.each(data, function(index, value){
                    jQuery.each(value, function(index, cat){
                        $('.parentcategory').append($("<option value="+cat['id']+">"+showChild(cat['depth'], cat['name'])+"</option>"));
                    });
                });
            }
            else{
                
            }
        },
        beforeSend : function(){
           //-----loading image
        },
        complete : function(){
           //-----loading image
        }
    });
}

function showChild(depth,name){
    var str = '&nbsp&nbsp';
    padding = str.repeat(depth*2);
    return padding+name;
}

