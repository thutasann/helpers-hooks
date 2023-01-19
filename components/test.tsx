export const Welcome = () =>{
    console.log("This file is For the TSX formatting")
}

// ------------- PlayGround ---------------
import { MutableRefObject } from 'react';

type Accordion ={
    ref: MutableRefObject<any>
    expanded :boolean
    toggle: () => void 
    setCollapseState?: () => void
}



