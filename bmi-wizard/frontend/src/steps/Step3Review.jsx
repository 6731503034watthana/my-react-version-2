export default function Step3Review({data, result}) {
  return (
    <>
      <h1 className="h1">Step 3: สรุปข้อมูล</h1>
      <p className="sub">ตรวจทานข้อมูลก่อนคำนวณ</p>
      <div className="summary">
        <div>เพศ: <b>{data.gender||'-'}</b></div>
        <div>อายุ: <b>{data.age||'-'}</b></div>
        <div>น้ำหนัก: <b>{data.weightKg||'-'}</b> kg</div>
        <div>ส่วนสูง: <b>{data.heightCm||'-'}</b> cm</div>
      </div>
      {result && (
        <div className="summary">
          <div>ผลลัพธ์ BMI: <b>{result.bmi.toFixed(2)}</b>
            <span className="tag">{result.category}</span>
          </div>
        </div>
      )}
    </>
  )
}
