import express from 'express';
const router = express.Router();

const destinos = [
    {
      id: "c39b140d-f010-41ce-be09-e8e41da8e259",
      titulo: "Guatemala",
      subtitulo: "Guatemala",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      servicios: []
    },
    {
      id: "edf599cd-6e85-40f6-8d3f-00a2c5100be6",
      titulo: "Quetzaltenango",
      subtitulo: "Quetzaltenango",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      servicios: []
    },
    {
      id: "da16a673-033f-4fb9-b200-b91f283faf7a",
      titulo: "Retaluleu",
      subtitulo: "Retaluleu",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      servicios: []
    },
    {
      id: "e82fa3c6-f0de-4782-ab0d-e039689511ae",
      titulo: "Izabal",
      subtitulo: "Izabal",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      servicios: []
    },
    {
      id: "22bb775b-a352-47c9-9626-4f102a9b67a0",
      titulo: "Antigua Guatemala",
      subtitulo: "Antigua Guatemala",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      servicios: []
    },
    {
      id: "49935bc9-2546-42e7-871e-bead91dd224c",
      titulo: "Chimaltenango",
      subtitulo: "Chimaltenango",
      imgUrl: "https://placeimg.com/380/230/nature",
      selected: false,
      servicios: []
    },
    {
      id: "985f14de-d625-4297-b9d6-2c408c379082",
      titulo: "Jutiapa",
      subtitulo: "jutiapa",
      urlImg: "https://placeimg.com/380/230/nature",
      selected: false,
      servicios: []
    }
]

router.get('/', (req, res) => {
    res.json(destinos)
});

export default router;