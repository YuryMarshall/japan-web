import type { IReviewer } from "../../models";
import reviewer1 from "../../img/avatars/1.jpg";
import reviewer2 from "../../img/avatars/2.jpg";
import reviewer3 from "../../img/avatars/3.jpg";
import reviewer4 from "../../img/avatars/4.jpg";
import reviewer5 from "../../img/avatars/5.jpg";
import reviewer6 from "../../img/avatars/6.jpg";
import reviewer7 from "../../img/avatars/7.jpg";
import reviewer8 from "../../img/avatars/8.jpg";

const reviewers: IReviewer[] = [
  {
    id: 1,
    score: 4,
    name: "Леонид",
    surname: "Декабрио",
    avatar: reviewer1,
    review: "Очень хорошо, не-то что бы прям хорошо, но прям отлично, я в всоторге!!!",
  },
  {
    id: 2,
    score: 5,
    name: "Алина",
    surname: "Ринг",
    avatar: reviewer2,
    review: "Тур захватывает дух и оставляет отличные воспоминания!!!",
  },
  {
    id: 3,
    score: 4,
    name: "Аска",
    surname: "Ленгли",
    avatar: reviewer3,
    review: "Долгий перелет, однако все остальное просто на высочайшем уровне!",
  },
  {
    id: 4,
    score: 5,
    name: "Ольга",
    surname: "Кирова",
    avatar: reviewer4,
    review:
      "Третий год пользуюсь услугами 'ТВОЙ JAPAN' и не перестаю удивляться качеству сервиса и нижайшей стоимостью путевок! ",
  },
  {
    id: 5,
    score: 4,
    name: "Мария",
    surname: "Маркова",
    avatar: reviewer5,
    review: "Если хотите провести незабываемый отдых в Японии, то это турагенство - Ваш выбор!",
  },
  {
    id: 6,
    score: 5,
    name: "Лилия",
    surname: "Кротова",
    avatar: reviewer6,
    review:
      "Водитель - Евгений просто душка, так комфортно в поездке я себя никогда не чувствовала",
  },
  {
    id: 7,
    score: 4,
    name: "Ханна",
    surname: "Сонг",
    avatar: reviewer7,
    review:
      "Низкие цены, качественный сервис, быстрое оформление визы, однако не понравились завтраки в отеле.",
  },
  {
    id: 8,
    score: 4,
    name: "Макс",
    surname: "Мендельсон",
    avatar: reviewer8,
    review: "Хотелось бы увидеть гастротуры, в Японии не впервые и все балгодоря 'ТВОЙ JAPAN'",
  },
];

export default reviewers;
