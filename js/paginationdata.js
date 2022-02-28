let data = [
  {
    id: 1,
    product_name: "Agano",
    categorie: "frozen",
    tags: "new",
    image:
      "https://img.freepik.com/free-photo/various-legumes_53876-47070.jpg?w=740",
    availability: "In stock",
  },
  {
    id: 2,
    product_name: "Atieke frozen",
    categorie: "frozen",
    tags: "On sale",
    image:
      "https://zippgrocery.com/wp-content/uploads/2020/06/NINA-Frozen-Attieke.png",
    availability: "Out of stock",
  },
  {
    id: 3,
    product_name: "Palm Oil 5 L",
    categorie: "Oils",
    tags: "On sale",
    image:
      "https://dl.airtable.com/.attachmentThumbnails/58e669a833bf71176bb472bc9bb2ce8b/3a9558aa",
    availability: "In stock",
  },
  {
    id: 4,
    product_name: "Shea Butter 300 g",
    categorie: "Oils",
    tags: "New",
    image:
      "https://rukminim1.flixcart.com/image/416/416/khf63680/soap/c/b/e/1-150-100-pure-shea-butter-raw-unrefined-150gm-great-for-face-original-imafxfuhkcqfq3b5.jpeg?q=70",
    availability: "Almost out",
  },
  {
    id: 5,
    product_name: "Agano",
    categorie: "frozen",
    tags: "new",
    image:
      "https://img.freepik.com/free-photo/various-legumes_53876-47070.jpg?w=740",
    availability: "In stock",
  },
  {
    id: 6,
    product_name: "Atieke frozen",
    categorie: "frozen",
    tags: "On sale",
    image:
      "https://zippgrocery.com/wp-content/uploads/2020/06/NINA-Frozen-Attieke.png",
    availability: "Out of stock",
  },
  {
    id: 7,
    product_name: "Palm Oil 5 L",
    categorie: "Oils",
    tags: "On sale",
    image:
      "https://dl.airtable.com/.attachmentThumbnails/58e669a833bf71176bb472bc9bb2ce8b/3a9558aa",
    availability: "In stock",
  },
  {
    id: 8,
    product_name: "Shea Butter 300 g",
    categorie: "Oils",
    tags: "New",
    image:
      "https://rukminim1.flixcart.com/image/416/416/khf63680/soap/c/b/e/1-150-100-pure-shea-butter-raw-unrefined-150gm-great-for-face-original-imafxfuhkcqfq3b5.jpeg?q=70",
    availability: "Almost out",
  },
];

$(function () {
  (function (name) {
    var array = data;
    const container_cards = document.getElementById("new_div");
    var container = $("#pagination-" + name);
    // container_cards.innerHTML="";
    var sources = (function () {
      var result = [];
      for (var i = 0; i < array.length; i++) {
        let name_product = array[i].product_name;
        let tag = array[i].tags;
        let categorie = array[i].categorie;
        let availability = array[i].availability;
        let img = array[i].image;
        console.log("recorriendo array", array);
        result.push(array[i]);
      }

      console.log("result", result);
      return result;
    })();
    // });('demo1');
    // function print(name_product, tag, categorie, availability, img) {
    //   const new_column = document.createElement("div");
    //   const new_product = document.createElement("div");
    //   const card_body=document.createElement("div")
    //   const card_picture=document.createElement("picture")
    //   const new_product = document.createElement("h1");
    //   const new_img = document.createElement("img");
    //   const new_tag = document.createElement("h2");
    //   const new_categorie = document.createElement("h2");
    //   const new_availability = document.createElement("h2");
    //   new_column.className = "col-sm-6 col-lg-4 mb-4";
    //   new_product.className = "products card";
    //   new_product.className = "name_product";
    //   card_picture.className="picture_img";
    //   new_img.className = "imagesfilter card-img-top p-3 img_card_products";
    //   new_categorie.className = "label_categorie";
    //   new_tag.className = "label_tags";
    //   new_availability.className = "label_availability";
    //   new_product.innerHTML =name_product;
    //   new_tag.innerHTML = tag;
    //   new_categorie.innerHTML = categorie;
    //   new_availability.innerHTML = availability;
    //   new_img.src = img;
    //   container_cards.appendChild(new_column);
    //   new_column.appendChild(new_product);
    //   new_product.appendChild(card_body);
    //   new_product.appendChild(card_picture);
    //   card_picture.appendChild(new_img)
    //   card_body.appendChild(new_product);
    //   card_body.appendChild(new_tag);
    //   card_body.appendChild(new_categorie);
    //   card_body.appendChild(new_availability);
      // console.log("print", name_product, tag, categorie, availability, img);
    // }

    var options = {
      dataSource: sources,
      callback: function (response, pagination) {
        window.console && console.log("response", response, pagination);
        container_cards.innerHTML = "";
        for (var i = 0; i < response.length; i++) {
          let nameproduct = response[i].product_name;
          let tag = response[i].tags;
          let categorie = response[i].categorie;
          let availability = response[i].availability;
          let img = response[i].image;
          const new_column = document.createElement("div");
          const new_product = document.createElement("div");
          const card_picture=document.createElement("picture")
          const card_body=document.createElement("div")
          const name_product = document.createElement("h5");
          const new_img = document.createElement("img");
          const new_tag = document.createElement("h2");
          const new_categorie = document.createElement("h2");
          const new_availability = document.createElement("h2");
          new_column.className = "col-sm-6 col-lg-4 mb-4";
          new_product.className = "products card";
          card_picture.className="picture_img";
          card_body.className="card-body card_product_1";
          name_product.className = "card-title card_title_product";
          new_img.className = "imagesfilter card-img-top p-3 img_card_products";
          new_categorie.className = "label_categorie";
          new_tag.className = "label_tags";
          new_availability.className = "label_availability";
          new_product.innerHTML =nameproduct;
          new_tag.innerHTML = tag;
          new_categorie.innerHTML = categorie;
          new_availability.innerHTML = availability;
          new_img.src = img;
          container_cards.appendChild(new_column);
          new_column.appendChild(new_product);
          new_product.appendChild(card_picture);
          new_product.appendChild(card_body);  
          card_picture.appendChild(new_img)
          card_body.appendChild(name_product);
          card_body.appendChild(new_tag);
          card_body.appendChild(new_categorie);
          card_body.appendChild(new_availability);
          console.log("paginando", name_product, tag, categorie);
          // print(name_product, tag, categorie, availability, img);
        }
      },
    };

    container.addHook("beforeInit", function () {
      window.console && console.log("beforeInit...");
    });
    container.pagination(options);

    container.addHook("beforePageOnClick", function () {
      window.console && console.log("beforePageOnClick...");
      //return false
    });

    
  })("demo1");

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
});
