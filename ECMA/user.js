export default function User() {

    console.warn("hello user")

}

export function oldUser() {
    console.warn("hello old user")
}
export let userVar = "hello user variable";
export class UserClass {
    test() 
    {
        console.warn("returns the testing environment")
    }
}
export let UOC = new UserClass();