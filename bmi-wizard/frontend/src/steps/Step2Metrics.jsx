export default function Step2Metrics({data, onChange}) {
  return (
    <>
      <h1 className="h1">Step 2: น้ำหนักและส่วนสูง</h1>
      <p className="sub">กรอกเป็นหน่วยกิโลกรัมและเซนติเมตร</p>
      <div className="form row">
        <div>
          <label className="label">Weight (kg)</label>
          <input className="input" type="number" step="0.1" min="1"
                 value={data.weightKg||''}
                 onChange={e=>onChange({weightKg: Number(e.target.value)})}/>
        </div>
        <div>
          <label className="label">Height (cm)</label>
          <input className="input" type="number" step="0.1" min="1"
                 value={data.heightCm||''}
                 onChange={e=>onChange({heightCm: Number(e.target.value)})}/>
        </div>
      </div>
    </>
  )
}
