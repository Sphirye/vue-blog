export default class StringTool {
    static isEmpty(strings : String[]): Boolean{

        let emptyString: boolean = false

        for (let string of strings) {
            if (string.trim() === "") { emptyString = true }
        }
        
        if (emptyString) { return true }
        else { return false }
    }
}