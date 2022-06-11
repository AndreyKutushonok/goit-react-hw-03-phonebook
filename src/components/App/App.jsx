import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import s from './App.module.css';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            this.setState({ contacts: parsedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const prevContacts = prevState.contacts;
        const nextContacts = this.state.contacts;
        if (prevContacts !== nextContacts)
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    formSubmit = data => {
        let names = this.state.contacts.map(el => el.name.toLowerCase());
        let newContact = { id: nanoid(), ...data };

        names.includes(data.name.toLowerCase())
            ? alert(`${data.name} is already in your contacts`)
            : this.setState(({ contacts }) => ({
                  contacts: [newContact, ...contacts],
              }));
    };

    onChangeFilter = e => {
        const { value } = e.currentTarget;
        this.setState({ filter: value });
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId
            ),
        }));
    };

    render() {
        const stateFilter = this.state.filter;
        const lowerCaseFilter = stateFilter.toLowerCase();
        const visibleContacts = this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(lowerCaseFilter)
        );

        return (
            <div className={s.wrap}>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmit} />
                <h2>Contacts</h2>
                <Filter
                    filter={stateFilter}
                    changeFilter={this.onChangeFilter}
                />
                <ContactList
                    deleteContact={this.deleteContact}
                    contacts={visibleContacts}
                />
            </div>
        );
    }
}

export default App;
