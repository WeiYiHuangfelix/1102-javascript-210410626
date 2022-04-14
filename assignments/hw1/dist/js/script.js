const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const logos = [   //先建立物件
  {
    img: "img/logos/techcrunch.png",
    img1: "img/logos/business-insider.png",
    img2: "img/logos/the-new-york-times.png",
    img3: "img/logos/forbes.png",
    img4: "img/logos/usa-today.png",
  },
];

const sectionFeatured = document.querySelector('.section-featured'); //抓取ＨＴＭＬ前面的section-featured

window.addEventListener('DOMContentLoaded', () => { //放在ＤＯＭ的物件裡面，會顯示全部的資料
  displayLogosItems(logos);
});

const displayLogosItems = (logosItems) => { //抓取上面logos的值
  let displayLogos = logosItems.map((item) => { //設一個變數，讓陣列轉換字串
    console.log('item', item);

    return `
           <div class="container">
          <h2 class="heading-featured-in">As featured in</h2>
          <div class="logos">
            <img src=${item.img} alt="Techcrunch logo" />
            <img
              src=${item.img1}
              alt="Business Insider logo"
            />
            <img
              src=${item.img2}
              alt="The New York Times logo"
            />
            <img src=${item.img3} alt="Forbes logo" />
            <img src=${item.img4} alt="USA Today logo" />
          </div>
        </div>
      `
  })
  console.log('displayLogos', displayLogos);


  sectionFeatured.innerHTML = displayLogos;//讓陣列轉換字串,顯示出來
}

const imgs = [
  {
    img: "./img/customers/customer-1.jpg",
    img1: "./img/customers/customer-2.jpg",
    img2: "./img/customers/customer-3.jpg",
    img3: "./img/customers/customer-4.jpg",
    img4: "./img/customers/customer-5.jpg",
    img5: "./img/customers/customer-6.jpg",
    span: "250, 000+",
    p: "meals delivered last year!",
  },
];

const deliveredMeals = document.querySelector('.delivered-meals');

window.addEventListener('DOMContentLoaded', () => {
  displayImgsItems(imgs);
});

const displayImgsItems = (imgsItems) => {
  let displayImgs = imgsItems.map((item) => {
    console.log('item', item);

    return `
            <div class="delivered-imgs">
              <img src=${item.img} alt="Customer photo" />
              <img src=${item.img1} alt="Customer photo" />
              <img src=${item.img2} alt="Customer photo" />
              <img src=${item.img3} alt="Customer photo" />
              <img src=${item.img4} alt="Customer photo" />
              <img src=${item.img5} alt="Customer photo" />
            </div>
            <p class="delivered-text">
              <span>${item.span}</span>${item.p}
            </p>
            `
  })
  console.log('displayImgs', displayImgs);

  deliveredMeals.innerHTML = displayImgs;
}


const testimonial = [{
  img: "img/customers/dave.jpg",
  blockquote: "Inexpensive, healthy and great- tasting meals, without even having to order manually! It feels truly magical.",
  p: "Dave Bryson",
  img1: "img/customers/ben.jpg",
  blockquote1: " The AI algorithm is crazy good, it chooses the right meals for me every time.It's amazing not to worry about food anymore!",
  p1: "Ben Hadley",
  img2: "img/customers/steve.jpg",
  blockquote2: " Omnifood is a life saver! I just started a company, so there's no time for cooking.I couldn't live without my daily meals now!",
  p2: "Steve Miller",
  img3: "img/customers/hannah.jpg",
  blockquote3: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
  p3: "Hannah Smith",
},
];

const testimonials = document.querySelector('.testimonials');

window.addEventListener('DOMContentLoaded', () => {
  displayTestimonialItems(testimonial);
});

const displayTestimonialItems = (testimonialItems) => {
  let displayTestimonial = testimonialItems.map((item) => {
    console.log('item', item);

    return `
           <figure class="testimonial">
            <img class="testimonial-img" alt="Photo of customer Dave Bryson" src=${item.img} />
            <blockquote class="testimonial-text">
              ${item.blockquote}
            </blockquote>
            <p class="testimonial-name">&mdash; ${item.p} </p>
          </figure>
                     <figure class="testimonial">
            <img class="testimonial-img" alt="Photo of customer Dave Bryson" src=${item.img1} />
            <blockquote class="testimonial-text">
              ${item.blockquote1}
            </blockquote>
            <p class="testimonial-name">&mdash; ${item.p1} </p>
          </figure>
                     <figure class="testimonial">
            <img class="testimonial-img" alt="Photo of customer Dave Bryson" src=${item.img2} />
            <blockquote class="testimonial-text">
              ${item.blockquote2}
            </blockquote>
            <p class="testimonial-name">&mdash; ${item.p2} </p>
          </figure>
                     <figure class="testimonial">
            <img class="testimonial-img" alt="Photo of customer Dave Bryson" src=${item.img3} />
            <blockquote class="testimonial-text">
              ${item.blockquote3}
            </blockquote>
            <p class="testimonial-name">&mdash; ${item.p3} </p>
          </figure>
          `
  })
  console.log('displayTestimonial', displayTestimonial);


  testimonials.innerHTML = displayTestimonial;
}

const gallerys = [
  {
    img: "img/gallery/gallery-1.jpg",
    img1: "img/gallery/gallery-2.jpg",
    img2: "img/gallery/gallery-3.jpg",
    img3: "img/gallery/gallery-4.jpg",
    img4: "img/gallery/gallery-5.jpg",
    img5: "img/gallery/gallery-6.jpg",
    img6: "img/gallery/gallery-7.jpg",
    img7: "img/gallery/gallery-8.jpg",
    img8: "img/gallery/gallery-9.jpg",
    img9: "img/gallery/gallery-10.jpg",
    img10: "img/gallery/gallery-11.jpg",
    img11: "img/gallery/gallery-12.jpg",
  },
];

const gallery = document.querySelector('.gallery');

window.addEventListener('DOMContentLoaded', () => {
  displayGallerysItems(gallerys);
});

const displayGallerysItems = (gallerysItems) => {
  let displayGallerys = gallerysItems.map((item) => {
    console.log('item', item);

    return `
              <figure class="gallery-item">
            <img
              src=${item.img}
              alt="Photo of beautifully
            arranged food"
            />
            <!-- <figcaption>Caption</figcaption> -->
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img1}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img2}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img3}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img4}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img5}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img6}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img7}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img8}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img9}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img10}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src=${item.img11}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
    `
  })
  console.log('displayGallerys', displayGallerys);


  gallery.innerHTML = displayGallerys;
}