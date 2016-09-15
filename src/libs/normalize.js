export default {
   toUnicode: (text) => {
      let newString = ''
      if (text) {
         for (let i = 0; i < text.length; i++) {
            newString += text.charCodeAt(i) != '0' ? String.fromCharCode(text.charCodeAt(i)) : ''
         }
      }
      return newString
   }

}
