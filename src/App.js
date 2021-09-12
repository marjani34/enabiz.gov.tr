import sbLogo from './assets/sb-logo-giris.png';
import enabiz from './assets/enabiz-logo-giris-eng.png'
import checkmark from './assets/checkmark.png'
import './App.css';

function App() {
  return (
    <div className="BoxContent">
      <img src={sbLogo} className="SbLogo" alt="sbLogo"/>
      <img src={enabiz} className="EnabizLogo" alt="enabizLogo"/>
      <div className="clearfix"></div>
      <div className="p-5">
        <p className="note note-success">
      <img src={checkmark} className="checkmark" alt="enabizLogo"/>
          
          The result of this test belongs to  A*** MARJANIBEN*** with Passport Number *******7018.
          The test result is NEGATIVE and the sampling date is 13/9/2021 11:13:00 AM.<br/>
          It was downloaded by  A*** MARJANIBEN*** on 13.09.2021.<br/>
          CAN BE USED AS A DOCUMENT FOR EXIT ABROAD.<br/>
        </p>
        <div className="clearfix"></div>
        <div className="clearfix"></div>
      </div>
    </div>

  );
}

export default App;

// The result of this test belongs to  A *** MARJANIBEN *** with Passport Number ******* 7018.
//         The test result is NEGATIVE and the sampling date is 7 / 2 / 2021 11: 13: 00 AM.
//         < br >
//   It was downloaded by  A *** MARJANIBEN *** on 02.07.2021.
//         < br >
//     CAN BE USED AS A DOCUMENT FOR EXIT ABROAD.