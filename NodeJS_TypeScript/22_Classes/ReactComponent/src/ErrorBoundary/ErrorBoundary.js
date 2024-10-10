import React, { useEffect, useState } from 'react'

// классовый компонент не нуждается в Хуке, так как он является самодостаточным
export class ErrorBoundary extends React.Component {
    state;
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }
    // setState(value){
    //     this.state = value;
    // }
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    render() {
        if (this.state.hasError) {
            return <div>Произошла ошибка по нашей вине - исправляем</div>
        } else {
            return this.props.children
        }
    }
}

// Функциональный компонент нуждается в Хуке. Ниже расписаны состояния жизн.цикла компонента
function ErrorBoundaryFunc(props) {
    const [state, setState] = useState();

    useEffect(()=> {
    }, [])

    useEffect(() => {
    }, [state])

    useEffect(() => {
        return () => {
        }
    }, [])




    return <Parent>
        <ChildrenElement />
    </Parent>
}

const Parent = (props) => {
    return <div>{props.children}</div>
}

const ChildrenElement = (props) => {
    return <div>Children Element</div>
}