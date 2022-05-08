import { Rings } from  'react-loader-spinner'
import s from './Loader.module.css';


export default function Loader() {
   return (
      <div className={s.wrapper}>
         <Rings
            height="100"
            width="100"
            color='skyblue '
            ariaLabel="loading-indicator" />
      </div>
   )
};