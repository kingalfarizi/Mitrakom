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
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/24503cdd7f971b90033f7f528343ccdf/detailed",
          ItemName: "Razer Keyboard",
          ItemDesc:
            "Keyboard gaming yang solid dari razer untuk memenangkan kepuasan kamu.",
          ItemPrice: (1200).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "MouseGamingLogitech",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/a6f5e5de753c496b975c3ccf15009656/detailed",
          ItemName: "Mouse Gaming Logitech",
          ItemDesc: "Mosue gaming yang sangat ringan dan presisi.",
          ItemPrice: (630).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "Ryzen",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/ffd38816ca31bdef05810dbc1c6c3306/detailed",
          ItemName: "Ryzen",
          ItemDesc: "Processor dari AMD yang sangat kuat untuk sekarang.",
          ItemPrice: (1540).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "SpeakerJBL",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/878567187af75a76e7376d95a6ded6ae/detailed",
          ItemName: "Speaker JBL",
          ItemDesc:
            "Mendengar musik, menonton film jadi lebih seru dengan suara JBL.",
          ItemPrice: (132).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "GamepadLogitech",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/438b8f0489f2e1ad952e247e7fe4980d/detailed",
          ItemName: "Gamepad Logitech",
          ItemDesc: "Kenyamanan dalam genggaman gamepad dari merk Logitech.",
          ItemPrice: (160).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "MouseLogitech",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/a04fc4efbf572bcdd9f98daa53caf0dd/detailed",
          ItemName: "Mouse Logitech",
          ItemDesc:
            "Mouse berkualitas bagus memakai kabel sebagai konektivitas. Memiliki daya tahan yang bagus untuk pemakaian sehari hari.",
          ItemPrice: (54).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "KeyboardLogitech",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/6298b24ef0eb5df65c7e9f4186df7597/detailed",
          ItemName: "Keyboard Logitech",
          ItemDesc:
            "Ingin mendapatkan sensasi mengetik yang bagus? keyboard dari merk logitech solusinya.",
          ItemPrice: (80).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "FlashdiskSandisk64GB",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/0fd47a6d22bc837ba322aee6d4efc9f5/detailed",
          ItemName: "Flashdisk Sandisk 64GB",
          ItemDesc:
            "Penyimpanan data untuk menunjang produktivitas. Sandisk merupakan merk yang sangat dipercaya.",
          ItemPrice: (72).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "KabelHDMIVention",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/4554159774bc40afbfeb22319784674a/detailed",
          ItemName: "Kabel HDMI Vention",
          ItemDesc:
            "Kabel untuk menghubungkan HDMI dengan menggunakan PVC cable dan Gold Plated.",
          ItemPrice: (49).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "HeadsetVivan",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/40a827cdb132526494a8bb6b59b0f22c/detailed",
          ItemName: "Headset Vivan",
          ItemDesc:
            "Headset yang sangat terjangkau tetapi memiliki suara dan daya tahan yang cukup untuk kebutuhan.",
          ItemPrice: (44).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "KabelAnker",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/97ccb01043dc7467eba8349b5c2c37c7/detailed",
          ItemName: "Kabel Anker",
          ItemDesc: "Kecepatan yang luar biasa untuk harga yang terjangkau.",
          ItemPrice: (118).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "ChargerAnker",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/aacc6ecb66b3a177e79e0e4e0867ef00/detailed",
          ItemName: "Charger Anker",
          ItemDesc:
            "Memiliki ampere yang tinggi sehingga kecepatan bertambah drastis.",
          ItemPrice: (135).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "HeadsetRobot",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/58b87cdb4173e9fb772a3d4b14293515/detailed",
          ItemName: "Headset Robot",
          ItemDesc: "Ringan dan memiliki suara yang jelas.",
          ItemPrice: (79).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "HeadsetVivo",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/bb630b0c4490b275aa8a159c89ffd7dd/detailed",
          ItemName: "Headset Vivo",
          ItemDesc:
            "Bass yang sangat memukau untuk mendengarkan musik favorit kamu.",
          ItemPrice: (73).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "PrinterEpson",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/f2cc683817f3ffa7065db2e88a400473/detailed",
          ItemName: "Printer Epson",
          ItemDesc:
            "Kejelasan dan kecepatan dalam mencetak menjadi nilai tambah printer ini.",
          ItemPrice: (2287).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
        {
          id: "KabelPower",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/73b8014bdf95e11ac4bec7a2abf6291a/detailed",
          ItemName: "Kabel Power",
          ItemDesc: "Kabel universal untuk menghidupkan device kamu.",
          ItemPrice: (29).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
        {
          id: "RouterTPLink",
          ItemImg:
            "https://res-console.cloudinary.com/dsz678mwx/media_explorer_thumbnails/2b8beb92b08a38374fcca1144c090c5b/detailed",
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
