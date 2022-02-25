
$(function() {
  (function(name) {
    var array = Array.from(document.querySelectorAll('.products'));
    var container = $('#pagination-' + name);
    var sources = function () {
      var result = [];
      for (var i = 0; i < array.length; i++) {
        result.push(array[i]);
      }
      console.log("array",result)
      return result;

      // for (var i = 1; i < 196; i++) {
      //   result.push(i);
      // }

      // return result;
    }();
   

    var options = {
      dataSource: sources,
      callback: function (response, pagination) {
        window.console && console.log(response, pagination);

        var dataHtml = '<ul>';

        $.each(response, function (index, item) {
          dataHtml += '<li>'+item + '</li>';
        });

        dataHtml += '</ul>';

        container.prev().html(dataHtml);
      }
    };

    //$.pagination(container, options);

    container.addHook('beforeInit', function () {
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', function () {
      window.console && console.log('beforePageOnClick...');
      //return false
    });
  })('demo1');


  // (function(name) {
  //   var container = $('#pagination-' + name);
  //   container.pagination({
  //     dataSource: '',
  //     locator: 'items',
  //     totalNumber: 120,
  //     pageSize: 20,
  //     ajax: {
  //       beforeSend: function() {
  //         container.prev().html('Loading data from flickr.com ...');
  //       }
  //     },
  //     callback: function(response, pagination) {
  //       window.console && console.log(22, response, pagination);
  //       var dataHtml = '<ul>';

  //       $.each(response, function (index, item) {
  //         dataHtml += '<li>' + item.title + '</li>';
  //       });

  //       dataHtml += '</ul>';

  //       container.prev().html(dataHtml);
  //     }
  //   })
  // })('demo2');
})

