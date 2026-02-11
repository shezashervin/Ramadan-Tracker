import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, edit, del } from '../redux/slice/RamadanSlice';

function RamadanTracker() {
    const [formm, setFormm] = useState({
        day: null,
        fasted: null,
        reason: null,
        fajr: false,
        dhuhr: false,
        asr: false,
        maghrib: false,
        isha: false,
        taraweeh: false,
        quran: null,
    })

    const prayerCount =
        (formm.fajr ? 1 : 0) +
        (formm.dhuhr ? 1 : 0) +
        (formm.asr ? 1 : 0) +
        (formm.maghrib ? 1 : 0) +
        (formm.isha ? 1 : 0) +
        (formm.taraweeh ? 1 : 0);

    const [isSuccess, setIsSuccess] = useState(false)

    const readRamadan = useSelector((state) => state.ramadan.details)
    const dispatch = useDispatch()

    let remainingQuran = 604

    const [editIndex, SetEditIndex] = useState(null)

    const resett = {
        day: null,
        fasted: null,
        reason: null,
        fajr: false,
        dhuhr: false,
        asr: false,
        maghrib: false,
        isha: false,
        taraweeh: false,
        quran: null,
        prayerCount: 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSuccess(false)
        if (formm.day <= 0 || formm.day > 30) {
            alert('Please enter a valid day! (1-30)')
            return
        }
        if (formm.fasted == null) {
            alert('Please choose yes or no!!')
            return
        }
        if (formm.fasted == false) {
            if (formm.reason == null || formm.reason.trim() === '') {
                alert('Please provide the reason!; cannot contain empty spaces!')
                return
            }
        }
        if (formm.quran === null || formm.quran < 0 || formm.quran > 604) {
            alert('Please provide a valid input! (max 604)')
            return
        }

        if (editIndex == null) {
            dispatch(add({ ...formm, prayerCount }))
        }
        else {
            dispatch(edit({
                index: editIndex,
                updatedData: { ...formm, prayerCount }
            }))
            SetEditIndex(null)
        }

        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 2000)
        setFormm(resett)
    }


    return (
        <div className='bg-blue-950 min-h-screen leading-loose font-serif text-center italic text-amber-100 '>


            <div className=' pt-3 font-serif bg-gradient-to-r from-yellow-800 via-amber-100 to-blue-900'>

                <h1 className='text-blue-900 text-3xl p-3'> ﷽ </h1>
                <h1 className='text-xl p-3 text-yellow-700'> رَمَضَان المُبَارَك</h1>

            </div>

            <h1 className='text-3xl not-italic font-sans font-bold p-6'>✨ RAMADAN TRACKER ✨ </h1>

            <div className=' flex justify-center bg-amber-100 font-bold mx-auto text-blue-950 w-[35rem] h-70 p-8 rounded-xl'>
                <form onSubmit={handleSubmit}>
                    <div className='text-left ' >

                        <div className='pb-5'>
                            <label htmlFor="">Day: </label>
                            <input value={formm.day ?? ''} className=' pl-2  text-black rounded-md ml-64' onChange={(d) => setFormm({ ...formm, day: Number(d.target.value) })} type="number" />
                            {formm.day <= 0 && formm.day !== null && <span className='text-red-700'>Please enter a valid day!</span>}
                            {/* {dayError && <p className='text-red-700'>{dayError}</p>} */}
                            {/* {formm.day <= 0 && <p className='text-red-700'>Please enter a valid day!</p>} */}
                            <br />
                        </div>

                        <div className='pb-5'>
                            <label htmlFor="">Fast: </label>

                            {/* <span className='gap-2'> */}
                            <input className='ml-64' onChange={(e) => setFormm({ ...formm, fasted: true })} checked={formm.fasted === true} type="radio" name='fast' /> Yes
                            <input className='ml-2' onChange={(e) => setFormm({ ...formm, fasted: false })} checked={formm.fasted === false} type="radio" name='fast' /> No
                            {/* </span> */}

                            {formm.fasted === false && (
                                <div>
                                    <label htmlFor=""></label> Reason?
                                    <input value={formm.reason} onChange={(r) => setFormm({ ...formm, reason: r.target.value })} className=' pl-2 mt-4 ml-56 text-black rounded-md' type="text" />
                                    {/* {formm.reason !== null && formm.reason.trim() === '' && <p className='text-red-700'>Please enter a valid reason!</p>} */}

                                </div>)}
                            <br />
                        </div>

                        <div className='flex gap-1'>
                            <label htmlFor="">Prayers: </label> <br />
                            <input checked={formm.fajr} onChange={(f) => setFormm({ ...formm, fajr: f.target.checked })} type="checkbox" /> Fajr
                            <input checked={formm.dhuhr} onChange={(d) => setFormm({ ...formm, dhuhr: d.target.checked })} type="checkbox" /> Dhuhr
                            <input checked={formm.asr} onChange={(a) => setFormm({ ...formm, asr: a.target.checked })} type="checkbox" /> Asr
                            <input checked={formm.maghrib} onChange={(m) => setFormm({ ...formm, maghrib: m.target.checked })} type="checkbox" /> Maghrib
                            <input checked={formm.isha} onChange={(i) => setFormm({ ...formm, isha: i.target.checked })} type="checkbox" /> Isha
                            <input checked={formm.taraweeh} onChange={(t) => setFormm({ ...formm, taraweeh: t.target.checked })} type="checkbox" /> Taraweeh
                        </div>

                        <br />

                        <div className='pb-5'>
                            <label htmlFor="">Quran pages read: </label>
                            <input value={formm.quran ?? ''} className=' pl-2 text-black rounded-md ml-[8.7rem]' onChange={(q) => setFormm({ ...formm, quran: Number(q.target.value) })} type="number" />
                            {formm.quran !== null && (formm.quran < 0 || formm.quran > 604) && <span className='text-red-700'>Invalid input!</span>}
                            <br />
                        </div>
                    </div>
                    <button type='submit' className='bg-emerald-700 hover:bg-emerald-600 font-sans mt-4 p-1 px-4 py-2 font-semibold text-amber-100 rounded-md '> {editIndex == null ? 'ADD ENTRY' : ' UPDATE ENTRY'} </button>
                    {isSuccess == true && <p className='text-green-500 not-italic text-lg'>Submitted succesfully!</p>}

                </form>
            </div>
            {readRamadan.length > 0 &&
                <div className=' mt-6 grid grid-cols-3 gap-6 justify-items-center'>
                    {readRamadan.map((i, index) => {
                        remainingQuran = remainingQuran - (i.quran)
                        return (
                            <div key={index} >
                                <div className='bg-yellow-700 not-italic shadow-xl shadow-black rounded-3xl m-5 text-amber-100 w-60 p-4 h-80 flex flex-col'>
                                    <div className='flex-1'>
                                        <h1 className='font-bold text-center text-2xl pb-4 text-slate-900'>🌙 DAY: {i.day} </h1>
                                        {/* <br /> */}
                                        Fast: {i.fasted ? <span>✅</span> : <span>❌ <br /> Reason : {i.reason}</span>}
                                        {/* Fast: {i.fasted ? '✅' : ` ❌ Reason: ${ i.reason}`} */}
                                        <br />
                                        Prayers:  {i.prayerCount === 6 && '⭐️'}{i.prayerCount}/6
                                        <br />
                                        Quran pages read : {i.quran}
                                        <br />
                                        Quran left: {remainingQuran}/604
                                    </div>
                                    <br />
                                    <div className='flex justify-center gap-2 mt-auto'>
                                        <button onClick={() => {
                                            setFormm(i)
                                            SetEditIndex(index)
                                        }}
                                            className='bg-yellow-600 font-medium font-sans text-blue-900 rounded-md p-1 hover:bg-yellow-500  py-2 px-2'>EDIT</button>
                                        <button onClick={() => {
                                            const deleteConfirmation = window.confirm("Are you sure?")
                                            deleteConfirmation ? dispatch(del(index)) : ''
                                        }}
                                            className='bg-red-800  font-sans text-white rounded-md p-1 hover:bg-red-600 px-2 py-2 '>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}</div>
            }

            {/* </div> */}
        </div>
    )
}

export default RamadanTracker