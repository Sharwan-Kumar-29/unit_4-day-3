let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

function displayCards(user) {
  user.forEach((elem) => {
    let main_div = document.getElementById("cards");

    let card = document.createElement("div");
    let name = document.createElement("p");

    let name_span = document.createElement("span");
    name_span.innerHTML = "<b>Name: </b>";

    name.append(name_span, document.createTextNode(elem.name));

    let username = document.createElement("p");

    let username_span = document.createElement("span");
    username_span.innerHTML = "<b>Username: </b>";

    username.append(username_span, document.createTextNode(elem.username));

    let email = document.createElement("p");

    let email_span = document.createElement("span");
    email_span.innerHTML = "<b>Email: </b>";

    email.append(email_span, document.createTextNode(elem.email));

    card.append(name, username, email);
    main_div.append(card);
  });
}

displayCards(user);

document
  .querySelector("input[type = 'submit'")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let main_div = document.getElementById("cards");

    let name = document.getElementById("name");
    let username = document.getElementById("username");
    let email = document.getElementById("email");

    if (name.value == "" || username.value == "" || email.value == "") {
      alert("empty value");
      return;
    }
    main_div.innerHTML = "";

    user.push({
      name: name.value,
      username: username.value,
      email: email.value,
    });

    displayCards(user);
    name.value = "";
    username.value = "";
    email.value = "";
  });
