const token = '5c2e6e125cc9ac643e44e928c9f67546cccc085b'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));