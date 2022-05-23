import Destination from "../models/ destination.model.js";

const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});

    return res.json(destinations);
       
  } catch (error) {
    if(error){
      return res.status(500).json({
          error
      })
    }
  }
};

const searchDestination = async (req, res) => {
  const { q } = req.query;
  try {
    let destinations = await Destination.find({title: { $regex: new RegExp(q, "i")}});
    return res.json({
        destinations
    });
  } catch (error) {
    return res.json({
      error
  });
  }
}
   

const postDestination = async (req, res) => {
  const {title, subtitle, imgUrl, services} = req.body;
  try {
      const destination = new Destination({
        title,
        subtitle,
        imgUrl,
        services,
      });

      const destinationDB = await destination.save();

      return res.status(201).json(destinationDB);

  } catch (error) {
      if(error){
          return res.status(500).json({
              error
          });
      };
  }
};

const getTranslation = (req, res) => {
  const {lang} = req.query;
  console.log(lang)
  res.json([{
    lang,
    key:'HOLA',
    value:`HOLA ${lang}`,

  }])
}

export {
    getDestinations,
    searchDestination,
    postDestination,
    getTranslation
}