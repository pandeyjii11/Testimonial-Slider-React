
import './App.css';
import reviews from './data';

import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-200">

      <div className='text-center'>

        <h1 className='font-bold text-4xl'>
          Our Testimonial
        </h1>

        <div className='w-1/5 h-[4px] bg-violet-400 mt-1 mx-auto'></div>

        <Testimonial reviews={reviews}/>
        
      </div>
    </div>
  );
}

export default App;
