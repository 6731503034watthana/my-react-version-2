import { useMemo, useState } from 'react'
import './App.css'
import { postJson } from './api'
import Step1Profile from './steps/Step1Profile'
import Step2Metrics from './steps/Step2Metrics'
import Step3Review from './steps/Step3Review'

export default function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({ gender: '', age: '', weightKg: '', heightCm: '' })
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const total = 3
  const percent = useMemo(() => {
    const p = (step - 1) / (total - 1)
    return Math.max(0, Math.min(1, p)) * 100
  }, [step])

  function patch(p) {
    setData(prev => ({ ...prev, ...p }))
  }

  function validate() {
    if (step === 1) {
      if (!data.gender) return 'เลือกเพศก่อน'
      if (!data.age || Number(data.age) <= 0) return 'อายุต้องมากกว่า 0'
    }
    if (step === 2) {
      if (!data.weightKg || Number(data.weightKg) <= 0) return 'ใส่น้ำหนักให้ถูกต้อง'
      if (!data.heightCm || Number(data.heightCm) <= 0) return 'ใส่ส่วนสูงให้ถูกต้อง'
    }
    return ''
  }

  async function next() {
    if (loading) return
    const v = validate()
    if (v) { setError(v); return }
    setError('')

    if (step < total) {
      setStep(s => s + 1)
      return
    }

    try {
      setLoading(true)
      const r = await postJson('/bmi', {
        weightKg: Number(data.weightKg),
        heightCm: Number(data.heightCm)
      })
      setResult(r)
    } catch (e) {
      setError(String(e?.message || e))
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  function back() {
    if (loading) return
    setError('')
    if (step > 1) setStep(s => s - 1)
  }

  // ให้ Enter ทำงานเป็น next
  function onSubmit(e) {
    e.preventDefault()
    next()
  }

  return (
    <div className="app">
      <div className="card">
        <div className="progress">
          <div className="bar" style={{ width: `${percent}%` }} />
        </div>

        <form onSubmit={onSubmit}>
          {step === 1 && <Step1Profile data={data} onChange={patch} />}
          {step === 2 && <Step2Metrics data={data} onChange={patch} />}
          {step === 3 && <Step3Review data={data} result={result} />}

          {error && <div className="err">{error}</div>}

          <div className="btns">
            <button type="button" className="btn secondary" onClick={back} disabled={step === 1 || loading}>
              ย้อนกลับ
            </button>
            <button type="submit" className="btn primary" disabled={loading}>
              {step < total ? 'ถัดไป' : (loading ? 'คำนวณ…' : 'คำนวณ')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
