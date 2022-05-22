import Destination from "../models/ destination.model.js";

const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});

    return res.json({
        destinations
    });
       
  } catch (error) {
    if(error){
      return res.status(500).json({
          error
      })
    }
  }
};

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

      return res.status(201).json({
          destination: destinationDB
      });

  } catch (error) {
      if(error){
          return res.status(500).json({
              error
          });
      };
  }
}

export {
    getDestinations,
    postDestination
}