
var KTTreeview = function () {
    var demo3 = function() {
        $('#kt_tree_3').jstree({
                 "checkbox": {
                     "three_state": false
                 },
                 'plugins': ["wholerow", "checkbox", "types"],
                 'core': {
                     "themes" : {
                         "responsive": true
                     },
                     'data': $('#kt_tree_3').data('treedata')
                 },
                 "types" : {
                   
                 },
        });


    }


    return {
        //main function to initiate the module
        init: function () {

          demo3();
        }
    };
}();

jQuery(document).ready(function() {
    KTTreeview.init();
});


jQuery(document).ready(function() {

  $('#kt_tree_3').on('changed.jstree', function (e, data) {
    //alert('tst');
      var i, j ,r = [];
       console.log(data);
      for(i = 0, j = data.selected.length; i < j; i++) {
          r.push(data.instance.get_node(data.selected[i]).id);
      }

      $('textarea[name="category_id"]').remove();
    $('.output_value').append('<textarea style="display:none;" name="category_id">'+r+'</textarea>');

      $('#event_result').html('Selected: ' + r.join(', '));

  })
    // create the instance
});

