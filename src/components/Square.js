class Square extends React.Component {
    constructor(props) {
        super(props)

        this.state = { value: null }
    }

    render() {
        /* 
            Additional Reading:
            https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
        */
        return (
            <button className="square" onClick={ () => this.setState({ value: 'X' }) } >
                { this.state.value }
            </button>
        )
    }
}