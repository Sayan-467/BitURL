"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setShorturl("")
        console.log(result)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URL</h1>
      <div className='flex flex-col gap-3'>
        <input type="text" value={url}
          className='px-4 py-2 focus:outline-purple-600 rounded-md' placeholder='Enter your URL: '
          onChange={e => { seturl(e.target.value) }} />
        <input type="text" value={shorturl}
          className='px-4 py-2 focus:outline-purple-600 rounded-md' placeholder='Enter your preferred short URL: '
          onChange={e => { setShorturl(e.target.value) }} />
        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg px-3 py-1'>Generate</button>
      </div>
      {generated && <> <span className='text-lg font-bold'>Your Link : </span> <code><Link target='_blank' href={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten
