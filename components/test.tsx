// This file is For the TSX formatting
// @ts-ignore
const Welcome = () =>{
    console.log("Welcome From my Doc")
}

export type subMenus ={
    menuId: string;
    routeUrl: string;
    subMenus: subMenus[];
}

export type MenuProps = {
    menuId: string;
    routeUrl: string;
    subMenus: subMenus[];
}[];

export function FilterNestedArray(menus: MenuProps){
    let flattendedMenus: subMenus[] = [];

    function flatMenusRecursive(m: any){
        for (let i of m){
            flattendedMenus.push(i);
            if(i.subMenus?.length){
            }
        }
    }
}