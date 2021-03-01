import React from "react";
import styles from "./CssModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
//css module을 사용할때 클래스를 여러개를 설정하거나 , 조건부로 클래스를 설정할때 편리함.

const CssModule = () => {
  console.log("styles : ", styles);
  return (
    <div className={cx("wrapper", "inverted")}>
      HI! this is <span className="something">CSS Module!</span>
    </div>
  );
};

export default CssModule;
