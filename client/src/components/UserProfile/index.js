import PropTypes from 'prop-types';


function UserProfile(props){

    const handleOnClick = () => {
        props.onUpdateClicked('User profile updated');
    }
    
    return(
        <div>
            <div>{props.title}</div>
            <div>{props.name}</div>

            <button onClick={handleOnClick}>Update</button>
        </div>
    )
}

UserProfile.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address:PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }).isRequired,
    onUpdateClicked: PropTypes.func
}

export default UserProfile;