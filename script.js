let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let questionText = document.getElementById('question');
let mainImage = document.getElementById('mainImage');

let clickCount = 0; // บันทึกจำนวนครั้งที่คลิกปุ่ม No

// ข้อความของปุ่ม No ที่เปลี่ยนไป
const noTexts = ['คุณจริงจังหรือ…', 'ลองคิดอีกที?', 'ห้ามเลือกอันนี้!', 'ฉันจะเสียใจมาก…', 'ไม่ได้:('];

// เหตุการณ์คลิกปุ่ม No
noButton.addEventListener('click', function () {
  clickCount++;

  // ทำให้ปุ่ม Yes ใหญ่ขึ้นทุกครั้งที่คลิก No
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // ทำให้ปุ่ม No เคลื่อนที่ไปทางขวา 100px ทุกครั้งที่คลิก
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // **ใหม่: ทำให้รูปภาพและข้อความเลื่อนขึ้น**
  let moveUp = clickCount * 25; // เลื่อนขึ้นครั้งละ 20px
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // ข้อความของปุ่ม No ที่เปลี่ยนไป (เปลี่ยน 5 ครั้งแรก)
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // รูปภาพที่เปลี่ยนไป (เปลี่ยน 5 ครั้งแรก)
  if (clickCount === 1) mainImage.src = 'images/shocked.png'; // ตกใจ
  if (clickCount === 2) mainImage.src = 'images/think.png'; // คิด
  if (clickCount === 3) mainImage.src = 'images/angry.png'; // โกรธ
  if (clickCount === 4) mainImage.src = 'images/crying.png'; // ร้องไห้
  if (clickCount >= 5) mainImage.src = 'images/crying.png'; // หลังจากนั้นจะเป็นร้องไห้ตลอด
});

// เมื่อคลิกปุ่ม Yes จะเข้าสู่หน้าประสบความสำเร็จในการสารภาพรัก
yesButton.addEventListener('click', function () {
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!ฉันรักคุณ!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/hug.png" alt="hug" class="yes-image">
        </div>
    `;

  document.body.style.overflow = 'hidden';
});
