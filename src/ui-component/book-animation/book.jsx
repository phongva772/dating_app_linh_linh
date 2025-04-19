import React, { useEffect, useRef, useState } from 'react';
import './book.css';

const Book = () => {
  const pagesRef = useRef(null);
  const [flippedPages, setFlippedPages] = useState(new Set());
  const [showHearts, setShowHearts] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const pages = pagesRef.current?.children || [];
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (i % 2 === 0) {
        page.style.zIndex = pages.length - i;
      }
      page.pageNum = i + 1;
    }
  }, []);
  useEffect(() => {
    const totalPages = pagesRef.current?.children.length || 0;

    if (flippedPages.size === totalPages) {
      // Tự động reset lại sách sau khi chờ một chút
      setTimeout(() => {
        // Animation về giữa
        pagesRef.current?.classList.add('reset-center');
        setShowHearts(true);
        setShowFireworks(true);

        // Sau khi animation xong thì reset lật trang
        setTimeout(() => {
          setFlippedPages(new Set());
          pagesRef.current?.classList.remove('reset-center');
        }, 1000); // thời gian khớp với CSS animation
      }, 2000);
    }
  }, [flippedPages]);

  const handlePageClick = (pageNum) => {
    const newSet = new Set(flippedPages);
    if (newSet.has(pageNum)) {
      newSet.delete(pageNum);
    } else {
      newSet.add(pageNum);
    }
    setFlippedPages(newSet);
  };

  return (
    <div className={`book `}>
      <div className="pages" ref={pagesRef}>
        <div className={`page ${flippedPages.has(1) ? 'flipped' : ''}`} onClick={() => handlePageClick(1)}>
          <div className="front">
            <p>
              📖 Mở ra nè
              <br />
              Có điều đáng yêu chờ đợi 💌
            </p>
          </div>
          <div className="back">
            <p>Trang sau sẽ có điều bất ngờ nè 😚</p>
          </div>
        </div>

        <div className={`page ${flippedPages.has(2) ? 'flipped' : ''}`} onClick={() => handlePageClick(2)}>
          <div className="front">
            <p>
              Bé biết không,
              <br />Ở bên bé là điều dễ chịu nhất trong ngày của anh ☁️💫
            </p>
          </div>
          <div className="back">
            <p>Anh có một kế hoạch nhỏ cho hôm nay nè 💡</p>
          </div>
        </div>

        <div className={`page ${flippedPages.has(3) ? 'flipped' : ''}`} onClick={() => handlePageClick(3)}>
          <div className="front">
            <p>
              🗓️ Lịch trình hẹn hò hôm nay:
              <br />
              <br />
              <strong>6h - 7h30</strong>: 🎬 Xem *Thám Hiểm Đại Dương Xanh* <br />
              <strong>7h30 - 9h</strong>: 🍖 Ăn nướng tại *BamBam* <br />
              <strong>9h - 11h</strong>: ☕ Chill ở *Yên Kafe*
            </p>
          </div>
          <div className="back">
            <p>Hy vọng bé sẽ thích từng khoảnh khắc bên nhau 🥰</p>
          </div>
        </div>

        <div className={`page ${flippedPages.has(4) ? 'flipped' : ''}`} onClick={() => handlePageClick(4)}>
          <div className="front">
            <p>
              Bầu trời có thể nhiều mây,
              <br />
              Nhưng trong lòng anh luôn có nắng mỗi khi nhìn thấy bé 🌤️
            </p>
          </div>
          <div className="back">
            <p>
              Mỗi trang là một kỉ niệm,
              <br />
              Và hôm nay sẽ là một trang thật đẹp 💑
            </p>
          </div>
        </div>

        <div className={`page ${flippedPages.has(5) ? 'flipped' : ''}`} onClick={() => handlePageClick(5)}>
          <div className="front">
            <p>
              Cảm ơn bé đã luôn bên anh 🧸
              <br />
              Thương bé nhìu nhìu 💕
            </p>
          </div>
          <div className="back">
            <p>
              👉 Nhấn lại để gấp sách lại nhé~
              <br />
              Hẹn bé lúc 6h 💖
            </p>
          </div>
        </div>
      </div>
      {showHearts && (
        <div className="heart-container">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: getRandomColor()
              }}
            />
          ))}
        </div>
      )}

      {showFireworks && (
        <div className="firework-container">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="firework" style={{ left: `${Math.random() * 100}%` }} />
          ))}
        </div>
      )}
    </div>
  );
};

const getRandomColor = () => {
  const colors = ['#ff69b4', '#ff1493', '#ff4d4d', '#ffa07a', '#ff69b4', '#e75480', '#db7093'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Book;
