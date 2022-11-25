import {  changeFilterAction } from '../../redux/phonebook/filter/sliceFilter';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.filter.filter);

    const filerContact = e => {
        const { value } = e.currentTarget;
        dispatch( changeFilterAction(value));
    }

    return (
        <Label>
            Search contacts by name
            <Input
                type="text" name='filter' value={value} onChange={filerContact} />
        </Label>
    );
};