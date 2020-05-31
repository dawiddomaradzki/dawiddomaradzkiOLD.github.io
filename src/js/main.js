
console.log(`Hello world!`);

const list = document.querySelector('.repositories__list--js');


fetch('https://api.github.com/users/dawiddomaradzki/repos')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      console.log(`${repo.name} ${repo.html_url}`);
      const {description, html_url, name} = repo;
      list.innerHTML += `
      <li class="list__item">
      <a class="list__link" href="${html_url}">${name}</a>
      <p>${description ? description : "brak opisu"}</p>
      </li>
      `;
    }

  })

  .catch(err => {
    console.log(err);
  })

