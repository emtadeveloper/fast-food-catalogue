import React, { useState } from 'react'

const StepOne = ({ goNext }) => {
    return (
        <>
            <h1> Step #1 : Enter your name : </h1>
            <button onClick={() => goNext({ name: "MyName" })}>Next</button>
        </>
    )
}

const StepTwo = ({ goNext }) => {
    return (
        <>
            <h1> Step #2 : Enter your name : </h1>
            <button onClick={() => goNext({ name: 23 })}>Next</button>
        </>
    )
}

const StepThree = ({ goNext }) => {
    return (
        <>
            <h1> Step #3 : Enter your name : </h1>
            <button onClick={() => goNext({ name: "Mars" })}>Next</button>
        </>
    )
}


const ControlledFlows = ({ children, onDone, currentIndex, onNext }) => {

    const goNext = (dataFormStep) =>  {
        onNext(dataFormStep)
    }

    const currentChild = React.Children.toArray(children)[currentIndex]

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext })
    }
    return currentChild
}


export default function App() {

    const [data, setData] = useState({})
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const goNext = (dataFormStep) => {
        setData({ ...data, ...dataFormStep });
        setCurrentStepIndex(currentStepIndex + 1);
    }

    return (
        <ControlledFlows currentIndex={currentStepIndex} onNext={goNext}>

            <StepOne />
            <StepTwo />
            <StepThree />

        </ControlledFlows>
    )
}