import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './romantic.css';

const schedule = [
  { time: '17:00', activity: 'Gặp nhau & đi dạo' },
  { time: '17:30', activity: 'Ăn tối lãng mạn' },
  { time: '18:30', activity: 'Hoạt động cùng nhau (vẽ tranh / xem phim)' },
  { time: '20:00', activity: 'Đi dạo đêm & tâm sự' },
  { time: '21:30', activity: 'Kết thúc nhẹ nhàng' }
];

const RomanticScheduleList = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerText = '💖';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 3 + Math.random() * 2 + 's';
      heart.style.fontSize = 16 + Math.random() * 24 + 'px';
      heart.style.opacity = Math.random();

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Typography variant="h4" sx={{ color: 'white', mb: 4, textShadow: '1px 1px 4px pink' }}>
        💖 Lịch trình hẹn hò mộng mơ
      </Typography>

      <div className="w-full max-w-md space-y-4">
        {schedule.map((item, index) => (
          <Card
            key={index}
            sx={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(255, 192, 203, 0.5)',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          >
            <CardContent className="flex items-center gap-4">
              <FavoriteIcon color="error" />
              <div>
                <Typography variant="h6">{item.time}</Typography>
                <Typography variant="body2">{item.activity}</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RomanticScheduleList;
