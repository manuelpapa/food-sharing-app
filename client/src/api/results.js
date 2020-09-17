export async function fetchResults() {
  // TODO: Connect API here later
  /*
  const response = await fetch("localhost:3001/app/offers", {
    header: {
      //TODO:
    },
  });*/

  //const result = await response.json();

  const mockedResults = [
    {
      id: 1,
      title: "Bananen",
      category: "fruits",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "15:00 - 16:00",
    },
    {
      id: 2,
      title: "Joghurt",
      category: "milk",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 3,
      title: "Baguette",
      category: "bread",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 4,
      title: "Haxe",
      category: "meat",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 5,
      title: "Joghurt",
      category: "milch",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 6,
      title: "Joghurt",
      category: "milch",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 7,
      title: "Joghurt",
      category: "milch",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 8,
      title: "Joghurt",
      category: "milch",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
  ];
  return mockedResults;
}

export async function fetchResultObject() {
  const mockedResult = {
    id: 1,
    title: "12 frische Bananen",
    category: "fruits",
    tags: ["obst", "vegan", "vegetarisch", "laktosefrei", "glutenfrei"],
    location: {
      street: "Musterstraße 12",
      zip: "50968",
      city: "Köln",
    },
    date: "15.08.2020",
    time: "15:00 - 16:00",
  };
  return mockedResult;
}
