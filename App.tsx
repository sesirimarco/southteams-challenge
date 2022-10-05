import * as React from 'react';
import './style.css';

export default function App() {
  React.useEffect(() => {
    //const result = callUsers(10);
    //console.log('>>>> ', result);
  }, []);
  /* const callUsers = async (amount: number) => {
    const data = await fetch(`https://randomuser.me/api/?results=${amount}`);
    const jData = data.json();
    console.log(jData);
  }; */
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
