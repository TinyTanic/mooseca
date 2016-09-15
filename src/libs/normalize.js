export default {
   toUnicode: (text) => {
      let newString = ''
      if (text) {
         for (let i = 0; i < text.length; i++) {
            newString += text.charCodeAt(i) != '0' ? String.fromCharCode(text.charCodeAt(i)) : ''
         }
      }
      return newString
   },
   hexToBase64: (buffer) => {
      var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
   }

}
