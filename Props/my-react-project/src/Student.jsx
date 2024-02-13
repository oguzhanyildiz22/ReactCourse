import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>

    );
}

Student.propTypes={
    name: propTypes.string,
    age: propTypes.number
}


export default Student