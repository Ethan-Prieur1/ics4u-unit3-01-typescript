/**
 * This program reverses a string using recursion
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-11-01
 */

  function reverseString(string: string): string {
        if (string === "") {
        return "";
        } else {
        return reverseString(string.substr(1)) + string.charAt(0);
        }
}

  function main() {
        const aString = 'recursion'
        
        console.log('')
        console.log(`the original string is: ${aString}`)
        console.log(`the reversed string is: ${reverseString(aString)}`)
        console.log('\nDone.')
}
main()
