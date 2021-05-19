exports.firstLetterM = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

exports.validURL = (str) => {
    if (str.includes('https://tenor.com/')) return false;
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i')
      '(http(s?):)|([/|.|\w|\s])*\.(?:jpg|png)'; // fragment locator
    return !!pattern.test(str);
}