import Image from 'next/image';

import background from '../assets/images/backgound.jpg';
import logo from '../assets/images/logo.png';
import riotLogo from '../assets/images/riot-logo.png';

export default function Home() {
    return (
        <main>
            <header>
                <title>my app</title>
                <meta name="description" content="Meu site" />
            </header>
            <section className={`
                flex 
                flex-col 
                items-end
                justify-center
                h-screen
                `}
            >
                <Image src={background} fill={true} className='object-cover absolute z-0' />
                <Image src={logo} className='z-10 absolute w-96 h-48 top-24 mr-10' />
                <Image src={riotLogo} className='z-10 absolute w-24 h-20 bottom-2 left-2' />
                <div className='bg-[#0e0a18] bg-opacity-90 w-96 h-96 mr-10 p-2 z-10 flex flex-col'>
                    <div>
                        <p>Account Login</p>
                    </div>
                    <div className='mx-4 mt-5 border-y border-white flex flex-col pt-3 pb-8 gap-3'>
                        <div>
                            <label htmlFor='username'>Username</label>
                            <input className='w-full' type="text" id='username' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input className='w-full' type="text" id='password' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 justify-center items-center'>
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember Username</label>
                            </div>
                            <div>
                                <button className='bg-gradient-to-b from-[#d78a2c] to-[#962d03] py-1 px-5 rounded-lg text-white'>
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 mx-4'>
                        <p>Don't Have an account? <a href="#">Sign up now</a>!</p>
                        <p>Forgot your <a href="#">username</a>?</p>
                        <p>Forgot your <a href="#">password</a>?</p>
                    </div>
                </div>
                <div className='z-10 mr-10 w-96 text-center'>
                    <p className='font-bold'>Playing League of Legends is <span className='text-[#ecd24f]'>FREE</span>!</p>
                    <p className='text-blue-800 font-bold hover:cursor-pointer'>Sign up now</p>
                </div>
                <div className='absolute bottom-1 right-1 flex flex-col items-end justify-end'>
                    <a className='text-[#161836] font-bold hover:cursor-pointer'>Terms of Use</a>
                    <div className='flex gap-1'>
                        <label htmlFor="disableMusic">Disable Login Music</label>
                        <input type="checkbox" id="disableMusic" />
                    </div>
                    <div className='flex gap-1'>
                        <label htmlFor="disableAnimation">Disable Menu Animations</label>
                        <input type="checkbox" id="disableAnimation" />
                    </div>
                </div>
            </section>
        </main>
    )
}