import Main from './Main'
import Tech from './Tech'
import Language from './Language';
import Design from './Design';

export default function Home({width, setWidth}){
    return(
        <div>
            <Main />
            <Tech 
                width = {width}
                setWidth = {setWidth}
            />
            <Language 
                width = {width}
                setWidth = {setWidth}
            />
            <Design
                width = {width}
                setWidth = {setWidth}
            /> 
        </div>
    )
}