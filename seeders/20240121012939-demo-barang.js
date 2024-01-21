"use strict";

/** @type {import('sequelize-cli').Migration} */

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Barangs",
      [
        {
          id: "RazerKeyboard",
          ItemImg: "../assets/images/komputer-images/1.jpg",
          ItemName: "Razer Keyboard",
          ItemDesc:
            "Keyboard gaming yang solid dari razer untuk memenangkan kepuasan kamu.",
          ItemPrice: (1200).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "MouseGamingLogitech",
          ItemImg: "../assets/images/komputer-images/2.jpg",
          ItemName: "Mouse Gaming Logitech",
          ItemDesc: "Mosue gaming yang sangat ringan dan presisi.",
          ItemPrice: (630).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "Ryzen",
          ItemImg: "../assets/images/komputer-images/3.jpg",
          ItemName: "Ryzen",
          ItemDesc: "Processor dari AMD yang sangat kuat untuk sekarang.",
          ItemPrice: (1540).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "SpeakerJBL",
          ItemImg: "../assets/images/komputer-images/4.jpg",
          ItemName: "Speaker JBL",
          ItemDesc:
            "Mendengar musik, menonton film jadi lebih seru dengan suara JBL.",
          ItemPrice: (132).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "GamepadLogitech",
          ItemImg: "../assets/images/komputer-images/5.png",
          ItemName: "Gamepad Logitech",
          ItemDesc: "Kenyamanan dalam genggaman gamepad dari merk Logitech.",
          ItemPrice: (160).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "MouseLogitech",
          ItemImg: "../assets/images/komputer-images/7.jpg",
          ItemName: "Mouse Logitech",
          ItemDesc:
            "Mouse berkualitas bagus memakai kabel sebagai konektivitas. Memiliki daya tahan yang bagus untuk pemakaian sehari hari.",
          ItemPrice: (54).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "KeyboardLogitech",
          ItemImg: "../assets/images/komputer-images/8.jpg",
          ItemName: "Keyboard Logitech",
          ItemDesc:
            "Ingin mendapatkan sensasi mengetik yang bagus? keyboard dari merk logitech solusinya.",
          ItemPrice: (80).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "FlashdiskSandisk64GB",
          ItemImg: "../assets/images/komputer-images/9.jpg",
          ItemName: "Flashdisk Sandisk 64GB",
          ItemDesc:
            "Penyimpanan data untuk menunjang produktivitas. Sandisk merupakan merk yang sangat dipercaya.",
          ItemPrice: (72).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "KabelHDMIVention",
          ItemImg: "../assets/images/komputer-images/6.jpeg",
          ItemName: "Kabel HDMI Vention",
          ItemDesc:
            "Kabel untuk menghubungkan HDMI dengan menggunakan PVC cable dan Gold Plated.",
          ItemPrice: (49).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "HeadsetVivan",
          ItemImg: "../assets/images/smartphone-images/1.jpeg",
          ItemName: "Headset Vivan",
          ItemDesc:
            "Headset yang sangat terjangkau tetapi memiliki suara dan daya tahan yang cukup untuk kebutuhan.",
          ItemPrice: (44).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "KabelAnker",
          ItemImg: "../assets/images/smartphone-images/2.jpeg",
          ItemName: "Kabel Anker",
          ItemDesc: "Kecepatan yang luar biasa untuk harga yang terjangkau.",
          ItemPrice: (118).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "ChargerAnker",
          ItemImg: "../assets/images/smartphone-images/3.jpeg",
          ItemName: "Charger Anker",
          ItemDesc:
            "Memiliki ampere yang tinggi sehingga kecepatan bertambah drastis.",
          ItemPrice: (135).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "HeadsetRobot",
          ItemImg: "../assets/images/smartphone-images/4.jpeg",
          ItemName: "Headset Robot",
          ItemDesc: "Ringan dan memiliki suara yang jelas.",
          ItemPrice: (79).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "HeadsetVivo",
          ItemImg: "../assets/images/smartphone-images/5.jpg",
          ItemName: "Headset Vivo",
          ItemDesc:
            "Bass yang sangat memukau untuk mendengarkan musik favorit kamu.",
          ItemPrice: (73).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "PrinterEpson",
          ItemImg: "../assets/images/lainnya-images/1.jpg",
          ItemName: "Printer Epson",
          ItemDesc:
            "Kejelasan dan kecepatan dalam mencetak menjadi nilai tambah printer ini.",
          ItemPrice: (2287).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
        {
          id: "KabelPower",
          ItemImg: "../assets/images/lainnya-images/2.jpeg",
          ItemName: "Kabel Power",
          ItemDesc: "Kabel universal untuk menghidupkan device kamu.",
          ItemPrice: (29).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
        {
          id: "RouterTPLink",
          ItemImg: "../assets/images/lainnya-images/3.jpg",
          ItemName: "Router TPLink",
          ItemDesc:
            "Mengeluarkan sinyal yang sangat luas untuk koneksi device yang kamu miliki.",
          ItemPrice: (854).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
        {
          id: uuidv4(),
          ItemImg: "coba",
          ItemName: "coba",
          ItemDesc: "afsd",
          ItemPrice: (1233).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
