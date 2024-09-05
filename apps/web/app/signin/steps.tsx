import React from 'react'

const Steps = () => {
    return (
        <div className='h-dvh bg-lightTheme w-fit p-8 flex flex-col justify-center items-center gap-8'>
            <h1 className='text-2xl font-bold'>Videos to guide you</h1>
            <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-2 gap-4 w-80">
                    <a
                        className="block rounded-lg overflow-hidden border relative"
                        href="/onboarding_link.mp4"
                        target="_blank"
                    >
                        <video className="object-contain">
                            <source src="/onboarding_link.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2 pt-4 flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full bg-white p-2.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                    className="w-5 h-5 text-black"
                                >
                                    <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
                                </svg>
                            </div>
                            <div className="text-white text-sm font-medium leading-4">
                                How to link your Facebook page
                            </div>
                        </div>
                    </a>
                    <a
                        className="block rounded-lg overflow-hidden border relative"
                        href="/onboarding_switch.mp4"
                        target="_blank"
                    >
                        <video className="object-contain">
                            <source src="/onboarding_switch.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2 pt-4 flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full bg-white p-2.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                    className="w-5 h-5 text-black"
                                >
                                    <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
                                </svg>
                            </div>
                            <div className="text-white text-sm font-medium leading-4">
                                How to switch to Business?
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Steps