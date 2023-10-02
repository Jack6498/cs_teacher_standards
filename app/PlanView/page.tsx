'use client'
//page handels user login 
import Link from "next/link"
import DatePicker from 'react-datepicker';
import React, {useState} from "react";
import ReactQuill, {Quill} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function PlanView() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  var pdfValue;
  var container = document.getElementById('pdf')!;
  var editor = new Quill(container);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-row w-3/4 justify-between">
        <div className="m-8 w-fit">
          <Link href={"/"} className="">GO Back</Link>
        </div>
        <p className="text-3xl font-semibold m-8 float-right">Lesson Plan Submission</p>
      </div>
        <div className="w-3/4 bg-white rounded-lg">
          <form className="p-4 items-start">
            <label>Data Range:</label>
            <DatePicker selected={startDate} onChange={() => setStartDate(new Date())} id="date"/>
            <label>To:</label>
            <DatePicker selected={endDate} onChange={() => setEndDate(new Date())} id="date"/>
            <label htmlFor="CoursePicker">Course Name:</label>
            <select name="CoursePicker" defaultValue={"Select"} className="mt-1 block">
              <option value="Pre-Ap English">Pre-Ap English</option>
              <option value="AP/DC English">AP/DC English</option>
            </select>
            <label htmlFor="nameInput">Teacher Name:</label>
            <input name="nameInput"></input>
            <label htmlFor="">Lesson Plan:</label>
            <ReactQuill theme="snow" id = "pdf" onChange={() => pdfValue = editor.root.innerHTML.split('  ').join(' &nbsp;')}/>
          </form>
      </div>
    </main>
  )

}