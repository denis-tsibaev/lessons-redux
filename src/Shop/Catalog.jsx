import { useSelector } from 'react-redux';
import { Card } from './Card';
import './Catalog.scss';

export const Catalog = () => {
    const catalogitems = useSelector(state => state.catalogitems);
    console.log(catalogitems);
    return (
        <div>
            <ol className="catalog">
                {catalogitems?.map(card => (
                    <Card className="catalog-item" item={card} />
                ))}
            </ol>
        </div>
    );
};