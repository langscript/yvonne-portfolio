import React from "react";

const teachingAssistants = [
    {
        exp: 'BMC5415 Managing Human Capital Today (EMBA)',
        date: 'Spring 2024'
    },
    {
        exp: 'BMA5017 Managerial Operations and Analytics (MBA)',
        date: 'Spring 2021, Fall 2021'
    },
    {
        exp: 'IE6001 Foundations of Optimization (Ph.D.)',
        date: 'Fall 2020'
    }
]

const teachingInstructors = [
    {
        exp: 'DBA4811 Analytics for Consulting (Undergraduate)',
        date: 'Fall 2024'
    },
    {
        exp: 'Business Management (Polytechnic)',
        date: 'Spring 2018'
    },
    {
        exp: 'Public Relations (Polytechnic)',
        date: 'Fall 2017'
    }
]

const Teaching = () => {

    return (
        <div className={'animate-fade-in flex flex-col gap-10'}>
            {/*<p className={'text-2xl font-bold'}>Teaching</p>*/}
            <div className={'flex flex-col gap-6'}>

                <div className={'flex flex-col space-y-8 max-w-full md:max-w-fit'}>
                    <p className={'text-2xl font-bold'}>Teaching Assistant</p>
                    {
                        teachingAssistants.map(({exp, date}, index) => (
                            <div
                                className={'flex flex-col md:flex-row justify-between gap-2 md:gap-24 md:items-center w-full'}
                                key={index}>
                                <div>{exp}</div>
                                <div className={'self-end md:self-center'}>{date}</div>
                            </div>
                        ))
                    }
                    <p className={'text-2xl font-bold'}>Teaching Instructor</p>
                    {
                        teachingInstructors.map(({exp, date}, index) => (
                            <div
                                className={'flex flex-col md:flex-row justify-between gap-2 md:gap-24 md:items-center w-full'}
                                key={index}>
                                <div>{exp}</div>
                                <div className={'self-end md:self-center'}>{date}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Teaching;