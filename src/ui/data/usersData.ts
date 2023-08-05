import type { ITeam } from "../../models";
import userAvatar1 from "../../img/avatars/gigachad.jpg";
import userAvatar2 from "../../img/avatars/drive.jpg";
import userAvatar3 from "../../img/avatars/sigma.jpg";

const users: ITeam[] = [
  {
    id: 1,
    name: "Олег",
    surname: "Шницель",
    profession: "Фотограф",
    avatar: userAvatar1,
    about: "Выпускник Российского государственного университета журналистики им. Джона Джеймисона",
  },
  {
    id: 2,
    name: "Евгений",
    surname: "Гослинг",
    profession: "Водитель",
    avatar: userAvatar2,
    about: "Выпускник Российского государственного университета вождения им. святого Доминика",
  },
  {
    id: 3,
    name: "Макар",
    surname: "Диденко",
    profession: "Гид",
    avatar: userAvatar3,
    about:
      "Выпускник Российского государственного университета туризма и сервиса им. Роберта Э.О. Спидвагона",
  },
];

export default users;
