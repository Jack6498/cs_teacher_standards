"use client"
//page handels user login 
import Link from "next/link"
import DatePicker from 'react-datepicker';
import React, {useState} from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css'; 
const ReactQuill = dynamic(
  ()=> {
    return import('react-quill');
  },
  {ssr:false}
);

export default function PlanView() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pdfValue, setPdfValue] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative w-3/4 items-center">
          <Link href={"/"} className="absolute bg-white rounded-xl p-4 m-4 flex-none">GO Back</Link>
        <p className="text-3xl font-semibold m-8 float-right">Lesson Plan Submission</p>
      </div>
        <div className="w-3/4 bg-white rounded-lg">
          <form className="p-4 items-start">
            <label>Data Range:</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date!)} />
            <label>To:</label>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date!)} />
            <label htmlFor="CoursePicker">Course Name:</label>
            <select name="CoursePicker" defaultValue={"Select"} className="mt-1 block">
              <option value="Pre-Ap English">Pre-Ap English</option>
              <option value="AP/DC English">AP/DC English</option>
            </select>
            <label htmlFor="nameInput" className="mt-1 block">Teacher Name:</label>
            <input name="nameInput" className="border border-slate-300 border-2 rounded-lg"></input>
            <label htmlFor="">Lesson Plan:</label>
            <ReactQuill theme="snow" id = "pdf" value={pdfValue} onChange={(e)=> setPdfValue(e)}/>
            </form>
      </div>
    </main>
  )

}
