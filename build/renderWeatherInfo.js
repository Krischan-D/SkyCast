
export function renderWeather(weatherData){

    const container = document.getElementById('weather-data-container');
    const dataTags = document.getElementById('data-container')


    const date = getCurrentTime()
    const {
        city,
        country,
        weatherStatus,
        weatherDescription,
        temp,
        feelsLike,
        low,
        high,
        humidity,
        wind,
        visibility,
        clouds,
        sunrise,
        sunset,
        lastUpdated,
        weatherIcon,
    } = weatherData;

    // Create the weatherInfo object using the destructured variables
    const weatherInfo = {
        city,
        country,
        weatherStatus,
        weatherDescription,
        temp,
        feelsLike,
        low,
        high,
        humidity,
        wind,
        visibility,
        clouds,
        sunrise,
        sunset,
        lastUpdated,
        weatherIcon,
    };

    console.log(weatherIcon)
    console.log(weatherInfo)

    let weatherInfoHTML = ''
    
    
    weatherInfoHTML += `
     <div class="flex w-full justify-center flex-col gap-4 lg:flex-row  h-full flex-1 lg:p-4 mt-4   "
                    id="data-container">
                    <div class="text-white flex flex-col lg:w-8/12  ">
                        <div class="text-center lg:text-left pt-6  ">
                            <span class="inline-block text-xl"> ${date}</span>
                            <div
                                class="flex  items-center  gap-4 w-full text-4xl  lg:text-6xl justify-center lg:justify-start lg:my-4">
                                <span class=" h-16 w-16  lg:h-20 lg:w-20 ">
                                    <img src="${weatherIcon.icon}" alt="">
                                    ${weatherIcon.icon}
                                </span>
                                <h1 class="font-semibold">${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</h1>
                            </div>
                            <span class="inline-block text-xl">${city}, ${country}</span>
                        </div>

                        <div class="flex  my-16 flex-wrap   md:mt-20  gap-8 justify-evenly lg:w-1/2">
                            <div
                                class=" p-6 rounded-md   backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
                                <h2 class="text-2xl">${feelsLike}°</h2>
                                <span>Feels like</span>
                            </div>
                            <div
                                class=" p-6 rounded-md   backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
                                <h2 class="text-2xl">${low}°</h2>
                                <span>Lowest </span>
                            </div>
                            <div
                                class=" p-6 rounded-md   backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
                                <h2 class="text-2xl">${high}°</h2>
                                <span>Highest </span>
                            </div>
                        </div>

                        <div class="flex w-full my-auto lg:w-3/5  tex-white flex-col sm:flex-row gap-4">
                            <div
                                class="w-full sm:w-1/2 flex gap-4 h-24  relative rounded-2xl  backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
                                <div class="h-full w-24 bg-primary  rounded-2xl p-4">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z"
                                                fill="#ffffff"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z"
                                                fill="#ffffff"></path>
                                            <path
                                                d="M5.25 12C5.25 13.1778 5.5521 14.2858 6.08267 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H11.25V11.8107L10.5303 12.5303C10.2374 12.8232 9.76256 12.8232 9.46967 12.5303C9.17678 12.2374 9.17678 11.7626 9.46967 11.4697L11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303C14.2374 12.8232 13.7626 12.8232 13.4697 12.5303L12.75 11.8107V16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173C18.4479 14.2858 18.75 13.1778 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12Z"
                                                fill="#ffffff"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="flex flex-1 items-center justify-center flex-col">
                                    <h2 class="">Sunrise</h2>
                                    <p>${sunrise}</p>
                                </div>
                            </div>
                            <div
                                class="w-full sm:w-1/2 sm:mt-0 flex gap-4 h-24  relative rounded-2xl  backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
                                <div class="h-full w-24 bg-primary  rounded-2xl p-4">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z"
                                                fill="#ffffff"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z"
                                                fill="#ffffff"></path>
                                            <path
                                                d="M5.25 12C5.25 13.1778 5.5521 14.2858 6.08267 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173C18.4479 14.2858 18.75 13.1778 18.75 12C18.75 8.52558 16.125 5.66428 12.75 5.2912V9.18923L13.4697 8.46956C13.7626 8.17666 14.2374 8.17666 14.5303 8.46956C14.8232 8.76245 14.8232 9.23732 14.5303 9.53022L12.5303 11.5302C12.2374 11.8231 11.7626 11.8231 11.4697 11.5302L9.46967 9.53022C9.17678 9.23732 9.17678 8.76245 9.46967 8.46956C9.76256 8.17666 10.2374 8.17666 10.5303 8.46956L11.25 9.18923V5.2912C7.87504 5.66428 5.25 8.52558 5.25 12Z"
                                                fill="#ffffff"></path>
                                        </g>
                                    </svg>

                                </div>
                                <div class="flex flex-1 items-center justify-center flex-col">
                                    <h2 class="">Sunset</h2>
                                    <p>${sunset}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div
                        class="backdrop-blur-md flex flex-col gap-4 bg-white/10 border border-white/10 rounded-lg shadow-lg p-4 w-full lg:w-4/12  xl:w-3/12 ">
                        <!-- Temperature and Last Updated -->
                        <div
                            class="justify-center lg:justify-start text-white text-center lg:text-right pt-10 border-b-2 border-slate-200 pb-4">
                            <h1 class="text-5xl">${temp}°</h1>
                            <span>Last Updated: ${lastUpdated}</span>
                        </div>

                        <div class="grid  lg:grid-cols-2  xl:grid-cols-2 gap-4  mt-12 ">
                            <div
                                class="flex p-2 rounded-md    justify-center   gap-2 relative  h-20  text-white  w-full  items-center  backdrop-blur-md bg-white/10  border-white/10 shadow-lg ">
                                <span class=" left-2  bg-primary p-2 top-2 flex z-2 h-10 rounded-full ">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z"
                                                fill="#ffffff"></path>
                                            <path
                                                d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z"
                                                fill="#ffffff"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z"
                                                fill="#ffffff"></path>
                                            <path
                                                d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z"
                                                fill="#ffffff"></path>
                                        </g>
                                    </svg></span>
                                <div class="flex flex-col">
                                    <span>Humidity</span>
                                    <span>${humidity}%</span>
                                </div>
                            </div>
                            <div
                                class="flex p-2  rounded-md justify-center   gap-2 relative  h-20  text-white  w-full  items-center  backdrop-blur-md bg-white/10  border-white/10 shadow-lg ">
                                <span class=" left-2  bg-primary p-2 top-2 flex z-2 h-10 rounded-full ">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M3 8H5M7 5.85714V5.5C7 4.11929 8.11929 3 9.5 3C10.8807 3 12 4.11929 12 5.5C12 6.88071 10.8807 8 9.5 8H8"
                                                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                                            <path
                                                d="M4 14H5M15 17V17.5C15 19.433 16.567 21 18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14H9"
                                                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                                            <path
                                                d="M2 11H8M15 8V7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H12.25"
                                                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                                        </g>
                                    </svg></span>
                                <div class="flex flex-col">
                                    <span>Wind</span>
                                    <span>${wind}m/s</span>
                                </div>
                            </div>
                            <div
                                class="flex p-2 rounded-md  justify-center   gap-2 relative  h-20  text-white  w-full  items-center  backdrop-blur-md bg-white/10  border-white/10 shadow-lg ">
                                <span class=" left-2  bg-primary p-2 top-2 flex z-2 h-10 rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24"
                                        stroke="#ffffff">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z">
                                            </path>
                                        </g>
                                    </svg></span>
                                <div class="flex flex-col">
                                    <span>Visibility</span>
                                    <span>${visibility / 1000} km</span>
                                </div>
                            </div>
                            <div
                                class="flex p-2  rounded-md justify-center   gap-2 relative  h-20  text-white  w-full  items-center  backdrop-blur-md bg-white/10  border-white/10 shadow-lg ">
                                <span class=" left-2  bg-primary p-2 top-2 flex z-2 h-10 rounded-full ">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M18.2857 22C20.3371 22 22 20.4198 22 18.4706C22 16.9257 20.9554 15.6126 19.5008 15.1344C19.2941 13.3711 17.7203 12 15.8095 12C13.7582 12 12.0952 13.5802 12.0952 15.5294C12.0952 15.9605 12.1766 16.3736 12.3255 16.7555C12.1509 16.723 11.9704 16.7059 11.7857 16.7059C10.2472 16.7059 9 17.891 9 19.3529C9 20.8149 10.2472 22 11.7857 22H18.2857Z"
                                                fill="#ffffff"></path>
                                            <path
                                                d="M21.5512 14.5503C21.3158 14.3677 21.0642 14.2048 20.7996 14.0639C20.1404 11.9627 18.114 10.5 15.8095 10.5C13.0557 10.5 10.6861 12.5991 10.5978 15.3691C9.2768 15.7395 8.18723 16.7123 7.73072 18H6.28571C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498C20.393 7.78024 22 9.88113 22 12.3529C22 13.1324 21.8402 13.8749 21.5512 14.5503Z"
                                                fill="#ffffff"></path>
                                        </g>
                                    </svg> </span>
                                <div class="flex flex-col">
                                    <span>Clouds</span>
                                    <span>${clouds}%</span>
                                </div>
                            </div>



                        </div>

                    </div>

                </div>
    
    
    `

    // dataTags.insertAdjacentHTML('beforeend', weatherInfoHTML)
    dataTags.innerHTML = weatherInfoHTML
   
}



function getCurrentTime(){
    const currentDate = new Date();
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const daysOfWeek = days[currentDate.getDay()]
    const getMonth = months[currentDate.getMonth()]
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const mins = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    
    const formattedDateTime = `${daysOfWeek} ${getMonth} ${dayOfMonth} ${year}`;

    const formattedTime = currentDate.toLocaleString('en-US',{
        hour: 'numeric', // 1, 2, 3, ..., 12
        minute: 'numeric', // 00, 01, ..., 59
        hour12: true // Use 12-hour format
    })


    return `${daysOfWeek}, ${getMonth} ${dayOfMonth}, ${year} ${formattedTime}`
    

}