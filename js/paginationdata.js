let data=[{
  "id": 1,
  "product_name": "Agano",
  "categorie": "frozen",
  "tags":"new",
  "image": "https://img.freepik.com/free-photo/various-legumes_53876-47070.jpg?w=740",
  "availability": "In stock"
}, {
  "id": 2,
  "product_name": "Atieke frozen",
  "categorie": "frozen",
  "tags":"On sale",
  "image": "https://zippgrocery.com/wp-content/uploads/2020/06/NINA-Frozen-Attieke.png",
  "availability": "Out of stock"
}, {
  "id": 3,
  "product_name": "Palm Oil 5 L",
  "categorie": "Oils",
  "tags":"On sale",
  "image": "https://dl.airtable.com/.attachmentThumbnails/58e669a833bf71176bb472bc9bb2ce8b/3a9558aa",
  "availability": "In stock"
}, {
  "id": 4,
  "product_name": "Shea Butter 300 g",
  "categorie": "Oils",
  "tags":"New",
  "image": "https://rukminim1.flixcart.com/image/416/416/khf63680/soap/c/b/e/1-150-100-pure-shea-butter-raw-unrefined-150gm-great-for-face-original-imafxfuhkcqfq3b5.jpeg?q=70",
  "availability": "Almost out"
}]



$(function() {
  (function(name) {
    var array=data
    // var array = Array.from(document.querySelectorAll('.products'));
    var container = $('#pagination-' + name);
    var sources = function () {
      var result = [];
      for (var i = 0; i < array.length; i++) {
        var product_name= array[i].product_name;
        var image= array[i].categorie;        
        var categorie= array[i].categorie;
        var tags= array[i].tags;
        var availability= array[i].tags;

        result.push(array[i]);
      }
      console.log("array",result)
      console.log("recorriendo",product_name,categorie,tags,availability,image)
      // console.log("data",array[i])
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
          console.log("item",item)
          dataHtml += '<li>'+item.product_name +" "+ item.categorie+" "
    
          '</li>';
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

