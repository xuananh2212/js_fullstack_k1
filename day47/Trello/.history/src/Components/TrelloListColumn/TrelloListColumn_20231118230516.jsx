
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';
import styles from './TrelloListColumn.module.scss';
import clsx from 'clsx';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.list.listColumn);
     return (
          <div className="container">
               <div className={ }>
                    {
                         listColumn.length &&
                         listColumn.map((itemColumn) => (
                              <TrelloColumn
                                   key={itemColumn._id}
                                   itemColumn={itemColumn} />
                         ))
                    }
               </div>
          </div>
     )
}
