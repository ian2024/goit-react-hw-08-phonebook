import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selector';
import { Form, Input, Label, Button } from './ContactForm.styled';

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
        
            default:
                return;
        }
    };


    const handleSubmit = e => {
    return contacts?.find(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : dispatch(
          addContacts({
            name,
            number,
          })
        );
  };




    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </Label>
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    );
    

};