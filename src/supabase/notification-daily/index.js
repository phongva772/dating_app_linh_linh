import { serve } from 'https://deno.land/std/http/server.ts';

serve(async () => {
  const BOT_TOKEN = Deno.env.get('BOT_TOKEN');
  const CHAT_ID_LINH_LINH = Deno.env.get('CHAT_ID_LINH_LINH');
  const TEXT = '🌞 Chúc buổi sáng tốt lành nhé Linh!';

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID_LINH_LINH,
      text: TEXT
    })
  });

  return new Response('✅ Đã gửi!', { status: 200 });
});
