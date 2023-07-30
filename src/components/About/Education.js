import React from "react";
import "../../style.css";
/* import './Education.css' */
function Education() {
  const handlemca=()=>{
    window.confirm("!!!documents are not yet recieved!!!")

  }
  const handleug=()=>{
    window.open('https://drive.google.com/file/d/13kEbr0B2DsbJgbs1ZWEmoTfK8496KiHD/view?usp=sharing','_blank_')

  }
  const handle12=()=>{
    window.open('https://drive.google.com/file/d/1GIMtfbygvqz5eq463o01le_IDu9rnnlN/view?usp=sharing','_blank_')

  }
  const handle10=()=>{
    window.open('https://drive.google.com/file/d/1G9rK4ctYyvnT4_I9kxALcU41E_6RzVtr/view?usp=sharing','_blank_')

  }
  return (
    
    <div class="wrapper">
    <div class="center-line">
      {/* <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a> */}
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Master of Computer Application</span>
          <span class="title">2021-2023</span>
        </div>
        <p>Nehru college of engineering and research centre</p>
        <p>APJ Abdul Kalam Technological University</p>
        <div class="bottom">
          <button onClick={handlemca}>click me</button>
          {/* <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">Bsc Computer Science</span>
          <span class="title">2017-2020</span>
        </div>
        <p>Mount Seena College of Arts and Science</p>
        <p>University of Calicut</p>
        <div class="bottom">
        <button onClick={handleug}>click me</button>
          {/* <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Higher Secondary</span>
          <span class="title">2015-2017</span>
        </div>
        <p>Seventh day Adventist Higher Secondary School</p>
        <p>Indian School Certificate (ISC)</p>
        <div class="bottom">
        <button onClick={handle12}>click me</button>
          {/* <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Matriculation</span>
          <span class="title">2005-2015</span>
        </div>
        <p>Seventh day Adventist Higher Secondary School</p>
        <p>Indian Certificate of Secondary Education (ICSE)</p>
        <div class="bottom">
        <button onClick={handle10}>click me</button>
         {/*  <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
      </div>
  );
}

export default Education;
