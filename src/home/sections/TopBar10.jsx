import React, { useState, useEffect } from "react";
import { debounce, classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";
import { Button } from "@material-ui/core";

const TopBar10 = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <img src="./assets/images/logoHIT.png" alt="" />
        </div>
        <ul className="navigation">
          <li>
            <ScrollTo to="intro10" onScroll={close}>
              Trang chủ
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="conference1" onScroll={close}>
              Hot
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="leader" onScroll={close}>
              Ban chủ nhiệm
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="schedule1" onScroll={close}>
              Sự kiện
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="pricing3" onScroll={close}>
              Lớp học
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="testimonial9" onScroll={close}>
              Trải nghiệm
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="blog1" onScroll={close}>
              Blog
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="subscription1" onScroll={close}>
              Liên hệ
            </ScrollTo>
          </li>
        </ul>
        <div className="m-auto" />
        <div className="navigation flex">
          <NavLink to="/login" className="mr-1">
            <Button
              className="box-shadow-none px-8 rounded-l hover-bg-primary capitalize"
              variant="outlined"
              color="primary"
            >
              Đăng nhập
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button
              className="box-shadow-none px-8 rounded-r hover-bg-primary capitalize"
              variant="outlined"
              color="primary"
            >
              Đăng ký
            </Button>
          </NavLink>
        </div>
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar10;
