import PropTypes from 'prop-types'
import s from './ContactList.module.css'

const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul className={s.contactsList}>
            {contacts.map(({id, name, number})=>
            <li className={s.listItem} key={id}>
                <p className={s.contactText}>{name}: {number}</p>
                <button className={s.button} onClick={() => deleteContact(id)}>Delete</button>
            </li>)}
        </ul>
    )
}

ContactList.propTypes={
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}
export default ContactList