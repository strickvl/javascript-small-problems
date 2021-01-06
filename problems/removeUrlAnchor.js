function removeUrlAnchor(str) {
  return str.match(/\w+\.\w+\.\w+/);
}

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1'
removeUrlAnchor('www.codewars.com?page=1')
