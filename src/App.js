import './App.css';
import ForExample from './ForExample';
import GreetingCard from './GreetingsCard';
// import Events from './Events';
import './index.css';
import Resize from './Resize';
import Sample from './Sample';
// import StatMgt from './StatMgt';
// import FirstComp from './propComponent/FirstComp.jsx';
// import FourthComp from './propComponent/FourthComp.jsx';
// import SecondComp from './propComponent/SecondComp.jsx';
// import ThirdComp from './propComponent/ThirdComp.jsx';


// const User={
//   name: "vishnu",
//   age: 20,
//   email:"kurapati teja" ,
//   phone: 1234567890,
// }

function App() {
  return (
    <div className="App">
      {/* <Events/> */}
      <GreetingCard/>
      {/* <Sample/>
      <ForExample/>
      <Resize/> */}
      
      {/* <StatMgt/> */}
     {/* <FourthComp  User={User}/> */}

      {/* <FirstComp name={User.name}/>
      <SecondComp name={User.name}/>
      <ThirdComp  name={User.name}/>
      <FourthComp  name={User.name}/> */}
    </div>
  );
}

export default App;
