import React, { useContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import EnterSection from "./EnterSection";
import BlogSection from "./BlogSection";
import ContactsSection from "./ContactsSection";
import ScheduleSection from "./ScheduleSection";
import Cooperation from "./Cooperation";
import ReviewsSection from "./ReviewsSection";
import Footer from "./Footer";
import type { IHeader, IBlog } from "../../models";
import BlogData from "../data/BlogsData";
import CurrentBlogConstructor from "../atoms/CurrentBlogConstructor";
import { ModalContext } from "../Context/ModalContext";
import ModalWindow from "../molecules/ModalWindow";

function Routing({ menuState, toggler }: IHeader): JSX.Element {
  const { modal, toggle } = useContext(ModalContext);

  return (
    <HashRouter>
      <div className="relative">
        {modal && <ModalWindow toggler={toggle} />}
        <Header menuState={menuState} toggler={toggler} />
        <Routes>
          <Route path="/" element={<EnterSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/contacts" element={<ContactsSection />} />
          <Route path="/schedule" element={<ScheduleSection />} />
          <Route path="/reviews" element={<ReviewsSection />} />
          <Route path="/joinus" element={<Cooperation />} />
          {BlogData.map((item: IBlog) => {
            return (
              <Route
                key={item.id}
                path={"/blog/" + String(item.id)}
                element={<CurrentBlogConstructor blogData={item} />}
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default Routing;
