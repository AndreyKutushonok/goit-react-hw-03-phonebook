import React, { Component } from 'react';
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

class ContactForm extends Component{
    state={
        name: "",
        number: "" 
    }

    changeText = e => {
        this.setState({ [e.currentTarget.name] : e.currentTarget.value});
    };

    addContact = (e) => {
        e.preventDefault()
    
        this.props.onSubmit(this.state);
        this.setState({ name: "", number: "" })
    }

    render(){
        const {name, number}= this.state
        
        return(
            <form onSubmit={this.addContact} className={s.form}>
                <span className={s.name}>Name</span>
                    <label >
                        <input
                            onChange={this.changeText}
                            value={name}
                            className={s.input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <span className={s.name}>Number</span>
                    <label>
                        <input
                            className={s.input}
                            onChange={this.changeText}
                            value={number}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                <button className={s.button} type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes={
    onSubmit: PropTypes.func.isRequired
}

export default ContactForm