import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    if (response.status === 200) {
      // gelen istek 200 Ok ise işlemler yapılacak
      //gelen liste consola bastırıldı
      console.log(response);

      const products = response.data; // gelen liste products nesnesine atandı

      //listedeki name değerini toLowerCase ile tüm harfleri küçük yaptık ki büyük küçük harf duyarlılığı olmadan
      //içerisinde şal kelimesi geçen tüm veriler getirilsin
      //.match fonksiyonu içierinden şal kelimesi geçen name objelerini bulur.
      let mappedProducts = products
        .filter((product) => product.name.toLowerCase().match("şal"))
        .map((product) => ({
          //Sadece name ve image bilgilerini içeren json nesnesi türetiyoruz.
          name: product.name,
          image: product.image
        }));

      //filtrelenmiş liste consola bastırıldı
      console.log(mappedProducts);

      //filtrelenmiş liste tek tek gezilerek ekrana bastrıdıldı
      mappedProducts.forEach((element) => {
        // resimlerin ekleneceği div alanı oluşturuldu
        var listArea = document.createElement("div");
        listArea.className = "listArea";

        //resim iin img nesnesi oluşturuldu
        var image = document.createElement("img");
        image.src = element.image;
        image.className = "images";

        //açıklama için p nesnesi oluşturuldu
        var name = document.createElement("p");
        name.innerText = element.name;
        name.className = "description";

        //resim ve açıklama alanları div alanına eklendi
        listArea.append(image);
        listArea.append(name);

        //div alanı index.html dosyasında ki id si app olan nesnenin içine eklendi
        document.getElementById("app").append(listArea);
      });
    } else console.log("Veri Bulunamadı");
  });
