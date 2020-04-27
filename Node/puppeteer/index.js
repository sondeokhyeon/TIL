import puppeteer from "puppeteer";
import Slimbot from "slimbot";
import path from "path";
import { config } from "dotenv";
config({ path: path.join(__dirname, ".env") });

const slimbot = new Slimbot(process.env.tb_id); //TeleGram_bot_id

puppeteer
  .launch({
    headless: false,
    timeout: 5000,
    defaultViewport: null,
  })
  .then(async (bs) => {
    const page = await bs.newPage();
    getNews(page);
    setInterval(async () => {
      getNews(page);
    }, 1000 * 60 * 30); // 30분 단위로 실행
  });

async function getNews(page) {
  const date = new Date();
  await page.goto(
    "https://search.naver.com/search.naver?where=news&query=김정은"
  );
  var el = await page.$eval(
    "#sp_nws1 > dl > dt > a",
    (el) => `${el.title}
    ${el.href}`
  );
  const msg = (`[${date.getHours()} : ${date.getMinutes()}]`, el);
  slimbot.sendMessage(process.env.tm_id, msg); //메시지 발송
}
