import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
    const dispatch = useDispatch();

    const handleDeletePizzaItem = () => {
        dispatch(deleteItem(pizzaId));
    };

    return (
        <Button type="small" onClick={handleDeletePizzaItem}>
            Delete
        </Button>
    );
};

export default DeleteItem;
