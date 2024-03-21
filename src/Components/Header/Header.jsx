import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: 'smooth'
    });
  };
  const scrollToTop2 = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToTop3 = () => {
    window.scrollTo({
      top: 1100,
      behavior: 'smooth'
    });
  };
  const scrollToTop4 = () => {
    window.scrollTo({
      top: 1300,
      behavior: 'smooth'
    });
  };
  const scrollToTop5 = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  };
  return (
    <div className={s.container_header}>
      <div className={s.nav}>
        <span onClick={scrollToTop2}><Link to="/">Home</Link></span>
        <span onClick={scrollToTop}><Link to="/">About</Link></span>
        <span onClick={scrollToTop3}><Link to="/">Work</Link></span>
        <span onClick={scrollToTop5}><Link to="/">Success</Link></span>
        <span onClick={scrollToTop4}><Link to="/">Contacts</Link></span>
      </div>
    </div>
  )
}

export default Header
