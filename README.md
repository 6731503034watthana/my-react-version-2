# my-react-version-2

ถ้าจะรันแยก (Front-End / Back-End แบบปกติ)
🧠 Backend (Spring Boot)

จากโฟลเดอร์ backend

mvn spring-boot:run


หรือถ้าใช้ wrapper (มีไฟล์ mvnw)

./mvnw spring-boot:run


เปิดได้ที่ http://localhost:8080

🎨 Frontend (React / Vite)

จากโฟลเดอร์ frontend

npm install
npm run dev


เปิดได้ที่ http://localhost:5173

🐳 ถ้าจะรันด้วย Docker (ทั้ง Front + Back พร้อมกัน)

จากโฟลเดอร์หลักของโปรเจกต์ (bmi-wizard/)

🔹 สร้างและ build container
docker compose build

🔹 รันทั้งหมดพร้อมกัน

docker compose up


ตอนรันเสร็จแล้ว

Frontend อยู่ที่: http://localhost:5173

Backend อยู่ที่: http://localhost:8080

(frontend จะ proxy /api ไป backend ให้อัตโนมัติ)

🔹 หยุด container
docker compose down

🔹 ถ้าต้องการ rebuild ใหม่หมด (เวลามีแก้ไข)
docker compose build --no-cache
docker compose up


สรุปสั้นกว่านี้อีก:

งาน	คำสั่ง
รัน backend ปกติ	mvn spring-boot:run
รัน frontend ปกติ	npm run dev
รันทั้งหมดใน Docker	docker compose up
หยุดทั้งหมด	docker compose down
rebuild ทั้งหมด	docker compose build --no-cache