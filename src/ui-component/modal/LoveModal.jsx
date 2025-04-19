import React, { useState, useEffect } from 'react';
import './modal2.css';
import { useNavigate } from 'react-router-dom';
const FlowerAnimation = () => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHearts(true);
      // Navigate sau animation (giả sử animation ~2.5s)
      setTimeout(() => {}, 2500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const [showHeart, setShowHeart] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowHeart(true);
    setTimeout(() => {
      setStartAnimation(true);
    }, 3000);
  };

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        console.log('navigate');
        navigate('/book');
        setStartAnimation(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [startAnimation, navigate]);

  return (
    <>
      <div className="heart-wrapper">
        {!showHeart && (
          <button className={'button'} onClick={handleClick}>
            💖 Nhấn vào đây ạ
          </button>
        )}
        {/* { &&  */}
        {showHeart && <div className={`heart1 ${fadeOut ? 'fade-out' : ''}`}></div>}
        {startAnimation && <div className="red-box" />}
      </div>
      <div>
        <div>
          <div className="night" />
          <div className="flowers">
            <div className="flower flower--1">
              <div className="flower__leafs flower__leafs--1">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__white-circle" />
                <div className="flower__light flower__light--1" />
                <div className="flower__light flower__light--2" />
                <div className="flower__light flower__light--3" />
                <div className="flower__light flower__light--4" />
                <div className="flower__light flower__light--5" />
                <div className="flower__light flower__light--6" />
                <div className="flower__light flower__light--7" />
                <div className="flower__light flower__light--8" />
              </div>
              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1" />
                <div className="flower__line__leaf flower__line__leaf--2" />
                <div className="flower__line__leaf flower__line__leaf--3" />
                <div className="flower__line__leaf flower__line__leaf--4" />
                <div className="flower__line__leaf flower__line__leaf--5" />
                <div className="flower__line__leaf flower__line__leaf--6" />
              </div>
            </div>
            <div className="flower flower--2">
              <div className="flower__leafs flower__leafs--2">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__white-circle" />
                <div className="flower__light flower__light--1" />
                <div className="flower__light flower__light--2" />
                <div className="flower__light flower__light--3" />
                <div className="flower__light flower__light--4" />
                <div className="flower__light flower__light--5" />
                <div className="flower__light flower__light--6" />
                <div className="flower__light flower__light--7" />
                <div className="flower__light flower__light--8" />
              </div>
              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1" />
                <div className="flower__line__leaf flower__line__leaf--2" />
                <div className="flower__line__leaf flower__line__leaf--3" />
                <div className="flower__line__leaf flower__line__leaf--4" />
              </div>
            </div>
            <div className="flower flower--3">
              <div className="flower__leafs flower__leafs--3">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__white-circle" />
                <div className="flower__light flower__light--1" />
                <div className="flower__light flower__light--2" />
                <div className="flower__light flower__light--3" />
                <div className="flower__light flower__light--4" />
                <div className="flower__light flower__light--5" />
                <div className="flower__light flower__light--6" />
                <div className="flower__light flower__light--7" />
                <div className="flower__light flower__light--8" />
              </div>
              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1" />
                <div className="flower__line__leaf flower__line__leaf--2" />
                <div className="flower__line__leaf flower__line__leaf--3" />
                <div className="flower__line__leaf flower__line__leaf--4" />
              </div>
            </div>
            <div className="flower flower--4">
              <div className="flower__leafs flower__leafs--3">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__white-circle" />
                <div className="flower__light flower__light--1" />
                <div className="flower__light flower__light--2" />
                <div className="flower__light flower__light--3" />
                <div className="flower__light flower__light--4" />
                <div className="flower__light flower__light--5" />
                <div className="flower__light flower__light--6" />
                <div className="flower__light flower__light--7" />
                <div className="flower__light flower__light--8" />
              </div>
              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1" />
                <div className="flower__line__leaf flower__line__leaf--2" />
                <div className="flower__line__leaf flower__line__leaf--3" />
                <div className="flower__line__leaf flower__line__leaf--4" />
              </div>
            </div>
            <div className="grow-ans" style={{ animationDelay: '1.2s' }}>
              <div className="flower__g-long">
                <div className="flower__g-long__top" />
                <div className="flower__g-long__bottom" />
              </div>
            </div>
            <div className="growing-grass">
              <div className="flower__grass flower__grass--1">
                <div className="flower__grass--top" />
                <div className="flower__grass--bottom" />
                <div className="flower__grass__leaf flower__grass__leaf--1" />
                <div className="flower__grass__leaf flower__grass__leaf--2" />
                <div className="flower__grass__leaf flower__grass__leaf--3" />
                <div className="flower__grass__leaf flower__grass__leaf--4" />
                <div className="flower__grass__leaf flower__grass__leaf--5" />
                <div className="flower__grass__leaf flower__grass__leaf--6" />
                <div className="flower__grass__leaf flower__grass__leaf--7" />
                <div className="flower__grass__leaf flower__grass__leaf--8" />
                <div className="flower__grass__overlay" />
              </div>
            </div>
            <div className="growing-grass">
              <div className="flower__grass flower__grass--2">
                <div className="flower__grass--top" />
                <div className="flower__grass--bottom" />
                <div className="flower__grass__leaf flower__grass__leaf--1" />
                <div className="flower__grass__leaf flower__grass__leaf--2" />
                <div className="flower__grass__leaf flower__grass__leaf--3" />
                <div className="flower__grass__leaf flower__grass__leaf--4" />
                <div className="flower__grass__leaf flower__grass__leaf--5" />
                <div className="flower__grass__leaf flower__grass__leaf--6" />
                <div className="flower__grass__leaf flower__grass__leaf--7" />
                <div className="flower__grass__leaf flower__grass__leaf--8" />
                <div className="flower__grass__overlay" />
              </div>
            </div>
            <div className="grow-ans" style={{ animationDelay: '2.4s' }}>
              <div className="flower__g-right flower__g-right--1">
                <div className="leaf" />
              </div>
            </div>
            <div className="grow-ans" style={{ animationDelay: '2.8s' }}>
              <div className="flower__g-right flower__g-right--2">
                <div className="leaf" />
              </div>
            </div>
            <div className="grow-ans" style={{ animationDelay: '2.8s' }}>
              <div className="flower__g-front">
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__line" />
              </div>
            </div>
            <div className="grow-ans" style={{ animationDelay: '3.2s' }}>
              <div className="flower__g-fr">
                <div className="leaf" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--1" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--2" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--3" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--4" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--5" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--6" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--7" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--8" />
              </div>
            </div>
            <div className="long-g long-g--0">
              <div className="grow-ans" style={{ animationDelay: '3s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '2.2s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.4s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.6s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
            <div className="long-g long-g--1">
              <div className="grow-ans" style={{ animationDelay: '3.6s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.8s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.2s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
            <div className="long-g long-g--2">
              <div className="grow-ans" style={{ animationDelay: '4s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.2s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.4s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.6s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
            <div className="long-g long-g--3">
              <div className="grow-ans" style={{ animationDelay: '4s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.2s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.6s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
            <div className="long-g long-g--4">
              <div className="grow-ans" style={{ animationDelay: '4s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.2s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.6s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
            <div className="long-g long-g--5">
              <div className="grow-ans" style={{ animationDelay: '4s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.2s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.6s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
            <div className="long-g long-g--6">
              <div className="grow-ans" style={{ animationDelay: '4.2s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.4s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.6s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '4.8s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
            <div className="long-g long-g--7">
              <div className="grow-ans" style={{ animationDelay: '3s' }}>
                <div className="leaf leaf--0" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.2s' }}>
                <div className="leaf leaf--1" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.5s' }}>
                <div className="leaf leaf--2" />
              </div>
              <div className="grow-ans" style={{ animationDelay: '3.6s' }}>
                <div className="leaf leaf--3" />
              </div>
            </div>
          </div>

          <div class="bubbles">
            <div class="bubble">
              <svg class="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
            <div className="bubble">
              <svg className="heart" viewBox="0 0 32 32">
                <title>heart22</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerAnimation;
