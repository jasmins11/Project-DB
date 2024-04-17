const Anime = require('../models/anime');
const mongoose = require('mongoose');

const anime_index = (req, res) =>{
    Anime.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index.ejs', { anime: result, title: 'All anime' });
    })
    .catch(err => {
      console.log(err);
    });
}
const anime_details= (req,res) =>{
    const id = req.params.id;
  Anime.findById(id)
    .then(result => {
      res.render('details', { anime: result, title: 'Anime Details' });
    })
    .catch(err => {
      console.log(err);
    });
}
const anime_create_get=(req,res)=>{
    res.render('create', { title: 'New Anime' });
}
const anime_create_post=(req,res)=>{
  const anime = new Anime(req.body);

  anime.save()
    .then(result => {
      res.redirect('/anime');
    })
    .catch(err => {
      console.log(err);
    });
}
const anime_delete=(req,res) =>{
    const id = req.params.id;
  
  Anime.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/anime' });
    })
    .catch(err => {
      console.log(err);
    });
}

const anime_update_get = (req, res) => {
  const id = req.params.id;
  Anime.findById(id)
    .then((result) => {
      res.render("update.ejs", {
        anime: result,
        title: "Update Anime",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const anime_update_post = async (req, res) => {
  try {
    const updatedAnime = await Anime.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).redirect("/anime"); // Redirecționează către pagina principală după actualizare
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};


module.exports={
    anime_index,
    anime_details,
    anime_create_get,
    anime_create_post,
    anime_delete,
    anime_update_get,
    anime_update_post
};