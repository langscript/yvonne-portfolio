import React, {ReactNode} from "react";

type ResearchListItemProps = {
    title: string | ReactNode
    // keywords: string
    // introduction: string
}

const publishedPapers: ResearchListItemProps[] = [
    {
        title: <div>Optimization of batch operations with a truncated batch-position-based learning effect. <a className={'italic'}>Omega</a>, 2019,
            85: 134-143.</div>
        // keywords: 'Project management; Learning effects; Batch processing; Optimization; Approximation algorithms',
        // introduction: 'Large-scale vehicle routing problem; Cost-effectiveness analysis; Public health; Infectious diseases Introduction: This work introduces a method to analyze the cost-effectiveness of maintaining an ovitrap network by incorporating operational processes and labor costs. Effectiveness is modeled using an epidemiological framework and measured by reductions in disability-adjusted life years (DALYs). Labor costs are estimated by modeling the workload required for periodic trap maintenance through Traveling Salesman Problems (TSPs). Using Singapore’s large-scale ovitrap network as a case study, the work estimates the impact of network size on the mosquito population and demonstrates the method’s application.'
    },
    {
        title: <div>Integrated optimization of design and production for personalized products. <a className={'italic'}>Journal of Modelling in Management</a>, 2023,
            85: 1746-5664.</div>
        // keywords: 'Project management; Learning effects; Batch processing; Optimization; Approximation algorithms',
        // introduction: 'Large-scale vehicle routing problem; Cost-effectiveness analysis; Public health; Infectious diseases Introduction: This work introduces a method to analyze the cost-effectiveness of maintaining an ovitrap network by incorporating operational processes and labor costs. Effectiveness is modeled using an epidemiological framework and measured by reductions in disability-adjusted life years (DALYs). Labor costs are estimated by modeling the workload required for periodic trap maintenance through Traveling Salesman Problems (TSPs). Using Singapore’s large-scale ovitrap network as a case study, the work estimates the impact of network size on the mosquito population and demonstrates the method’s application.'
    }
]

const workingPapers: ResearchListItemProps[] = [
    {
        title: <div>Cost-effectiveness of a network of lethal ovitraps for the prevention and control of dengue fever,
            work with Joel Goh, Shuzhen Sim (NEA) and Joel Aik (NEA). &nbsp;<a className={'italic'}>under R&R for
                Production and Operations
                Management.</a></div>
    }
]

const workingInProgress: ResearchListItemProps[] = [
    {
        title: 'The value of flexibility in adaptive experiments, work with Yifan Feng and Tu Ni.'
    },
    {
        title: 'Dynamic hospital staffing during pandemic, work with Joel Goh, Yee Wei Lim (Alexandra Hospital) and Louisa Jin (Alexandra Hospital).'
    },
    {
        title: 'Large-scale home health care routing and scheduling, work with Joel Goh and Stephanie Ko (NUHS).'
    }
]

const Research = () => {

    return (
        <div className={'animate-fade-in flex flex-col gap-10'}>
            <div className={'flex flex-col gap-6'}>
                <p className={'text-2xl font-bold'}>Published Paper</p>
                <ul className={'flex flex-col space-y-8'}>
                    {
                        publishedPapers.map(({title}, index) => (
                            <li key={index}>
                                {title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={'flex flex-col gap-6'}>
                <p className={'text-2xl font-bold'}>Working Paper</p>
                <ul className={'flex flex-col space-y-8'}>
                    {
                        workingPapers.map(({title}, index) => (
                            <li key={index}>
                                {title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={'flex flex-col gap-6'}>
                <p className={'text-2xl font-bold'}>Working in Progress</p>
                <ul className={'flex flex-col space-y-8'}>
                    {
                        workingInProgress.map(({title}, index) => (
                            <li key={index}>
                                {title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Research;