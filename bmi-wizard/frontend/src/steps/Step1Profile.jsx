export default function Step1Profile({data, onChange}) {
  return (
    <>
      <h1 className="h1">Step 1: ข้อมูลทั่วไป</h1>
      <p className="sub">เลือกเพศ และกรอกอายุคร่าวๆ</p>
      <div className="form">
        <label className="label">เพศ</label>
        <select className="select" value={data.gender||''}
                onChange={e=>onChange({gender:e.target.value})}>
          <option value="" disabled>เลือกเพศ</option>
          <option value="female">หญิง</option>
          <option value="male">ชาย</option>
          <option value="other">อื่นๆ</option>
        </select>

        <label className="label">อายุ (ปี)</label>
        <input className="input" type="number" min="1" max="120"
               value={data.age||''}
               onChange={e=>onChange({age: Number(e.target.value)})}/>
      </div>
    </>
  )
}
