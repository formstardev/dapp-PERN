import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import OnboardingHeader from '../../component/onboarding/header-onboarding';
import { FiArrowRight, FiCircle } from "react-icons/fi";

const Onboarding = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const history = useHistory('');
    const slides = [
        {src: '/images/welcome.jpg',alt:'',title:'Welcome', content:'Labore deserunt aliqua qui incididunt. Enim nisi pariatur irure labat consequat labore minim fugiat dese'},
        {src: '/images/connect.png',alt:'',title:'Connect', content:'Labore deserunt aliqua qui incididunt. Enim nisi pariatur irure labat consequat labore minim fugiat dese'},
        {src: '/images/speaker.png',alt:'',title:'Speak', content:'Labore deserunt aliqua qui incididunt. Enim nisi pariatur irure labat consequat labore minim fugiat dese'}
    ];
    /** Next Slide display */
    function nextSlide() {
        setCurrentSlide(currentSlide+1);
        if (currentSlide+2 > slides.length){
            history.push('/home')
        }
        
    }
    
    
    return (
        <div className='bg-[#FDFDFD] min-h-screen'>
            <div className=''>
                <OnboardingHeader className="mt-0 w-full"/>
            </div>
            <div className='mt-[80px] flex flex-col justify-center items-center'>

                {/**Render all slides */}

                {slides.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? 'w-[200px] sm:w-[442px]' : 'hidden'} id='onboarding-skip'>
                        <figure>
                            
                            <img className='' src={slide.src} alt={slide.alt}></img>
                        </figure>
                        <p className='mt-[50px] sm:mt-[32px] text-[#000] text-[48px] font-medium text-left'>
                            {slide.title}
                        </p>
                        <p className='text-[14px] '>{slide.content}</p>
                    </div>
                ))}

                {/**Slide Status */}
                
                <div className='sm:mt-1 mt-[40px] w-[202px] flex justify-between'>
                    <div>
                        <div className='flex items-between justify-between w-[48px]'>
                            {slides.map((slide, index) => (
                                <div key={index} className='mt-[40px] '>
                                  <FiCircle className={`w-[10px] text-gray-500 ${index === currentSlide ? 'fill-[#3D5A80]':'bg-gray'}`} />                            
                                </div>
                            ))}
                        </div>
                        <div className='text-[14px] mt-[8px] font-medium w-[30px]'>
                            <Link to='/login'>SKIP</Link>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <button onClick={nextSlide} className="bg-[#3f85e3] w-[131px] mt-[40px] hover:bg-blue-500 text-white flex justify-center items-center font-medium text-[16px] font-semibold hover:text-white py-2 px-4 border hover:bg-[#497DBE] sm:hover:bg-[#497DBE] border-blue-500 hover:border-transparent rounded">
                            <FiArrowRight className='w-[24px]'/>
                        </button>  
                    </div>
                </div>
            </div>             
        </div>
    )
};
export default Onboarding;