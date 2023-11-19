import i1 from "../images/image-product-1.jpg";
import i2 from "../images/image-product-2.jpg";
import i3 from "../images/image-product-3.jpg";
import i4 from "../images/image-product-4.jpg";


 const products = [
    {
      number:0,
      img1: i1,
      img2: i2,
      img3: i3,
      img4: i4,
      company: "SNEAKER COMPANY",
      title: "Fall Limited Edition Sneakers",
      desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      strike: 250.00,
      off: 50,
      // Use a function to calculate the price
      price: function () {
        return (this.off / 100) * this.strike;
      },
    },
    {
      number:0,
      img1: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/0283522/1.jpg?4357",
      img2: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/0283522/2.jpg?6594",
      img3: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/0283522/3.jpg?7097",
      img4: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/0283522/4.jpg?7097",
      company: "SNEAKER COMPANY",
      title: "ASHION 2023 Men's Casual Shoes",
      desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      strike: 350.00,
      off: 50,
      // Use a function to calculate the price
      price: function () {
        return (this.off / 100) * this.strike;
      },
    },
    {
      number:0,
      img1: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/295531/1.jpg?1832",
      img2: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/295531/2.jpg?1832",
      img3: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/295531/3.jpg?1832",
      img4: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/295531/4.jpg?1832",
      company: "SNEAKER COMPANY",
      title: "Monospec Sneakers - White",
      desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      strike: 150.00,
      off: 50,
      // Use a function to calculate the price
      price: function () {
        return (this.off / 100) * this.strike;
      },
    },
    {
      number:0,
      img1: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/5153201/1.jpg?5028",
      img2: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/5153201/2.jpg?5028",
      img3: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/5153201/3.jpg?5028",
      img4: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/5153201/4.jpg?5028",
      company: "SNEAKER COMPANY",
      title: "2021 Mens Casual Board Shoes Running Sneakers - White/Black",
      desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      strike: 300.00,
      off: 50,
      // Use a function to calculate the price
      price: function () {
        return (this.off / 100) * this.strike;
      },
    },
  ];
  
  export default products;
  