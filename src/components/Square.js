class Square extends React.Component {
    render() {
        /* 
            props is how information flows in React Apps from parents to children
        */
        return (
            <button className="square">
                { this.props.value }
            </button>
        )
    }
}