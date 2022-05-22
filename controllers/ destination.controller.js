import Destination from "../models/ destination.model.js";

const destinations = [
    {
      title: "Guatemala",
      subtitle: "Guatemala",
    },
    {
      id: "edf599cd-6e85-40f6-8d3f-00a2c5100be6",
      title: "Quetzaltenango",
      subtitle: "Quetzaltenango",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      services: [],
      votes:0
    },
    {
      id: "da16a673-033f-4fb9-b200-b91f283faf7a",
      title: "Retaluleu",
      subtitle: "Retaluleu",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      services: [],
      votes:0
    },
    {
      id: "e82fa3c6-f0de-4782-ab0d-e039689511ae",
      title: "Izabal",
      subtitle: "Izabal",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      services: [],
      votes:0
    },
    {
      id: "22bb775b-a352-47c9-9626-4f102a9b67a0",
      title: "Antigua Guatemala",
      subtitle: "Antigua Guatemala",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      services: [],
      votes:0
    },
    {
      id: "49935bc9-2546-42e7-871e-bead91dd224c",
      title: "Chimaltenango",
      subtitle: "Chimaltenango",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      services: [],
      votes:0
    },
    {
      id: "985f14de-d625-4297-b9d6-2c408c379082",
      title: "Jutiapa",
      subtitle: "jutiapa",
      urlImg: "https://placeimg.com/380/230/nature",
      selected: false,
      services: [],
      votes:0
    }
]
const getDestinations = (req, res) => {
    res.json(destinations);
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