import React from "react";
import {MdOutlineMailOutline} from "react-icons/md";
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {Tooltip} from "@nextui-org/tooltip";
import {Image} from "@nextui-org/react";


const eductions = [
    {
        major: 'Ph.D. in Operations Research and Analytics',
        university: 'National University of Singapore, 2019 - Present'
    },
    {
        major: 'M.S. in Business Administration ',
        university: 'Hefei University of Technology, 2016 - 2019'
    },
    {
        major: 'B.S. in Business Administration',
        university: 'Anhui University of Finance and Economics, 2012 - 2016'
    },
    {
        major: 'B.S. in Financial Engineering',
        university: 'Anhui University of Finance and Economics, 2012 - 2016'
    }
]

const About = () => {

    return (
        <div className={'animate-fade-in flex flex-row justify-between items-center'}>
            <div className={'flex flex-col items-center gap-10'}>
                <Image src={'/yvonne.jpg'} className={'w-60 h-60 bg-[#ffffff] rounded-full'}></Image>
                <div className={'flex flex-col w-full gap-2 text-sm items-center gap-3'}>
                    <div className={'text-lg'}>Ph.D. Candidate</div>
                    <div>Institute of Operations Research and Analytics</div>
                    <div>National University of Singapore</div>
                    <div className={'flex w-full justify-center gap-2'}>
                        <Tooltip content={"Email"}>
                            <a href={'mailto:huijun96@u.nus.edu'}>
                                <MdOutlineMailOutline className={'h-6 w-6 hover:text-[#e07a5f]'}/>
                            </a>
                        </Tooltip>

                        <Tooltip content={'LinkedIn'}>
                            <a href={'https://www.linkedin.com/in/yvonne-huijun-zhu-a09331251/'} target={'_blank'}>
                                <AiFillLinkedin
                                    className={'h-6 w-6 hover:text-[#e07a5f]'}
                                />
                            </a>
                        </Tooltip>

                        <Tooltip content={'Instagram'}>
                            <div>
                                <AiFillInstagram
                                    className={'h-6 w-6 hover:text-[#e07a5f]'}
                                />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col w-2/3 gap-4'}>
                <p className={'text-2xl text-[#3d405b]'}>About me</p>
                <div className={'text-md'}>
                    I am a final-year Ph.D. student from Institute of Operations Research and Analytics (IORA),
                    National University of Singapore (NUS), advised by Professor <a href={'https://www.joelgoh.net/'} className={'text-[#3d405b] hover:text-[#e07a5f]'} target={'_blank'}>Joel Goh</a>
                    &nbsp;and Professor <a href={'https://sites.google.com/view/yifanfeng/'} className={'text-[#3d405b] hover:text-[#e07a5f]'} target={'_blank'}>Yifan Feng</a>. My research interests primarily focus on experimental design and
                    data-driven
                    modeling in healthcare operations management, such as, hospital-at-home operations, healthcare
                    staffing
                    for pandemic preparedness, and dengue prevention and control.
                </div>
                <div className={'flex flex-row gap-10 mt-6'}>
                    <div className={'flex flex-col gap-2'}>
                        <p className={'text-xl text-[#3d405b]'}>Research Interest</p>
                        <ul className={'list-disc flex flex-col p-4'}>
                            <li>Healthcare operations management</li>
                            <li>Data-driven modelling</li>
                            <li>Experimental design</li>
                            <li>Supply chain management</li>
                        </ul>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <p className={'text-xl text-[#3d405b]'}>Education</p>
                        <ul className={'list-disc flex flex-col p-4'}>
                            {
                                eductions.map(({major, university}, index) =>
                                    <li key={index}>
                                        <span className={'block'}>{major}</span>
                                        <span className={'block text-[#393e46] text-sm'}>{university}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;