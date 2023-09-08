

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-[#B0F9A9] to-[#17F9F2] flex flex-col justify-center items-center p-4"> 
            <div>
                &#xA9; 2023 EcoVision
            </div>
            
            
            <grid className="grid-cols-3 grid space-x-4 mt-4"> 
                <div> 
                    <span>
                        <span> <span className="font-bold text-lg"> C</span>alista</span>
                        <span> <span className="font-bold text-lg"> T</span>an 👩‍💻</span>
                        
                        <span className="block">Frontend Developer</span>
                    </span>
                </div>

                <div> 
                    <span>
                        <span> <span className="font-bold text-lg"> J</span>erome</span>
                        <span> <span className="font-bold text-lg"> G</span>oh 👨‍💻</span>
                        <span className="block">Backend Developer </span>
                        
                    </span>
                </div>

                <div> 
                    <span>
                        <span> <span className="font-bold text-lg"> T</span>an</span>
                        <span> <span className="font-bold text-lg"> S</span>i</span>
                        <span> <span className="font-bold text-lg"> R</span>ui 🧑‍💻</span>
                        <span className="block">Machine Learning Engineer</span>
                    </span>
                </div>
            </grid>
        </div>
    )
}

//#B0F9A9 #17F9F2

