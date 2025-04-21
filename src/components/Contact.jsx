import { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')

  const body = {
    name: name,
    email: email,
    message: message
  }

  const isValidForm = () => {

    setNameError('')
    setEmailError('')
    setMessageError('')

    let isValidName = false
    let isValidEmail = false
    let isValidMessage = false

    if (!name) setNameError('お名前は必須です。')
    else if (name.length > 30) setNameError('お名前は30文字以内で入力してください。')
    else isValidName = true

    if (!email) setEmailError('メールアドレスは必須です。')
    else if (!email.match(/.+@.+\..+/)) setEmailError('メールアドレスの形式が正しくありません。')
    else isValidEmail = true

    if (!message) setMessageError('本文は必須です。')
    else if (message.length > 500) setMessageError('本文は500文字以内で入力してください。')
    else isValidMessage = true

    return isValidName && isValidEmail && isValidMessage
  }

  const handleClear = () => {
    setName('')
    setEmail('')
    setMessage('')
    setNameError('')
    setEmailError('')
    setMessageError('')
  }

  const fetcher = async () => {
    const response = await fetch(
      'https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      },
    )

    if (response.ok) {
      window.alert("送信しました")
      handleClear()
    } else {
      window.alert('通信エラーです。')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    if (isValidForm()) fetcher()
    setSubmitting(false)
  }

  return (
    <div className="w-full pt-12 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="font-bold text-xl mb-10">問い合わせフォーム</div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-6">
              <label htmlFor="name" className="w-[240px]">お名前</label>
              <div className="w-full">
                <input id="name" type="text" className="border border-gray-300 rounded-lg p-4 w-full" value={name} onChange={e => setName(e.target.value)} disabled={submitting}/>
                {nameError && <div className="text-red-500">{nameError}</div>}
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <label htmlFor="mail" className="w-[240px]">メールアドレス</label>
              <div className="w-full">
                <input id="mail" type="text" className="border border-gray-300 rounded-lg p-4 w-full" value={email} onChange={e => setEmail(e.target.value)} disabled={submitting}/>
                {emailError && <div className="text-red-500">{emailError}</div>}
              </div>
            </div>
            <div className="flex justify-between items-center mb-10">
              <label htmlFor="message" className="w-[240px]">本文</label>
              <div className="w-full">
                <textarea id="message" rows="8" className="border border-gray-300 rounded-lg p-4 w-full" value={message} onChange={e => setMessage(e.target.value)} disabled={submitting}></textarea>
                {messageError && <div className="text-red-500">{messageError}</div>}
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4" disabled={submitting}>送信</button>
              <button type="button" onClick={handleClear} className="bg-gray-200 font-bold py-2 px-4 rounded-lg" disabled={submitting}>クリア</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact