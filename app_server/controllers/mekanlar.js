var express = require("express");


const anaSayfa = function (req, res, next) {
  res.render("anasayfa", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "MekanBul",
      slogan: "Civardaki Mekanları Keşfet!",
    },
    mekanlar: [
      {
        ad: "Starbucks",
        puan: 4,
        adres: "Centrum Garden AVM",
        imkanlar: ["Dünya kahveleri", "Kekler", "Pastalar",],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        puan: 3,
        adres: "Centrum Garden Avm",
        imkanlar: ["Dünya kahveleri", "Kekler", "Pastalar",],
        mesafe: "5km",
      },
      
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi", {
    baslik: "Mekan Bilgisi",
    mekanBaslik: "Starbucks",
    mekanDetay: {
      ad: "Starbucks",
      puan: "4",
      adres: "Centrum Garden AVM",
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "9:00",
          kapanis:"23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi-Pazar",
          acilis: "10:00",
          kapanis: "22:00",
          kapali: false,
        },
      ],
      imkanlar: ["Dünya kahveleri", "Kekler", "Pastalar",],
      koordinatlar: {
        enlem: "37.7",
        boylam: "30.5",
      },
      yorumlar: [
        {
          yorumYapan: "Şevval Badıllı",
          yorumMetni: "Kahveler iyi.",
          tarih: "20 Ekim 2022",
          puan: "4",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};