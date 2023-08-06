import type { ICompanyData } from "../../models";
import vkLogo from "../../img/social-ico/vk.png";
import tgLogo from "../../img/social-ico/telegram.png";
import fbLogo from "../../img/social-ico/facebook.png";
import gmLogo from "../../img/social-ico/gmail.png";
import whAppLogo from "../../img/social-ico/whatsapp.png";
import instLogo from "../../img/social-ico/instargam.png";

const CompanyData: ICompanyData = {
  about:
    "Твой Japan — крупнейшая сеть турагенств в России и странах СНГ. Наша миссия — Ваш комфортный отдых в Японии, качественный сервис, незабываемые и приятные впечатления.",
  adress: {
    city: "Москва",
    street: "Новокузнецкая",
    house: 39,
    office: 16,
    way: "Оффис в 2-х минутах от метро Павелецкая. Последний вагон из центра, 1 выход из метро до коричневой железной двери рядом с 'Пятёрочка'. 2 этаж, направо до конца, офис №16",
  },
  googlemap:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.506809134565!2d37.63216789473356!3d55.7323227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b1c2d33f201%3A0xb3437deb78ef80d6!2z0YPQuy4g0J3QvtCy0L7QutGD0LfQvdC10YbQutCw0Y8sIDM5LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE1MDU0!5e0!3m2!1sru!2s!4v1689938566374!5m2!1sru!2s",
  telephone: "+7-(999)-999-99-99",
  email: {
    image: gmLogo,
    link: "mailto:emailtemplate@email.jp",
    text: "emailtemplate@email.jp",
  },
  vk: {
    image: vkLogo,
    link: "https://vk.com",
    text: "https://vk.com",
  },
  telegram: {
    image: tgLogo,
    link: "tg://resolve?domain=<user>",
    text: "+7-(999)-999-99-99",
  },
  whatsapp: {
    image: whAppLogo,
    link: "https://wa.me/79999999999",
    text: "+7-(999)-999-99-99",
  },
  facebook: {
    image: fbLogo,
    link: "https://facebook.com",
    text: "https://facebook.com",
  },
  instargam: {
    image: instLogo,
    link: "https://instagram.com",
    text: "https://instagram.com",
  },
};

export default CompanyData;
